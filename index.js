'use strict'

const {parse} = require('./spdx')

module.exports = function (source) {
  return parse(source)
}