"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var b_system = function () {
  /* ENUMS */
  var GLOBAL = {
    HEADER_BODY_SCROLL: 120
  };
  var DATA_ATTR = {
    NAVBAR_NAV: '[data-b-system="navbar-nav"]',
    NARROW_BUTTON_WRAPPER: '[data-b-system="narrow-button-wrapper"]',
    NARROWER: '[data-b-system="narrower"]'
  };
  var EVENTS = {
    ON_HEADER_BECOMES_NARROWER: 'onHeaderBecomesNarrower',
    ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND: 'onTransparentHeaderChangeBackground'
  };
  /* MEDIA QUERIES */

  var $_breakpoints = function () {
    var breakpointList = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };
    var breakpoints = {};

    var onResize = function onResize() {
      Object.entries(breakpointList).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        // eslint-disable-next-line no-undef
        breakpoints[key] = window.innerWidth >= value;
      });
    }; // eslint-disable-next-line no-undef


    window.addEventListener('resize', onResize, {
      passive: true
    });
    onResize();
    return breakpoints;
  }();
  /* SELECTOR */


  var $_selector = function () {
    var selectors = {};

    selectors.find = function (selector) {
      return document.querySelector(selector);
    };

    selectors.findAll = function (selector) {
      return document.querySelectorAll(selector);
    };

    selectors.findFromFather = function (child, selector) {
      return child.parentElement.querySelector(selector);
    };

    selectors.findAllFromFather = function (child, selector) {
      return child.parentElement.querySelectorAll(selector);
    };

    return selectors;
  }();
  /*
     * HEADER
     */
  // When the body is scrolled the header with data-sys attribute 'narrower' becomes narrower


  function _changeHeaderSizeOnScroll() {
    var headerList = $_selector.findAll(DATA_ATTR.NARROWER);

    if (!headerList) {
      return;
    }

    if (headerList.length > 1) {
      throw new Error('There cannot be more than one header with the attribute data-sys="narrower" per home.');
    }

    var mainHeader = headerList[0];

    var onScrollOrResize = function onScrollOrResize() {
      if (window.scrollY >= GLOBAL.HEADER_BODY_SCROLL && $_breakpoints.lg) {
        mainHeader.dispatchEvent(new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, {
          detail: {
            isNarrow: true
          }
        }));
        mainHeader.classList.add('header-narrow');
        return;
      }

      mainHeader.dispatchEvent(new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, {
        detail: {
          isNarrow: false
        }
      }));
      mainHeader.classList.remove('header-narrow');
    };

    window.addEventListener('scroll', onScrollOrResize, {
      passive: true
    });
    window.addEventListener('resize', onScrollOrResize, {
      passive: true
    });
  } // When the body is scrolled the transparent header changes color


  function _changeTransparentHeaderOnScroll() {
    var headerTransparent = $_selector.find('.header-transparent');

    if (!headerTransparent) {
      return;
    }

    window.addEventListener('scroll', function (event) {
      if (window.scrollY >= GLOBAL.HEADER_BODY_SCROLL) {
        headerTransparent.classList.remove('header-transparent');
        headerTransparent.classList.add('header-light');
        headerTransparent.dispatchEvent(new CustomEvent(EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND, {
          detail: {
            isTransparent: false
          }
        }));
        return;
      }

      headerTransparent.classList.remove('header-light');
      headerTransparent.classList.add('header-transparent');
      headerTransparent.dispatchEvent(new CustomEvent(EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND, {
        detail: {
          isTransparent: true
        }
      }));
    });
  }

  function _createHeaderNavDrawer() {
    var offCanvasList = $_selector.findAll("header .offcanvas".concat(DATA_ATTR.NAVBAR_NAV));

    if (!offCanvasList) {
      return;
    }

    offCanvasList.forEach(function (offCanvas) {
      var nav = $_selector.findFromFather(offCanvas, 'header nav.navbar ul.navbar-nav');

      if (!nav) {
        throw new Error('There is no nav element in the header');
      }

      var offCanvasBody = document.createElement('div');
      offCanvasBody.classList.add('offcanvas-body');
      offCanvasBody.append(nav.cloneNode(true));
      offCanvas.appendChild(offCanvasBody);
    });
  }

  function _makeHeaderButtonNarrow() {
    var header = $_selector.find(DATA_ATTR.NARROWER);
    var buttons = $_selector.findAll("header ".concat(DATA_ATTR.NARROW_BUTTON_WRAPPER, " button.btn-primary"));

    if (!buttons && buttons.length <= 0) {
      return;
    }

    header.addEventListener(EVENTS.ON_HEADER_BECOMES_NARROWER, function (event) {
      buttons.forEach(function (button) {
        if (event.detail.isNarrow) {
          button.classList.add('btn-narrow');
          return;
        }

        button.classList.remove('btn-narrow');
      });
    });
  } // Bootstrap functions


  function _bootstrap() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  _bootstrap();

  _changeHeaderSizeOnScroll();

  _changeTransparentHeaderOnScroll();

  _createHeaderNavDrawer();

  _makeHeaderButtonNarrow();

  var exports = {};
  exports.$breakpoints = $_breakpoints;
  exports.$selector = $_selector;
  exports.$EVENTS = EVENTS;
  return exports;
}();