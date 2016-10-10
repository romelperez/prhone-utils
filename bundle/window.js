"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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