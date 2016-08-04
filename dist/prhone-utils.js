(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {

  /**
   * If the window is mobile.
   *
   * @memberof PrhoneUtils
   * @type {Boolean}
   */
  isMobile: function () {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }(),

  /**
   * Browser is old.
   *
   * @memberof PrhoneUtils
   * @type {Boolean}
   */
  isOld: !('querySelector' in document && 'localStorage' in window && 'addEventListener' in window),

  /**
   * If the browser is IE and the value is the version. Otherwise, it is false.
   *
   * @memberof PrhoneUtils
   * @type {Number}
   */
  isIE: function () {
    var v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->', all[0]) {}

    return v > 4 ? v : false;
  }(),

  /**
   * If the browser is iOS.
   *
   * @memberof PrhoneUtils
   * @type {Boolean}
   */
  isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
};

},{}],2:[function(require,module,exports){
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

},{"./browser":1,"./window":3}],3:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var windowUtils = {

  /**
   * Get the usable browser window dimentions.
   *
   * @memberof PrhoneUtils
   *
   * @param  {Number} wMin - Minimum width.
   * @param  {Number} hMin - Minimum height.
   * @param  {Number} wMax - Maximum width.
   * @param  {Number} hMax - Maximum height.
   *
   * @return {Object} { Number width, Number height }
   */

  getDims: function getDims(wMin, hMin, wMax, hMax) {

    var getSize = function getSize(Name) {

      var size;
      var name = Name.toLowerCase();
      var document = window.document;
      var documentElement = document.documentElement;

      // IE6 & IE7 don't have window.innerWidth or innerHeight
      if (window["inner" + Name] === undefined) {
        size = documentElement["client" + Name];
      }

      // WebKit doesn't include scrollbars while calculating viewport size so we have to get fancy
      else if (window["inner" + Name] != documentElement["client" + Name]) {

          // Insert markup to test if a media query will match document.doumentElement["client" + Name]
          var bodyElement = document.createElement("body");
          bodyElement.id = "vpw-test-b";
          bodyElement.style.cssText = "overflow:scroll";
          var divElement = document.createElement("div");
          divElement.id = "vpw-test-d";
          divElement.style.cssText = "position:absolute;top:-1000px";
          // Getting specific on the CSS selector so it won't get overridden easily
          divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
          bodyElement.appendChild(divElement);
          documentElement.insertBefore(bodyElement, document.head);

          if (divElement["offset" + Name] == 7) {
            // Media query matches document.documentElement["client" + Name]
            size = documentElement["client" + Name];
          } else {
            // Media query didn't match, use window["inner" + Name]
            size = window["inner" + Name];
          }
          // Cleanup
          documentElement.removeChild(bodyElement);
        }

        // Default to use window["inner" + Name]
        else {
            size = window["inner" + Name];
          }

      return size;
    };

    var dims = {
      width: getSize('Width'),
      height: getSize('Height')
    };

    dims.width = wMin ? dims.width < wMin ? wMin : dims.width : dims.width;
    dims.width = wMax ? dims.width > wMax ? wMax : dims.width : dims.width;
    dims.height = hMin ? dims.height < hMin ? hMin : dims.height : dims.height;
    dims.height = hMax ? dims.height > hMax ? hMax : dims.height : dims.height;

    return dims;
  },


  /**
   * Get a window content height.
   *
   * @memberof PrhoneUtils
   *
   * @param  {Window} [win] - Window object.
   * @return {Number}
   */
  getHeight: function getHeight(win) {
    win = win ? win.document : window.document;
    return Math.max(Math.max(win.body.scrollHeight, win.documentElement.scrollHeight), Math.max(win.body.offsetHeight, win.documentElement.offsetHeight), Math.max(win.body.clientHeight, win.documentElement.clientHeight));
  },


  /**
   * Get window frame content height.
   *
   * @memberof PrhoneUtils
   *
   * @param  {Node} frame - Window frame object.
   * @return {Number}
   */
  getFrameHeight: function getFrameHeight(frame) {
    var height = 0;
    if (frame.Document && frame.Document.body.scrollWidth) {
      height = frame.contentWindow.document.body.scrollHeight;
    } else if (frame.contentDocument && frame.contentDocument.body.scrollWidth) {
      height = frame.contentDocument.body.scrollHeight;
    } else if (frame.contentDocument && frame.contentDocument.body.offsetWidth) {
      height = frame.contentDocument.body.offsetWidthHeight;
    }
    return height;
  },


  /**
   * Changes `<iframe>` DOM node height to fit the content propertly. A default
   * minimum height can be set.
   *
   * @memberof PrhoneUtils
   *
   * @param  {String} iframe - Iframe node element.
   * @param  {Object} [conf] - Changes settings.
   * @param  {String} [conf.level] - Where does the iframe resides?
   * 'parent', 'top' or by default, the same window.
   * @param  {Number} [conf.min] - Minimum height to set. Default 300 pixels.
   * @param  {Number} [conf.plus] - Pixels to add/substract to the final height.
   * @return {Number} - Final height set in pixels.
   */
  fitIframeHeight: function fitIframeHeight(iframe) {
    var conf = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


    var level = conf.level;
    var min = conf.min;
    var plus = conf.plus;

    var win = {};
    win.scroll = $(window.top).scrollTop();

    if (level === 'parent') {
      level = window.parent;
    } else if (level === 'top') {
      level = window.top;
    } else {
      level = window;
    }

    if (typeof iframe === 'string') {
      iframe = level.document.getElementById(iframe);
    } else if ((typeof iframe === "undefined" ? "undefined" : _typeof(iframe)) !== 'object') {
      throw new Error('An iframe element is required as first parameter.');
    }

    min = typeof min === 'number' ? min : 300;
    plus = typeof plus === 'number' ? plus : 0;

    $(iframe).height('auto');
    win.height = windowUtils.getFrameHeight(iframe);

    var final = (win.height > min ? win.height : min) + plus;

    $(iframe).height(final);

    $(window.top).scrollTop(win.scroll);

    return final;
  },


  /**
   * Get the position of the document respecting the scroll.
   *
   * @memberof PrhoneUtils
   *
   * @return {Object} - { Number x, Number y }
   */
  getScrollOffset: function getScrollOffset() {

    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return { x: x, y: y };
  },


  /**
   * Animate the scroll to where an element is located.
   *
   * @memberof PrhoneUtils
   *
   * @param  {Object|jQuery} conf
   * @param  {jQuery} conf.$el
   * @param  {jQuery} [conf.$ct] - If the element is inside a positionated
   * container element, this should be provided.
   * @param  {Number} [conf.time]
   * @param  {String} [conf.type] - The type of animation to scroll to the element.
   * If can be 'center' (by default) or 'top'.
   * @param  {Number} [conf.topOffset]
   * @param  {Function} [conf.callback]
   *
   * @return {jQuery}
   */
  scrollTo: function scrollTo(conf) {

    // A jQuery instance or a jQuery selector.
    if (conf instanceof jQuery || typeof conf === 'string') {
      conf = {
        $el: conf
      };
    }

    conf = $.extend({}, {
      $el: null,
      $ct: 'body, html',
      time: 300,
      type: 'center', // 'center' || 'top'
      callback: null,
      topOffset: 0
    }, conf);

    conf.$el = $(conf.$el);
    conf.$ct = $(conf.$ct ? conf.$ct : 'body, html');

    var s = 0;
    if (!conf.$ct.is('body')) {
      var $s = _(conf.$ct).max(function (ct) {
        return $(ct).scrollTop();
      });
      s = $($s).scrollTop();
    }

    var y = conf.$el.position().top;
    var h = conf.$ct.is('body') ? windowUtils.getDims().height : conf.$ct.outerHeight();
    var eH = conf.$el.outerHeight();

    var c = void 0;
    if (conf.type === 'top') {
      c = s + y;
    } else {
      c = s + y - h / 2 + eH / 2;
    }

    c += conf.topOffset;

    conf.$ct.stop().animate({
      scrollTop: c
    }, conf.time, conf.callback);

    return conf.$el;
  }
};

module.exports = windowUtils;

},{}]},{},[2]);
