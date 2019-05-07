'use strict'

var parse = require('./spdx')

module.exports = function (source) {
  return parse(source)
}