'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert');
const {
  StringifiedJSON
} = require('./../index.js');

new DeepStrictEqualAssertion(
  new StringifiedJSON(
    { a: 'b', c: 'd', e: [0, 1, 2, 3, {f: 'g'}] }
  ), '{"a":"b","c":"d","e":[0,1,2,3,{"f":"g"}]}'
).call();
