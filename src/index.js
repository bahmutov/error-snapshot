'use strict'

const snapshot = require('snap-shot-it')
const la = require('lazy-ass')
const is = require('check-more-types')

const errorSnapshot = fn => {
  la(is.fn(fn), 'expected function to call', fn)

  const validateError = e => {
    snapshot({
      constructor: e.constructor.name,
      message: e.message
    })
    return true
  }

  la(is.raises(fn, validateError), 'function does not raise expected error')
}

module.exports = errorSnapshot
