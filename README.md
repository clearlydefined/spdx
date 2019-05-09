# @clearlydefined/spdx

ClearlyDefined focused SPDX utility library.

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
