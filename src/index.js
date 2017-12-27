'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const R = require('ramda')

const errorSnapshot = snapshot => {
  la(is.fn(snapshot), 'expected snapshot function', snapshot)

  return (fn, ...props) => {
    la(is.fn(fn), 'expected function to call', fn)

    const pickProps = R.pick(props)
    const pickMain = R.pick(['name', 'message'])

    const validateError = e => {
      const mainProps = pickMain(e)
      const moreProps = pickProps(e)
      const all = R.merge(mainProps, moreProps)
      snapshot(all)
      return true
    }

    la(is.raises(fn, validateError), 'function does not raise expected error')
  }
}

module.exports = errorSnapshot
