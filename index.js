'use strict'

var spdx = require('./spdx')

module.exports = function (source) {
  return spdx(source)
}