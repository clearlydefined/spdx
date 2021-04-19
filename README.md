# @clearlydefined/spdx

ClearlyDefined focused SPDX utility library.

This is used by [clearlydefined/service](https://github.com/clearlydefined/service)

## Install

```
npm install @clearlydefined/spdx
```

```js
const SPDX = require('@clearlydefined/spdx')

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
* Release the new package to npm (the npm login credentials are in the ClearlyDefined Azure keyvault, if you need access or help with this reach out to @nellshamrell)

```
cd spdx
git checkout master
git fetch origin
git rebase origin/master
npm login
npm publish
```

* Update [clearlydefined/service](https://github.com/clearlydefined/service) to use the new version (similar to [this pull request](https://github.com/clearlydefined/service/pull/832))

