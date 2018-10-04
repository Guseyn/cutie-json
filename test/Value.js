'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Value
} = require('./../index.js');

new EqualAssertion(
  new Value(
    { a: 'b', c: 'd', e: [0, 1, 2, 3, {f: 'g'}] }, 'e[2]'
  ), 2
).call();

new EqualAssertion(
  new Value(
    { a: 'b', c: 'd', e: [0, 1, 2, 3, {f: 'g'}] }, 'e[4].f'
  ), 'g'
).call();
