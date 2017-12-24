'use strict'

const snapshot = require('snap-shot-it')
const la = require('lazy-ass')
const is = require('check-more-types')

const errorSnapshot = fn => {
  la(is.fn(fn), 'expected function to call', fn)
  la(is.raises(fn, e => snapshot(e.message)))
}

module.exports = errorSnapshot
