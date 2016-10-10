'use strict';

var browser = require('./browser');
var win = require('./window');

/**
 * @name PrhoneUtils
 * @type {Object}
 *
 * Browser JavaScript utilities.
 */
var PrhoneUtils = {};

var extend = function extend(obj) {
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      PrhoneUtils[p] = obj[p];
    }
  }
};

extend(browser);
extend(win);

window.PrhoneUtils = PrhoneUtils;

module.exports = PrhoneUtils;