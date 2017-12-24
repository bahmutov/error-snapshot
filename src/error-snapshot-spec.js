'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
const errorSnapshot = require('.')

describe('error-snapshot', () => {
  it('is a function', () => {
    la(is.fn(errorSnapshot))
  })
})
