const extend = require('extend');
const browser = require('./browser');
const win = require('./window');
const general = require('./general');

const PrhoneUtils = extend({}, browser, win, general);

window.PrhoneUtils = PrhoneUtils;

module.exports = PrhoneUtils;
