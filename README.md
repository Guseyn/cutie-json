# cutie-json

[![NPM Version](https://img.shields.io/npm/v/@cuties/json.svg)](https://npmjs.org/package/@cuties/json)
[![Build Status](https://travis-ci.org/Guseyn/cutie-json.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-json)
[![codecov](https://codecov.io/gh/Guseyn/cutie-json/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-json)

[Cutie](https://github.com/Guseyn/cutie) extension for <b>JSON</b> in js. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-json/tree/master/test).

## Install

`npm install @cuties/json`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Here needed async objects from the table below
} = require('@cuties/json');
```

For more information about parameters in the async objects visit [docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON).

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `ParsedJSON`     | `JSON.parse` | `string` | `json` |
| `PrettyStringifiedJSON` | sync call from `json-stringify-pretty-compact` module | `json` | `string` |
| `StringifiedJSON` | `JSON.stringify` | `json` | `string` |
| `Value` | `eval('json' + '.' + path)` | `json, path` | `value` |
