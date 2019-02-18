'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is value
class Value extends AsyncObject {
  // path has signature: 'key1.key2.key3[0]'
  constructor (json, path) {
    super(json, path)
  }

  definedSyncCall () {
    return (json, path) => {
      return eval(`json.${path}`)
    }
  }
}

module.exports = Value
