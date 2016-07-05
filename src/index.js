const extend = require('extend');
const browser = require('./browser');
const win = require('./window');
const general = require('./general');

/**
 * @name PrhoneUtils
 * @type {Object}
 *
 * Browser JavaScript utilities.
 */
const PrhoneUtils = extend({}, browser, win, general);

window.PrhoneUtils = PrhoneUtils;

module.exports = PrhoneUtils;
