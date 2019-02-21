'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const prettyStringify = require('json-stringify-pretty-compact')

// Represented result is string
class PrettyStringifiedJSON extends AsyncObject {
  constructor (json) {
    super(json)
  }

  syncCall () {
    return prettyStringify
  }
}

module.exports = PrettyStringifiedJSON
