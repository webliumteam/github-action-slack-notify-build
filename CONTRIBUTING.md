# Contribution Guidelines for Slack Notify Build

## Issues and Feature Requests

To report bugs or to request new features, you may [create a new issue](https://github.com/voxmedia/github-action-slack-notify-build/issues) on the repository. Our team will do its best to respond to your request, but we cannot guarantee a response or a solution.

## Releasing a New Version

Use Node.js 24 and Yarn 1.22.22 when installing dependencies, running tests, and rebuilding the action bundle.

Update `package.json`, `CHANGELOG.md`, and the bundled `dist/index.js` in the release pull request. After the pull request is merged and CI passes, create an exact semantic-version tag such as `v1.7.1` and a matching GitHub Release on the merge commit.

Do not move major-version aliases such as `v1` or `v2` unless that rollout has been reviewed separately.

## Code of Conduct

By contributing to this repository, you are expected to abide by the [Code of Conduct laid out by Vox Product](http://code-of-conduct.voxmedia.com/).
