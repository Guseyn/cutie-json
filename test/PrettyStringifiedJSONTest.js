'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert');
const {
  PrettyStringifiedJSON
} = require('./../index.js');

new DeepStrictEqualAssertion(
  new PrettyStringifiedJSON(
    {
      "bool": true,
      "short array": [1, 2, 3],
      "long array": [
        {"x": 1, "y": 2},
        {"x": 2, "y": 1},
        {"x": 1, "y": 1},
        {"x": 2, "y": 2}
      ]
    }
  ), 
`{
  "bool": true,
  "short array": [1, 2, 3],
  "long array": [
    {"x": 1, "y": 2},
    {"x": 2, "y": 1},
    {"x": 1, "y": 1},
    {"x": 2, "y": 2}
  ]
}`
).call();
