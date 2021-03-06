'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class StringifiedJSON extends AsyncObject {
  constructor (json) {
    super(json)
  }

  syncCall () {
    return JSON.stringify
  }
}

module.exports = StringifiedJSON
