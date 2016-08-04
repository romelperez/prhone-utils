const browser = require('./browser');
const win = require('./window');

/**
 * @name PrhoneUtils
 * @type {Object}
 *
 * Browser JavaScript utilities.
 */
const PrhoneUtils = {};

const extend = function (obj) {
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      PrhoneUtils[p] = obj[p];
    }
  }
};

extend(browser);
extend(win);

window.PrhoneUtils = PrhoneUtils;

module.exports = PrhoneUtils;
