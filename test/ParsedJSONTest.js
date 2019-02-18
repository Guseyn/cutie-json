'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ParsedJSON
} = require('./../index.js')

new DeepStrictEqualAssertion(
  new ParsedJSON(
    '{"a": "b", "c": "d", "e": [0, 1, 2, 3, {"f": "g"}]}'
  ), { a: 'b', c: 'd', e: [0, 1, 2, 3, { f: 'g' }] }
).call()
