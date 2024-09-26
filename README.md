# @clearlydefined/spdx

ClearlyDefined focused SPDX utility library.

This is used by [clearlydefined/service](https://github.com/clearlydefined/service)

## Install

Package is hosted in GitHub packages
See [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-packages-from-other-organizations) for details on how to use

```
npm install clearlydefined/spdx
```

```js
const SPDX = require('spdx')

SPDX.parse('MIT')
SPDX.stringify({ license: 'MIT' })
SPDX.satisfies('MIT', 'MIT OR Apache-2.0')
SPDX.merge('MIT', 'Apache-2.0', 'AND')
SPDX.expand('MIT or Apache-2.0')
SPDX.normalize('mit')
SPDX.lookupByName('Apache License 2.0')
```

## Local development

```
git clone https://github.com/clearlydefined/spdx
cd spdx
npm i
npm test
```

## Release
* Merge pull request to this repo (make sure that it updates the version of this package - similar to [this pull request](https://github.com/clearlydefined/spdx/pull/12).)
* Create a relese on the Repository to run the [publish workflow](.github/workflows/publish-package.yml)


* Update [clearlydefined/service](https://github.com/clearlydefined/service) to use the new version

