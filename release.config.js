/* eslint-disable no-template-curly-in-string */
const pkg = require('./package.json');

const branches = [
    'main',
    {
        name: 'alpha',
        prerelease: true
    }
];

const commitAnalyzer = [
    '@semantic-release/commit-analyzer',
    {
        preset: 'conventionalcommits',
        releaseRules: [
            { type: 'docs', release: 'patch' }, // Trigger a patch release for docs commits
            { type: 'chore', scope: 'readme', release: 'patch' }, // Patch release for README updates
        ],
    }
];

const releaseNotesGenerator = '@semantic-release/release-notes-generator';
const changelog = '@semantic-release/changelog';
const npm = '@semantic-release/npm';

const deprecate = [
    'semantic-release-npm-deprecate',
    {
        deprecations: [
            {
                version: "< ${nextRelease.version.split('.')[0]}",
                message: "Please use ^${nextRelease.version.split('.')[0]}.0.0."
            }
        ]
    }
];

const git = [
    '@semantic-release/git',
    {
        assets: ['README.md', 'CHANGELOG.md', 'package.json'], // Ensure README changes are committed
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
];

module.exports = {
    branches,
    plugins: [
        commitAnalyzer,
        releaseNotesGenerator,
        changelog,
        npm,
        deprecate,
        git
    ]
};
