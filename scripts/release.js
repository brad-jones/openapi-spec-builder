const os = require('os');
const path = require('path');
const execa = require('execa');
const Listr = require('listr');
const fs = require('fs-extra');
const lodash = require('lodash');
const semver = require('semver');
const pRetry = require('p-retry');
const yargs = require('yargs').argv;
const getStream = require('get-stream');
const conventionalChangelog = require('conventional-changelog');
const conventionalRecommendedBump = require('conventional-recommended-bump');

if (process.env['CI']) yargs['verbose'] = true;

new Listr
(
    [
        {
            title: 'Ensure git is good to go',
            skip: () => yargs['skip-git-checks'],
            task: () => new Listr
            (
                [
                    {
                        title: 'Are we on the master branch?',
                        task: () => execa.stdout('git', ['rev-parse', '--abbrev-ref', 'HEAD']).then(result =>
                        {
                            if (lodash.trim(result) !== 'master')
                            {
                                throw new Error('Must release from the master branch!');
                            }
                        })
                    },{
                        title: 'Is our repo clean?',
                        task: () => execa.stdout('git', ['status', '--porcelain']).then(result =>
                        {
                            if (result !== '')
                            {
                                throw new Error('Unclean working tree. Commit or stash changes first.');
                            }
                        })
                    },{
                        title: 'Do we have any un pulled changes?',
                        task: () => execa.stdout('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD']).then(result =>
                        {
                            if (result !== '0')
                            {
                                throw new Error('Remote history differ. Please pull changes.');
                            }
                        })
                    }
                ],
                { concurrent: true }
            )
        },{
            title: 'Get the current version',
            task: (ctx, task) => execa.stdout('git', ['describe', '--tags', '--abbrev=0'])
            .then(result =>
            {
                ctx.currentVersion = lodash.trim(result).replace('v', '');
                task.title = `${task.title}: ${ctx.currentVersion}`;
            })
            .catch(e =>
            {
                ctx.currentVersion = '1.0.0';
                task.title = `${task.title}: ${ctx.currentVersion}`;
            })
        },{
            title: 'Determine the next version',
            task: (ctx, task) => new Promise((resolve, reject) =>
            {
                conventionalRecommendedBump({ preset: 'angular' }, (err, result) =>
                {
                    if (err)
                    {
                        reject(err);
                    }
                    else
                    {

                        ctx.nextVersion = semver.valid(result.releaseType) || semver.inc(ctx.currentVersion, result.releaseType);
                        task.title = `${task.title}: ${ctx.nextVersion} because ${result.reason}.`
                        resolve();
                    }
                });
            })
        },{
            title: 'Generate changelog',
            task: (ctx, task) => new Promise((resolve, reject) =>
            {
                getStream(conventionalChangelog
                (
                    { preset: 'angular' },
                    {
                        version: ctx.nextVersion,
                        previousTag: 'v' + ctx.currentVersion,
                        currentTag: 'v' + ctx.nextVersion
                    }
                ))
                .then(changeLog =>
                {
                    if (lodash.trim(changeLog).split('\n').length > 2)
                    {
                        ctx.changeLog = changeLog.replace(/#+ \[.*?\](\(.*?\)) \(.*?\)/, '[Click here for the full diff]$1');
                        resolve();
                    }
                    else
                    {
                        throw new Error('Empty changelog, therefore no new release is required!');
                    }
                })
                .catch(reject)
            })
        },{
            title: 'Update package version',
            task: async (ctx, task) =>
            {
                let pkgFile = `${__dirname}/../package.json`;
                let pkg = require(pkgFile);
                pkg.version = ctx.nextVersion;
                await fs.writeFile(pkgFile, JSON.stringify(pkg, undefined, 4), 'utf8');
            }
        },{
            title: 'Publish package to npm',
            skip: () => yargs['skip-npm-publish'],
            task: () => execa('npm', ['publish'], { cwd: `${__dirname}/..` })
        },{
            title: 'Download the package we just published, to include in github release',
            skip: () => yargs['skip-npm-publish'],
            task: async (ctx, task) =>
            {
                ctx.uploads = [];
                await pRetry(execa.stdout('npm', ['pack', `@brad-jones/openapi-spec-builder@${ctx.nextVersion}`]).then(result =>
                    ctx.uploads.push(lodash.trim(result))
                ), { retries: 5 });
            }
        },{
            title: 'Upload new github release',
            task: (ctx) =>
            {
                let args = [
                    'upload',
                    '--owner', 'brad-jones',
                    '--repo', 'openapi-spec-builder',
                    '--tag', 'v' + ctx.nextVersion,
                    '--name', 'v' + ctx.nextVersion,
                    '--body', `${ctx.changeLog}`
                ];

                if (ctx.uploads)
                {
                    args = args.concat(ctx.uploads);
                }

                return execa(`${__dirname}/../node_modules/.bin/github-release`, args);
            }
        }
    ],
    {
        renderer: yargs['verbose'] ? 'verbose' : 'default'
    }
)
.run().catch(e =>
{
    if (yargs['verbose']) console.error(e);
    process.exit(1);
});
