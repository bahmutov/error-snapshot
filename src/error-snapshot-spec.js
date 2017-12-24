'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
const errorSnapshot = require('.')

describe('error-snapshot', () => {
  it('is a function', () => {
    la(is.fn(errorSnapshot))
  })

  it('snapshots error', () => {
    const fn = () => {
      throw new Error('A test error')
    }
    errorSnapshot(fn)
  })
})
