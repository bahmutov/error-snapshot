'use strict'

const snapshot = require('snap-shot-it')
const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
const errorSnapshot = require('.')(snapshot)

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

  it('snapshots extra properties by name', () => {
    const fn = () => {
      const e = new Error('A test error')
      e.foo = 42
      e.bar = 'some bar prop'
      throw e
    }
    errorSnapshot(fn, 'foo', 'bar')
  })

  it('handles custom errors', () => {
    class MyError extends Error {
      constructor (message) {
        super(message)
        this.name = 'MyError'
        this.someProp = true
      }
    }
    const fn = () => {
      throw new MyError('A test error')
    }
    errorSnapshot(fn, 'someProp')
  })
})
