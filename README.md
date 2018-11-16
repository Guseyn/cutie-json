# cutie-json

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>JSON</b> in js. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-json/tree/master/test).

# Usage

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

[npm-image]: https://img.shields.io/npm/v/@cuties/json.svg
[npm-url]: https://npmjs.org/package/@cuties/json
