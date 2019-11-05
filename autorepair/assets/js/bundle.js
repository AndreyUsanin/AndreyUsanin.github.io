/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MicroModal = function () {
  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal);

      // Save a reference of the modal
      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus // Register click events only if pre binding eventListeners

      };
      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add('is-open');
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal);

        if (this.config.awaitCloseAnimation) {
          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove('is-open');
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove('is-open');
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: '',
              height: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden',
              height: '100vh'
            });
            break;

          default:
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal();
          event.preventDefault();
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event);
        if (event.keyCode === 9) this.maintainFocus(event);
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes();
        if (focusableNodes.length) focusableNodes[0].focus();
      }
    }, {
      key: "maintainFocus",
      value: function maintainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MicroModal);

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/Object.keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/Object.keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Object.keys
if (!Object.keys) {
  Object.keys = function (object) {
    var keys = [];

    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }

    return keys;
  };
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addCSSRule.js ***!
  \************************************************************/
/*! exports provided: addCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCSSRule", function() { return addCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
  'insertRule' in sheet ? sheet.insertRule(selector + '{' + rules + '}', index) : sheet.addRule(selector, rules, index); // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addClass.js ***!
  \**********************************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.classList.add(str);
  }
} : function (el, str) {
  if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.className += ' ' + str;
  }
};


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addEvents.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addEvents.js ***!
  \***********************************************************/
/*! exports provided: addEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvents", function() { return addEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");

function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js ***!
  \*******************************************************************/
/*! exports provided: arrayFromNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromNodeList", function() { return arrayFromNodeList; });
function arrayFromNodeList(nl) {
  var arr = [];

  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }

  return arr;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/caf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/caf.js ***!
  \*****************************************************/
/*! exports provided: caf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });
var win = window;
var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function (id) {
  clearTimeout(id);
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/calc.js":
/*!******************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/calc.js ***!
  \******************************************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 



function calc() {
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      result = false;
  body.appendChild(div);

  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;

    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;

      if (div.offsetWidth === 100) {
        result = val.replace(str, '');
        break;
      }
    }
  } catch (e) {}

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();
  return result;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/checkStorageValue.js ***!
  \*******************************************************************/
/*! exports provided: checkStorageValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStorageValue", function() { return checkStorageValue; });
function checkStorageValue(value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/childNode.remove.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/childNode.remove.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ChildNode.remove
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/classListSupport.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/classListSupport.js ***!
  \******************************************************************/
/*! exports provided: classListSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/createStyleSheet.js ***!
  \******************************************************************/
/*! exports provided: createStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleSheet", function() { return createStyleSheet; });
// create and append style sheet
function createStyleSheet(media) {
  // Create the <style> tag
  var style = document.createElement("style"); // style.setAttribute("type", "text/css");
  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")

  if (media) {
    style.setAttribute("media", media);
  } // WebKit hack :(
  // style.appendChild(document.createTextNode(""));
  // Add the <style> element to the page


  document.querySelector('head').appendChild(style);
  return style.sheet ? style.sheet : style.styleSheet;
}
;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/docElement.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/docElement.js ***!
  \************************************************************/
/*! exports provided: docElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docElement", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/events.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/events.js ***!
  \********************************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
function Events() {
  return {
    topics: {},
    on: function on(eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function off(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function emit(eventName, data) {
      data.type = eventName;

      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function (fn) {
          fn(data, eventName);
        });
      }
    }
  };
}
;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/extend.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/extend.js ***!
  \********************************************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function extend() {
  var obj,
      name,
      copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/forEach.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/forEach.js ***!
  \*********************************************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach(arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getAttr.js ***!
  \*********************************************************/
/*! exports provided: getAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getBody.js ***!
  \*********************************************************/
/*! exports provided: getBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBody", function() { return getBody; });
function getBody() {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js ***!
  \*******************************************************************/
/*! exports provided: getCssRulesLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRulesLength", function() { return getCssRulesLength; });
function getCssRulesLength(sheet) {
  var rule = 'insertRule' in sheet ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getEndProperty.js ***!
  \****************************************************************/
/*! exports provided: getEndProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndProperty", function() { return getEndProperty; });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;

  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }

  return endProp;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getSlideId.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getSlideId.js ***!
  \************************************************************/
/*! exports provided: getSlideId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideId", function() { return getSlideId; });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getTouchDirection.js ***!
  \*******************************************************************/
/*! exports provided: getTouchDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchDirection", function() { return getTouchDirection; });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));

  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/has3DTransforms.js ***!
  \*****************************************************************/
/*! exports provided: has3DTransforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has3DTransforms", function() { return has3DTransforms; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");



function has3DTransforms(tf) {
  if (!tf) {
    return false;
  }

  if (!window.getComputedStyle) {
    return false;
  }

  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';
  cssTF += 'transform'; // Add it to the body to get the computed style

  body.insertBefore(el, null);
  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : el.remove();
  return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasAttr.js ***!
  \*********************************************************/
/*! exports provided: hasAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasClass.js ***!
  \**********************************************************/
/*! exports provided: classListSupport, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ "./node_modules/tiny-slider/src/helpers/classListSupport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"]; });


var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  return el.classList.contains(str);
} : function (el, str) {
  return el.className.indexOf(str) >= 0;
};


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hideElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hideElement.js ***!
  \*************************************************************/
/*! exports provided: hideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideElement", function() { return hideElement; });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') {
    el.style.display = 'none';
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isNodeList.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isNodeList.js ***!
  \************************************************************/
/*! exports provided: isNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeList", function() { return isNodeList; });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined";
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isVisible.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isVisible.js ***!
  \***********************************************************/
/*! exports provided: isVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/jsTransform.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/jsTransform.js ***!
  \*************************************************************/
/*! exports provided: jsTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsTransform", function() { return jsTransform; });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = to.indexOf('%') >= 0 ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;
  setTimeout(moveElement, tick);

  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;

    if (duration > 0) {
      setTimeout(moveElement, tick);
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js ***!
  \*******************************************************************/
/*! exports provided: mediaquerySupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaquerySupport", function() { return mediaquerySupport; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");



function mediaquerySupport() {
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;
  style.type = 'text/css';
  div.className = 'tns-mq-test';
  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();
  return position === "absolute";
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/passiveOption.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/passiveOption.js ***!
  \***************************************************************/
/*! exports provided: passiveOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveOption", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

var passiveOption = supportsPassive ? {
  passive: true
} : false;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/percentageLayout.js ***!
  \******************************************************************/
/*! exports provided: percentageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageLayout", function() { return percentageLayout; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean



function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;
  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);
  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : wrapper.remove();
  return supported;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/raf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/raf.js ***!
  \*****************************************************/
/*! exports provided: raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
var win = window;
var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
  return setTimeout(cb, 16);
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeAttrs.js ***!
  \*************************************************************/
/*! exports provided: removeAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttrs", function() { return removeAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");

function removeAttrs(els, attrs) {
  els = Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];
  var attrLength = attrs.length;

  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeCSSRule.js ***!
  \***************************************************************/
/*! exports provided: removeCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCSSRule", function() { return removeCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
  'deleteRule' in sheet ? sheet.deleteRule(index) : sheet.removeRule(index); // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeClass.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeClass.js ***!
  \*************************************************************/
/*! exports provided: removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.classList.remove(str);
  }
} : function (el, str) {
  if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.className = el.className.replace(str, '');
  }
};


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeEvents.js":
/*!**************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeEvents.js ***!
  \**************************************************************/
/*! exports provided: removeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvents", function() { return removeEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");

function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/resetFakeBody.js ***!
  \***************************************************************/
/*! exports provided: resetFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFakeBody", function() { return resetFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");

function resetFakeBody(body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line

    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].offsetHeight;
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setAttrs.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setAttrs.js ***!
  \**********************************************************/
/*! exports provided: setAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");

function setAttrs(els, attrs) {
  els = Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array ? els : [els];

  if (Object.prototype.toString.call(attrs) !== '[object Object]') {
    return;
  }

  for (var i = els.length; i--;) {
    for (var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setFakeBody.js ***!
  \*************************************************************/
/*! exports provided: setFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFakeBody", function() { return setFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");

function setFakeBody(body) {
  var docOverflow = '';

  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow; //avoid crashing IE8, if background image is used

    body.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setLocalStorage.js ***!
  \*****************************************************************/
/*! exports provided: setLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try {
      storage.setItem(key, value);
    } catch (e) {}
  }

  return value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/showElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/showElement.js ***!
  \*************************************************************/
/*! exports provided: showElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showElement", function() { return showElement; });
function showElement(el, forceHide) {
  if (el.style.display === 'none') {
    el.style.display = '';
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/toDegree.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/toDegree.js ***!
  \**********************************************************/
/*! exports provided: toDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return toDegree; });
function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/whichProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/whichProperty.js ***!
  \***************************************************************/
/*! exports provided: whichProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whichProperty", function() { return whichProperty; });
function whichProperty(props) {
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
    prefixes.forEach(function (prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });
    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;

  for (var i = 0; i < props.length; i++) {
    var prop = props[i];

    if (el.style[prop] !== undefined) {
      return prop;
    }
  }

  return false; // explicit for ie9-
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/tiny-slider.js ***!
  \*****************************************************/
/*! exports provided: tns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
/* harmony import */ var _helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Object.keys */ "./node_modules/tiny-slider/src/helpers/Object.keys.js");
/* harmony import */ var _helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/childNode.remove */ "./node_modules/tiny-slider/src/helpers/childNode.remove.js");
/* harmony import */ var _helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/caf.js */ "./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/extend.js */ "./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/getSlideId.js */ "./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/calc.js */ "./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ "./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ "./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/toDegree.js */ "./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/forEach.js */ "./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/addClass.js */ "./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/removeClass.js */ "./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/hasAttr.js */ "./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/getAttr.js */ "./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/setAttrs.js */ "./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ "./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/hideElement.js */ "./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/showElement.js */ "./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/isVisible.js */ "./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/whichProperty.js */ "./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ "./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/addEvents.js */ "./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/removeEvents.js */ "./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./helpers/events.js */ "./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./helpers/jsTransform.js */ "./node_modules/tiny-slider/src/helpers/jsTransform.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





































var tns = function tns(options) {
  options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  var doc = document,
      win = window,
      KEYS = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date();

    try {
      tnsStorage = win.localStorage;

      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }

      if (!localStorageAccess) {
        tnsStorage = {};
      }
    } catch (e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
          tnsStorage.removeItem(item);
        });
      } // update browserInfo


      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tC']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tC', Object(_helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__["calc"])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tPL']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tPL', Object(_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__["percentageLayout"])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tMQ']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tMQ', Object(_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__["mediaquerySupport"])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTf']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTf', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['t3D']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 't3D', Object(_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__["has3DTransforms"])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tAE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tAE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(ANIMATIONDURATION, 'Animation'), localStorageAccess); // get element nodes from selectors

  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};
  tnsList.forEach(function (item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) {
          console.warn('Can\'t find', options[item]);
        }

        return;
      }
    }
  }); // make sure at least 1 slide

  if (options.container.children.length < 1) {
    if (supportConsoleWarn) {
      console.warn('No slides found in', options.container);
    }

    return;
  } // update options


  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};

    for (var key in responsive) {
      var val = responsive[key]; // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 

      val = typeof val === 'number' ? {
        items: val
      } : val;
      responsiveTem[key] = val;
    }

    responsive = responsiveTem;
    responsiveTem = null;
  } // update options


  function updateOptions(obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') {
          obj[key] = 'page';
        }

        if (key === 'edgePadding') {
          obj[key] = false;
        }

        if (key === 'autoHeight') {
          obj[key] = false;
        }
      } // update responsive options


      if (key === 'responsive') {
        updateOptions(obj[key]);
      }
    }
  }

  if (!carousel) {
    updateOptions(options);
  } // === define and set variables ===


  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;
    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;

  if (responsive) {
    setBreakpointZone();
  }

  if (carousel) {
    container.className += ' tns-vpfix';
  } // fixedWidth: viewport > rightBoundary > indexMax


  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__["createStyleSheet"])(),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions,
      // collection of slide positions
  slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = !carousel || !loop ? true : false,
      // transform
  transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
  getIndexMax = function () {
    if (fixedWidth) {
      return function () {
        return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
      };
    } else if (autoWidth) {
      return function () {
        for (var i = slideCountNew; i--;) {
          if (slidePositions[i] >= -rightBoundary) {
            return i;
          }
        }
      };
    } else {
      return function () {
        if (center && carousel && !loop) {
          return slideCount - 1;
        } else {
          return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        }
      };
    }
  }(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
  resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_34__["Events"](),
      // id, class
  newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__["getSlideId"])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
    'click': onControlsClick,
    'keydown': onControlsKeydown
  },
      navEvents = {
    'click': onNavClick,
    'keydown': onNavKeydown
  },
      hoverEvents = {
    'mouseover': mouseoverPause,
    'mouseout': mouseoutRestart
  },
      visibilityEvent = {
    'visibilitychange': onVisibilityChange
  },
      docmentKeydownEvent = {
    'keydown': onDocumentKeydown
  },
      touchEvents = {
    'touchstart': onPanStart,
    'touchmove': onPanMove,
    'touchend': onPanEnd,
    'touchcancel': onPanEnd
  },
      dragEvents = {
    'mousedown': onPanStart,
    'mousemove': onPanMove,
    'mouseup': onPanEnd,
    'mouseleave': onPanEnd
  },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
    'load': onImgLoaded,
    'error': onImgFailed
  },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false; // controls


  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  } // nav


  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  } // autoplay


  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ? function (a, b) {
      return a.x - b.x;
    } : function (a, b) {
      return a.y - b.y;
    };
  } // disable slider when slidecount <= items


  if (!autoWidth) {
    resetVariblesWhenDisable(disable || freeze);
  }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }
  }

  if (carousel) {
    container.className = container.className.replace('tns-vpfix', '');
  }

  initStructure();
  initSheet();
  initSliderTransform(); // === COMMON FUNCTIONS === //

  function resetVariblesWhenDisable(condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide() {
    var tem = carousel ? index - cloneCount : index;

    while (tem < 0) {
      tem += slideCount;
    }

    return tem % slideCount + 1;
  }

  function getStartIndex(ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex(i) {
    if (i == null) {
      i = index;
    }

    if (carousel) {
      i -= cloneCount;
    }

    while (i < 0) {
      i += slideCount;
    }

    return Math.floor(i % slideCount);
  }

  function getCurrentNavIndex() {
    var absIndex = getAbsIndex(),
        result;
    result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items); // set active nav to the last one when reaches the right edge

    if (!loop && carousel && index === indexMax) {
      result = pages - 1;
    }

    return result;
  }

  function getItemsMax() {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || fixedWidth && !viewportMax) {
      return slideCount - 1; // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) {
        arr.push(options[str]);
      }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];

          if (tem && (fixedWidth || tem < slideCount)) {
            arr.push(tem);
          }
        }
      }

      if (!arr.length) {
        arr.push(0);
      }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop() {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
    result = Math.max(itemsMax, result);
    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth() {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition(pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth(el) {
    var div = doc.createElement('div'),
        rect,
        width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth() {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption(item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) {
            return true;
          }
        }
      }

      return false;
    }
  } // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy


  function getOption(item, ww) {
    if (ww == null) {
      ww = windowWidth;
    }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) {
              result = responsive[bp][item];
            }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') {
        result = getOption('items');
      }

      if (!carousel && (item === 'slideBy' || item === 'items')) {
        result = Math.floor(result);
      }

      return result;
    }
  }

  function getSlideMarginLeft(i) {
    return CALC ? CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;

      if (gutterTem) {
        gap -= gutterTem;
      }

      str = horizontal ? 'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' : 'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';';
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
      str += getTransitionDurationStyle(speedTem);
    }

    return str;
  }

  function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ? CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = fixedWidthTem + gutterTem + 'px';
    } else {
      if (!carousel) {
        itemsTem = Math.floor(itemsTem);
      }

      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? CALC + '(100% / ' + dividend + ')' : 100 / dividend + '%';
    }

    width = 'width:' + width; // inner slider: overwrite outer slider styles

    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle(gutterTem) {
    var str = ''; // gutter maybe interger || 0
    // so can't use 'if (gutter)'

    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop + dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix(name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();

    if (prefix) {
      prefix = '-' + prefix + '-';
    }

    return prefix;
  }

  function getTransitionDurationStyle(speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle(speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure() {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');
    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw'; // set container properties

    if (container.id === '') {
      container.id = slideId;
    }

    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';

    if (autoWidth) {
      newContainerClasses += ' tns-autowidth';
    }

    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses; // add constrain layer for carousel

    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';
      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container); // add id, class, aria attributes 
    // before clone slides

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-item');

      if (!item.id) {
        item.id = slideId + '-item' + i;
      }

      if (!carousel && animateNormal) {
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
      }

      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }); // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n

    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j % slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }
  }

  function initSliderTransform() {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img'); // add complete class if all images are loaded/failed

      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(imgs, function (img) {
        var src = img.src;

        if (src && src.indexOf('data:image') < 0) {
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents);
          img.src = '';
          img.src = src;
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        } else if (!lazyload) {
          imgLoaded(img);
        }
      }); // All imgs are completed

      Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), function () {
          imgsComplete = true;
        });
      }); // Check imgs in window only for auto height

      if (!autoWidth && horizontal) {
        imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
      }

      lazyload ? initSliderTransformStyleCheck() : Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), initSliderTransformStyleCheck);
      });
    } else {
      // set container transform property
      if (carousel) {
        doContainerTransformSilent();
      } // update slider tools and events


      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck() {
    if (autoWidth) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ? initSliderTransformCore() : setTimeout(function () {
          stylesApplicationCheck();
        }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }

  function initSliderTransformCore() {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();

        if (freezable) {
          freeze = getFreeze();
        }

        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=

        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    } // set container transform property


    if (carousel) {
      doContainerTransformSilent();
    } // update slider tools and events


    initTools();
    initEvents();
  }

  function initSheet() {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    } // #### LAYOUT
    // ## INLINE-BLOCK VS FLOAT
    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0
    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~
    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing


    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, 'font-size:0;', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } else if (carousel) {
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    } // ## BASIC STYLES


    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-mw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // inner wrapper styles


      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-iw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet)); // container styles

      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';

        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }

        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // slide styles


      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';

      if (options.gutter) {
        str += getSlideGutterStyle(options.gutter);
      } // set gallery items transition-duration


      if (!carousel) {
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }

        if (ANIMATIONDURATION) {
          str += getAnimationDurationStyle(speed);
        }
      }

      if (str) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // non CSS mediaqueries: IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)

    } else {
      // middle wrapper styles
      update_carousel_transition_duration(); // inner wrapper styles

      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight); // container styles

      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      } // slide styles


      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';

      if (gutter) {
        str += getSlideGutterStyle(gutter);
      } // append to the last line


      if (str) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }
    } // ## MEDIAQUERIES


    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);
        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp); // middle wrapper string

        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        } // inner wrapper string


        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        } // container string


        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || fixedWidth && 'gutter' in opts)) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }

        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }

        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        } // slide string


        if ('fixedWidth' in opts || fixedWidth && 'gutter' in opts || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }

        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        } // set gallery items transition-duration


        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) {
            slideStr += getTransitionDurationStyle(speedBP);
          }

          if (ANIMATIONDURATION) {
            slideStr += getAnimationDurationStyle(speedBP);
          }
        }

        if (slideStr) {
          slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}';
        } // add up


        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools() {
    // == slides ==
    updateSlideStatus(); // == live region ==

    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current'); // == autoplayInit ==

    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';

      if (autoplayButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {
          'data-action': txt
        });
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      } // add event


      if (autoplayButton) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(autoplayButton, {
          'click': toggleAutoplay
        });
      }

      if (autoplay) {
        startAutoplay();

        if (autoplayHoverPause) {
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents);
        }

        if (autoplayResetOnVisibility) {
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, visibilityEvent);
        }
      }
    } // == navInit ==


    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount; // customized nav
      // will not hide the navs in case they're thumbnails

      if (navContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navContainer, {
          'aria-label': 'Carousel Pagination'
        });
        navItems = navContainer.children;
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(navItems, function (item, i) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId
          });
        }); // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';

        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
        }

        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility(); // add transition

      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }

      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navItems[navCurrentIndex], {
        'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
      });
      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navItems[navCurrentIndex], 'tabindex');
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navItems[navCurrentIndex], navActiveClass); // add events

      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(navContainer, navEvents);
    } // == controlsInit ==


    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + '</button></div>');
        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(prevButton, {
          'data-controls': 'prev'
        });
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(nextButton, {
          'data-controls': 'next'
        });
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);
      updateControlsStatus(); // add events

      if (controlsContainer) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(controlsContainer, controlsEvents);
      } else {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(prevButton, controlsEvents);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(nextButton, controlsEvents);
      }
    } // hide tools if needed


    disableUI();
  }

  function initEvents() {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, eve);
    }

    if (touch) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch);
    }

    if (mouseDrag) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents);
    }

    if (arrowKeys) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent);
    }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(win, {
        'resize': onResize
      });
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) {
        doAutoHeight();
      }
    }

    doLazyLoad();

    if (disable) {
      disableSlider();
    } else if (freeze) {
      freezeSlider();
    }

    events.on('indexChanged', additionalUpdates);

    if (nested === 'inner') {
      events.emit('innerLoaded', info());
    }

    if (typeof onInit === 'function') {
      onInit(info());
    }

    isOn = true;
  }

  function destroy() {
    // sheet
    sheet.disabled = true;

    if (sheet.ownerNode) {
      sheet.ownerNode.remove();
    } // remove win event listeners


    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(win, {
      'resize': onResize
    }); // arrowKeys, controls, nav

    if (arrowKeys) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent);
    }

    if (controlsContainer) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(controlsContainer, controlsEvents);
    }

    if (navContainer) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(navContainer, navEvents);
    } // autoplay


    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, visibilityEvent);

    if (autoplayButton) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(autoplayButton, {
        'click': toggleAutoplay
      });
    }

    if (autoplay) {
      clearInterval(autoplayTimer);
    } // container


    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, eve);
    }

    if (touch) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents);
    }

    if (mouseDrag) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents);
    } // cache Object values in options && reset HTML


    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
    tnsList.forEach(function (item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (_typeof(el) === 'object') {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    }); // reset variables

    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null; // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') {
        this[a] = null;
      }
    }

    isOn = false;
  } // === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal


  function onResize(e) {
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      resizeTasks(getEvent(e));
    });
  }

  function resizeTasks(e) {
    if (!isOn) {
      return;
    }

    if (nested === 'outer') {
      events.emit('outerResized', info(e));
    }

    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone; // if (hasRightDeadZone) { needContainerTransform = true; } // *?

      if (bpChanged) {
        events.emit('newBreakpointStart', info(e));
      }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    } // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy


    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    } // update options


    resetVariblesWhenDisable(disable);
    viewport = getViewportWidth(); // <= edgePadding, gutter

    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();

      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions

        needContainerTransform = true;
      }
    }

    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
      // fixedWidth: <= viewport, fixedWidth, gutter

      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
      // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) {
          indexMax = getIndexMax();
        } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger


        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
      // <= fixedWidth: fixedWidth, gutter, rightBoundary
      // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility

    if (!autoplay) {
      autoplayHoverPause = autoplayResetOnVisibility = false;
    }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent);
    }

    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
        } else {
          if (prevButton) {
            Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton);
          }

          if (nextButton) {
            Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton);
          }
        }
      } else {
        if (controlsContainer) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
        } else {
          if (prevButton) {
            Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton);
          }

          if (nextButton) {
            Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton);
          }
        }
      }
    }

    if (nav !== navTem) {
      nav ? Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer) : Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer);
    }

    if (touch !== touchTem) {
      touch ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents);
    }

    if (mouseDrag !== mouseDragTem) {
      mouseDrag ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents);
    }

    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton);
        }

        if (!animating && !autoplayUserPaused) {
          startAutoplay();
        }
      } else {
        if (autoplayButton) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton);
        }

        if (animating) {
          stopAutoplay();
        }
      }
    }

    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    }

    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, visibilityEvent) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) {
        needContainerTransform = true;
      }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) {
          innerWrapper.style.height = '';
        }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;

        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) {
        needContainerTransform = true;
      }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;

    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) {
        additionalUpdates();
      }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) {
      updateGallerySlidePositions();
    }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles
        if (autoHeight !== autoheightTem || speed !== speedTem) {
          update_carousel_transition_duration();
        } // inner wrapper styles


        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          } // slide styles


          var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter); // remove the last line and
          // add new styles

          Object(_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__["removeCSSRule"])(sheet, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet) - 1);
          Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        }
      } // auto height


      if (autoHeight) {
        doAutoHeight();
      }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) {
      events.emit('newBreakpointEnd', info(e));
    }
  } // === INITIALIZATION FUNCTIONS === //


  function getFreeze() {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone() {
    breakpointZone = 0;

    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number

      if (windowWidth >= bp) {
        breakpointZone = bp;
      }
    }
  } // (slideBy, indexMin, indexMax) => index


  var updateIndex = function () {
    return loop ? carousel ? // loop + carousel
    function () {
      var leftEdge = indexMin,
          rightEdge = indexMax;
      leftEdge += slideBy;
      rightEdge -= slideBy; // adjust edges when has edge paddings
      // or fixed-width slider with extra space on the right side

      if (edgePadding) {
        leftEdge += 1;
        rightEdge -= 1;
      } else if (fixedWidth) {
        if ((viewport + gutter) % (fixedWidth + gutter)) {
          rightEdge -= 1;
        }
      }

      if (cloneCount) {
        if (index > rightEdge) {
          index -= slideCount;
        } else if (index < leftEdge) {
          index += slideCount;
        }
      }
    } : // loop + gallery
    function () {
      if (index > indexMax) {
        while (index >= indexMin + slideCount) {
          index -= slideCount;
        }
      } else if (index < indexMin) {
        while (index <= indexMax - slideCount) {
          index += slideCount;
        }
      }
    } : // non-loop
    function () {
      index = Math.max(indexMin, Math.min(indexMax, index));
    };
  }();

  function disableUI() {
    if (!autoplay && autoplayButton) {
      Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton);
    }

    if (!nav && navContainer) {
      Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer);
    }

    if (!controls) {
      if (controlsContainer) {
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
      } else {
        if (prevButton) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton);
        }

        if (nextButton) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton);
        }
      }
    }
  }

  function enableUI() {
    if (autoplay && autoplayButton) {
      Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton);
    }

    if (nav && navContainer) {
      Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer);
    }

    if (controls) {
      if (controlsContainer) {
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
      } else {
        if (prevButton) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton);
        }

        if (nextButton) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton);
        }
      }
    }
  }

  function freezeSlider() {
    if (frozen) {
      return;
    } // remove edge padding from inner wrapper


    if (edgePadding) {
      innerWrapper.style.margin = '0px';
    } // add class tns-transparent to cloned slides


    if (cloneCount) {
      var str = 'tns-transparent';

      for (var i = cloneCount; i--;) {
        if (carousel) {
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[i], str);
        }

        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[slideCountNew - i - 1], str);
      }
    } // update tools


    disableUI();
    frozen = true;
  }

  function unfreezeSlider() {
    if (!frozen) {
      return;
    } // restore edge padding for inner wrapper
    // for mordern browsers


    if (edgePadding && CSSMQ) {
      innerWrapper.style.margin = '';
    } // remove class tns-transparent to cloned slides


    if (cloneCount) {
      var str = 'tns-transparent';

      for (var i = cloneCount; i--;) {
        if (carousel) {
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[i], str);
        }

        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[slideCountNew - i - 1], str);
      }
    } // update tools


    enableUI();
    frozen = false;
  }

  function disableSlider() {
    if (disabled) {
      return;
    }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(container, ['style']);

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[j]);
        }

        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[slideCountNew - j - 1]);
      }
    } // vertical slider


    if (!horizontal || !carousel) {
      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(innerWrapper, ['style']);
    } // gallery


    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['style']);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    } // update tools


    disableUI();
    disabled = true;
  }

  function enableSlider() {
    if (!disabled) {
      return;
    }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[j]);
        }

        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[slideCountNew - j - 1]);
      }
    } // gallery


    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classN);
      }
    } // update tools


    enableUI();
    disabled = false;
  }

  function updateLiveRegion() {
    var str = getLiveRegionStr();

    if (liveregionCurrent.innerHTML !== str) {
      liveregionCurrent.innerHTML = str;
    }
  }

  function getLiveRegionStr() {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }

    var start = index,
        end,
        rangestart,
        rangeend; // get range start, range end for autoWidth and fixedWidth

    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = -(parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    } // get start, end
    // - check auto width


    if (autoWidth) {
      slidePositions.forEach(function (point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) {
            start = i;
          }

          if (rangeend - point >= 0.5) {
            end = i;
          }
        }
      }); // - check percentage width, fixed width
    } else {
      if (fixedWidth) {
        var cell = fixedWidth + gutter;

        if (center || edgePadding) {
          start = Math.floor(rangestart / cell);
          end = Math.ceil(rangeend / cell - 1);
        } else {
          end = start + Math.ceil(viewport / cell) - 1;
        }
      } else {
        if (center || edgePadding) {
          var a = items - 1;

          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad() {
    if (lazyload && !disable) {
      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
        if (!Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};

          eve[TRANSITIONEND] = function (e) {
            e.stopPropagation();
          };

          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, eve);
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents); // update src

          img.src = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-src'); // update srcset

          var srcset = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-srcset');

          if (srcset) {
            img.srcset = srcset;
          }

          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded(e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed(e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded(img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed(img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted(img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'tns-complete');
    Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(img, 'loading');
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(img, imgEvents);
  }

  function getImageArray(start, end) {
    var imgs = [];

    while (start <= end) {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems[start].querySelectorAll('img'), function (img) {
        imgs.push(img);
      });
      start++;
    }

    return imgs;
  } // check if all visible images are loaded
  // and update container height if it's done


  function doAutoHeight() {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      imgsLoadedCheck(imgs, updateInnerWrapperHeight);
    });
  }

  function imgsLoadedCheck(imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) {
      return cb();
    } // check selected image classes otherwise


    imgs.forEach(function (img, index) {
      if (Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) {
        imgs.splice(index, 1);
      }
    }); // execute callback function if selected images are all complete

    if (!imgs.length) {
      return cb();
    } // otherwise execute this functiona again


    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      imgsLoadedCheck(imgs, cb);
    });
  }

  function additionalUpdates() {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }

  function update_carousel_transition_duration() {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight(slideStart, slideRange) {
    var heights = [];

    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  } // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done


  function updateInnerWrapperHeight() {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) {
      wp.style.height = maxHeight + 'px';
    }
  } // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions


  function setSlidePositions() {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];
    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      // skip the first slide
      if (i) {
        slidePositions.push(item.getBoundingClientRect()[attr] - base);
      } // add the end edge


      if (i === slideCountNew - 1) {
        slidePositions.push(item.getBoundingClientRect()[attr2] - base);
      }
    });
  } // update slide


  function updateSlideStatus() {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];
    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['aria-hidden', 'tabindex']);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, slideActiveClass);
        } // hide slides

      } else {
        if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, slideActiveClass);
        }
      }
    });
  } // gallery: update slide position


  function updateGallerySlidePositions() {
    var l = index + Math.min(slideCount, items);

    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-moving');
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
      } // remove outlet animation


      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
    } // removing '.tns-moving'


    setTimeout(function () {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (el) {
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(el, 'tns-moving');
      });
    }, 300);
  } // set tabindex on Nav


  function updateNavStatus() {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(navPrev, navActiveClass);
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navCurrent, {
          'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
        });
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navCurrent, 'tabindex');
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navCurrent, navActiveClass);
        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName(el) {
    return el.nodeName.toLowerCase();
  }

  function isButton(el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled(el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement(isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  } // set 'disabled' to true on controls when reach the edges


  function updateControlsStatus() {
    if (!controls || rewind || loop) {
      return;
    }

    var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = index <= indexMin ? true : false,
        disableNext = !rewind && index >= indexMax ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }

    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }

    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }

    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  } // set duration


  function resetDuration(el, str) {
    if (TRANSITIONDURATION) {
      el.style[TRANSITIONDURATION] = str;
    }
  }

  function getSliderWidth() {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap(num) {
    if (num == null) {
      num = index;
    }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
  }

  function getRightBoundary() {
    var gap = edgePadding ? gutter : 0,
        result = viewport + gap - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }

    if (result > 0) {
      result = 0;
    }

    return result;
  }

  function getContainerTransformValue(num) {
    if (num == null) {
      num = index;
    }

    var val;

    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = -(fixedWidth + gutter) * num;

        if (center) {
          val += getCenterGap();
        }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;

        if (center) {
          num -= getCenterGap();
        }

        val = -num * 100 / denominator;
      }
    } else {
      val = -slidePositions[num];

      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) {
      val = Math.max(val, rightBoundary);
    }

    val += horizontal && !autoWidth && !fixedWidth ? '%' : 'px';
    return val;
  }

  function doContainerTransformSilent(val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }

    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide(number, classOut, classIn, isOut) {
    var l = number + items;

    if (!loop) {
      l = Math.min(l, slideCountNew);
    }

    for (var i = number; i < l; i++) {
      var item = slideItems[i]; // set item positions

      if (!isOut) {
        item.style.left = (i - index) * 100 / items + '%';
      }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }

      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, classOut);
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classIn);

      if (isOut) {
        slideItemsOut.push(item);
      }
    }
  } // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers


  var transformCore = function () {
    return carousel ? function () {
      resetDuration(container, '');

      if (TRANSITIONDURATION || !speed) {
        // for morden browsers with non-zero duration or 
        // zero duration for all browsers
        doContainerTransform(); // run fallback function manually 
        // when duration is 0 / container is hidden

        if (!speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) {
          onTransitionEnd();
        }
      } else {
        // for old browser with non-zero duration
        Object(_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__["jsTransform"])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
      }

      if (!horizontal) {
        updateContentWrapperHeight();
      }
    } : function () {
      slideItemsOut = [];
      var eve = {};
      eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(slideItems[indexCached], eve);
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(slideItems[index], eve);
      animateSlide(indexCached, animateIn, animateOut, true);
      animateSlide(index, animateNormal, animateIn); // run fallback function manually 
      // when transition or animation not supported / duration is 0

      if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) {
        onTransitionEnd();
      }
    };
  }();

  function render(e, sliderMoved) {
    if (updateIndexBeforeTransform) {
      updateIndex();
    } // render when slider was moved (touch or drag) even though index may not change


    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());

      if (autoHeight) {
        doAutoHeight();
      } // pause autoplay when click or keydown from user


      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) {
        stopAutoplay();
      }

      running = true;
      transformCore();
    }
  }
  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */


  function strTrans(str) {
    return str.toLowerCase().replace(/-/g, '');
  } // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height


  function onTransitionEnd(event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i]; // set item positions

          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }

          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        }
      }
      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */


      if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();

          if (index !== indexTem) {
            events.emit('indexChanged', info());
            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') {
          events.emit('innerLoaded', info());
        }

        running = false;
        indexCached = index;
      }
    }
  } // # ACTIONS


  function goTo(targetIndex, e) {
    if (freeze) {
      return;
    } // prev slideBy


    if (targetIndex === 'prev') {
      onControlsClick(e, -1); // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1); // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = -absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') {
          targetIndex = parseInt(targetIndex);
        }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) {
            targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
          }

          indexGap = targetIndex - absIndex;
        }
      } // gallery: make sure new page won't overlap with current page


      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap; // make sure index is in range

      if (carousel && loop) {
        if (index < indexMin) {
          index += slideCount;
        }

        if (index > indexMax) {
          index -= slideCount;
        }
      } // if index is changed, start rendering


      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }
    }
  } // on controls click


  function onControlsClick(e, dir) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
        target = target.parentNode;
      }

      var targetIn = [prevButton, nextButton].indexOf(target);

      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;

      if (autoWidth) {
        index = Math.floor(index);
      } // pass e when click control buttons or keydown


      render(passEventObject || e && e.type === 'keydown' ? e : null);
    }
  } // on nav click


  function onNavClick(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    e = getEvent(e);
    var target = getTarget(e),
        navIndex; // find the clicked nav item

    while (target !== navContainer && !Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) {
      target = target.parentNode;
    }

    if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) {
          stopAutoplay();
        }

        navClicked = -1; // reset navClicked
      }
    }
  } // autoplay functions


  function setAutoplayTimer() {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);
    animating = true;
  }

  function stopAutoplayTimer() {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton(action, txt) {
    Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {
      'data-action': action
    });
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay() {
    setAutoplayTimer();

    if (autoplayButton) {
      updateAutoplayButton('stop', autoplayText[1]);
    }
  }

  function stopAutoplay() {
    stopAutoplayTimer();

    if (autoplayButton) {
      updateAutoplayButton('start', autoplayText[0]);
    }
  } // programaitcally play/pause the slider


  function play() {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function pause() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange() {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause() {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart() {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  } // keydown events on document 


  function onDocumentKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  } // on key control


  function onControlsKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) {
          onControlsClick(e, -1);
        }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  } // set focus


  function setFocus(el) {
    el.focus();
  } // on key nav


  function onNavKeydown(e) {
    e = getEvent(e);
    var curElement = doc.activeElement;

    if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(curElement, 'data-nav')) {
      return;
    } // var code = e.keyCode,


    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) {
          setFocus(navItems[navIndex - 1]);
        }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) {
          setFocus(navItems[navIndex + 1]);
        }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent(e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }

  function getTarget(e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent(e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected() {
    return Object(_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__["getTouchDirection"])(Object(_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__["toDegree"])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    if (autoplay && animating) {
      stopAutoplayTimer();
    }

    panStart = true;

    if (rafIndex) {
      Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;

    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove(e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) {
          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
            panUpdate(e);
          });
        }
      } else {
        if (moveDirectionExpected === '?') {
          moveDirectionExpected = getMoveDirectionExpected();
        }

        if (moveDirectionExpected) {
          preventScroll = true;
        }
      }

      if (preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate(e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }

    Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);

    if (panStart) {
      rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        panUpdate(e);
      });
    }

    if (moveDirectionExpected === '?') {
      moveDirectionExpected = getMoveDirectionExpected();
    }

    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) {
        preventScroll = true;
      }

      try {
        if (e.type) {
          events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e));
        }
      } catch (err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);

      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd(e) {
    if (panStart) {
      if (rafIndex) {
        Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
        rafIndex = null;
      }

      if (carousel) {
        resetDuration(container, '');
      }

      panStart = false;
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(target, {
            'click': function preventClick(e) {
              preventDefaultBehavior(e);
              Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(target, {
                'click': preventClick
              });
            }
          });
        }

        if (carousel) {
          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
            if (horizontal && !autoWidth) {
              var indexMoved = -dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = -(translateInit + dist);

              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;

                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;

                  if (moved > slidePositions[i] && dist < 0) {
                    index += 1;
                  }

                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    } // reset


    if (options.preventScrollOnTouch === 'auto') {
      preventScroll = false;
    }

    if (swipeAngle) {
      moveDirectionExpected = '?';
    }

    if (autoplay && !animating) {
      setAutoplayTimer();
    }
  } // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height


  function updateContentWrapperHeight() {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages() {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */


  function updateNavVisibility() {
    if (!nav || navAsThumbnails) {
      return;
    }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      } // cache pages


      pagesCached = pages;
    }
  }

  function info(e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {}
    };
  }

  return {
    version: '2.9.2',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function rebuild() {
      return tns(Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, optionsElements));
    }
  };
};

/***/ }),

/***/ "./src/assets/js/bundle.js":
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello */ "./src/assets/js/components/hello.js");
/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_hello__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar */ "./src/assets/js/components/sidebar.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_sidebar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider */ "./src/assets/js/components/slider.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ "./src/assets/js/components/modal.js");





/***/ }),

/***/ "./src/assets/js/components/hello.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/hello.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log('hello');

/***/ }),

/***/ "./src/assets/js/components/modal.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/modal.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

var youtubeFrame = document.querySelector('.frame');
var youtubeSrc = 'https://www.youtube.com/embed/SOgoejxzF8c?controls=0';
micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
  onClose: function onClose() {
    youtubeFrame.setAttribute('src', '');
    console.log('close');
  },
  onShow: function onShow() {
    youtubeFrame.setAttribute('src', youtubeSrc);
  },
  openTrigger: 'data-video-open',
  closeTrigger: 'data-video-close'
});
micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close'
});

/***/ }),

/***/ "./src/assets/js/components/sidebar.js":
/*!*********************************************!*\
  !*** ./src/assets/js/components/sidebar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// $("#menu_toggle").on('click', function(e) {
//   $("#sidebar_nav, #overlay_bg").toggleClass("show");
//   });
//   $("#overlay_bg").on('click', function(e) {
//   $("#sidebar_nav, #overlay_bg").toggleClass("show");
//   });
var menuToggler = document.querySelector('.menu-toggler');
var sideNav = document.querySelector('.sidenav');
var overlay = document.querySelector('.overlay-bkg');
menuToggler.addEventListener('click', function (e) {
  sideNav.classList.toggle('show');
  overlay.classList.toggle('show');
});
sideNav.addEventListener('click', function (e) {
  if (e.target.hasAttribute('href')) {
    sideNav.classList.toggle('show');
    overlay.classList.toggle('show');
  }
});
overlay.addEventListener('click', function (e) {
  sideNav.classList.toggle('show');
  overlay.classList.toggle('show');
});

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");

/*

SLIDER INIT

*/

if (document.querySelector(".slider")) {
  var slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    navContainer: ".slider-controls",
    navAsThumbnails: true,
    controls: false,
    touch: false
  });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pY3JvbW9kYWwvZGlzdC9taWNyb21vZGFsLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9PYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkQ1NTUnVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2FkZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYXJyYXlGcm9tTm9kZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NhZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2hlY2tTdG9yYWdlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NoaWxkTm9kZS5yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NsYXNzTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NyZWF0ZVN0eWxlU2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2RvY0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9mb3JFYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRBdHRyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRCb2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRDc3NSdWxlc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldFNsaWRlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldFRvdWNoRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oYXMzRFRyYW5zZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hhc0F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oaWRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaXNOb2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaXNWaXNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9qc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvbWVkaWFxdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3Bhc3NpdmVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3BlcmNlbnRhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JhZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlQXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUNTU1J1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9yZW1vdmVFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3Jlc2V0RmFrZUJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3NldEF0dHJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zZXRGYWtlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0TG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zaG93RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvdG9EZWdyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3doaWNoUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy90aW55LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVsbG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiXSwibmFtZXMiOlsiTWljcm9Nb2RhbCIsIkZPQ1VTQUJMRV9FTEVNRU5UUyIsIk1vZGFsIiwidGFyZ2V0TW9kYWwiLCJ0cmlnZ2VycyIsIm9uU2hvdyIsIm9uQ2xvc2UiLCJvcGVuVHJpZ2dlciIsImNsb3NlVHJpZ2dlciIsImRpc2FibGVTY3JvbGwiLCJkaXNhYmxlRm9jdXMiLCJhd2FpdENsb3NlQW5pbWF0aW9uIiwiYXdhaXRPcGVuQW5pbWF0aW9uIiwiZGVidWdNb2RlIiwibW9kYWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uZmlnIiwibGVuZ3RoIiwicmVnaXN0ZXJUcmlnZ2VycyIsIm9uQ2xpY2siLCJiaW5kIiwib25LZXlkb3duIiwiZmlsdGVyIiwiQm9vbGVhbiIsImZvckVhY2giLCJ0cmlnZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2hvd01vZGFsIiwiYWN0aXZlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInNjcm9sbEJlaGF2aW91ciIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRGb2N1c1RvRmlyc3ROb2RlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJmb2N1cyIsInJlbW92ZSIsImNsb3NlTW9kYWwiLCJ0b2dnbGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsIk9iamVjdCIsImFzc2lnbiIsInN0eWxlIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ0YXJnZXQiLCJoYXNBdHRyaWJ1dGUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJtYWludGFpbkZvY3VzIiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmb2N1c2FibGVOb2RlcyIsImdldEZvY3VzYWJsZU5vZGVzIiwiY29udGFpbnMiLCJmb2N1c2VkSXRlbUluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwiYWN0aXZlTW9kYWwiLCJnZW5lcmF0ZVRyaWdnZXJNYXAiLCJ0cmlnZ2VyQXR0ciIsInRyaWdnZXJNYXAiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJwdXNoIiwidmFsaWRhdGVNb2RhbFByZXNlbmNlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsInZhbGlkYXRlVHJpZ2dlclByZXNlbmNlIiwidmFsaWRhdGVBcmdzIiwiaW5pdCIsIm9wdGlvbnMiLCJrZXkiLCJzaG93IiwiY2xvc2UiLCJjbG9zZU1vZGFsQnlJZCIsImtleXMiLCJvYmplY3QiLCJuYW1lIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYWRkQ1NTUnVsZSIsInNoZWV0Iiwic2VsZWN0b3IiLCJydWxlcyIsImluZGV4IiwiaW5zZXJ0UnVsZSIsImFkZFJ1bGUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdFN1cHBvcnQiLCJlbCIsInN0ciIsImhhc0NsYXNzIiwiY2xhc3NOYW1lIiwiYWRkRXZlbnRzIiwib2JqIiwicHJldmVudFNjcm9sbGluZyIsInByb3AiLCJvcHRpb24iLCJwYXNzaXZlT3B0aW9uIiwiYXJyYXlGcm9tTm9kZUxpc3QiLCJubCIsImFyciIsImkiLCJsIiwid2luIiwid2luZG93IiwiY2FmIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImNhbGMiLCJkb2MiLCJnZXRCb2R5IiwiZG9jT3ZlcmZsb3ciLCJzZXRGYWtlQm9keSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJyZXN1bHQiLCJhcHBlbmRDaGlsZCIsInZhbHMiLCJ2YWwiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwicmVwbGFjZSIsImUiLCJmYWtlIiwicmVzZXRGYWtlQm9keSIsImNoZWNrU3RvcmFnZVZhbHVlIiwiSlNPTiIsInBhcnNlIiwiRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVN0eWxlU2hlZXQiLCJtZWRpYSIsInN0eWxlU2hlZXQiLCJkb2NFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiRXZlbnRzIiwidG9waWNzIiwib24iLCJldmVudE5hbWUiLCJmbiIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJkYXRhIiwidHlwZSIsImV4dGVuZCIsImNvcHkiLCJhcmd1bWVudHMiLCJjYWxsYmFjayIsInNjb3BlIiwiZ2V0QXR0ciIsImF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJnZXRDc3NSdWxlc0xlbmd0aCIsInJ1bGUiLCJjc3NSdWxlcyIsImdldEVuZFByb3BlcnR5IiwicHJvcEluIiwicHJvcE91dCIsImVuZFByb3AiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJnZXRTbGlkZUlkIiwidG5zSWQiLCJnZXRUb3VjaERpcmVjdGlvbiIsImFuZ2xlIiwicmFuZ2UiLCJkaXJlY3Rpb24iLCJnYXAiLCJNYXRoIiwiYWJzIiwiaGFzM0RUcmFuc2Zvcm1zIiwidGYiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzM2QiLCJjc3NURiIsInNsaWNlIiwiaW5zZXJ0QmVmb3JlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImhhc0F0dHIiLCJoaWRlRWxlbWVudCIsImZvcmNlSGlkZSIsImRpc3BsYXkiLCJpc05vZGVMaXN0IiwiaXRlbSIsImlzVmlzaWJsZSIsImpzVHJhbnNmb3JtIiwiZWxlbWVudCIsInByZWZpeCIsInBvc3RmaXgiLCJ0byIsImR1cmF0aW9uIiwidGljayIsIm1pbiIsInVuaXQiLCJmcm9tIiwiTnVtYmVyIiwicG9zaXRpb25UaWNrIiwicnVubmluZyIsInNldFRpbWVvdXQiLCJtb3ZlRWxlbWVudCIsIm1lZGlhcXVlcnlTdXBwb3J0IiwicG9zaXRpb24iLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJjdXJyZW50U3R5bGUiLCJzdXBwb3J0c1Bhc3NpdmUiLCJvcHRzIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwYXNzaXZlIiwicGVyY2VudGFnZUxheW91dCIsIndyYXBwZXIiLCJvdXRlciIsImNvdW50IiwicGVyUGFnZSIsInN1cHBvcnRlZCIsImlubmVySFRNTCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJjaGlsZHJlbiIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2IiLCJyZW1vdmVBdHRycyIsImVscyIsImF0dHJzIiwiYXR0ckxlbmd0aCIsImoiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVDU1NSdWxlIiwiZGVsZXRlUnVsZSIsInJlbW92ZVJ1bGUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUV2ZW50cyIsIm9mZnNldEhlaWdodCIsInNldEF0dHJzIiwidG9TdHJpbmciLCJiYWNrZ3JvdW5kIiwic2V0TG9jYWxTdG9yYWdlIiwic3RvcmFnZSIsImFjY2VzcyIsInNldEl0ZW0iLCJzaG93RWxlbWVudCIsInRvRGVncmVlIiwieSIsIngiLCJhdGFuMiIsIlBJIiwid2hpY2hQcm9wZXJ0eSIsInByb3BzIiwiUHJvcHMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInByZWZpeGVzIiwibGVuIiwidG5zIiwiY29udGFpbmVyIiwibW9kZSIsImF4aXMiLCJpdGVtcyIsImd1dHRlciIsImVkZ2VQYWRkaW5nIiwiZml4ZWRXaWR0aCIsImF1dG9XaWR0aCIsInZpZXdwb3J0TWF4Iiwic2xpZGVCeSIsImNlbnRlciIsImNvbnRyb2xzIiwiY29udHJvbHNQb3NpdGlvbiIsImNvbnRyb2xzVGV4dCIsImNvbnRyb2xzQ29udGFpbmVyIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJuYXYiLCJuYXZQb3NpdGlvbiIsIm5hdkNvbnRhaW5lciIsIm5hdkFzVGh1bWJuYWlscyIsImFycm93S2V5cyIsInNwZWVkIiwiYXV0b3BsYXkiLCJhdXRvcGxheVBvc2l0aW9uIiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlEaXJlY3Rpb24iLCJhdXRvcGxheVRleHQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhdXRvcGxheUJ1dHRvbiIsImF1dG9wbGF5QnV0dG9uT3V0cHV0IiwiYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRlTm9ybWFsIiwiYW5pbWF0ZURlbGF5IiwibG9vcCIsInJld2luZCIsImF1dG9IZWlnaHQiLCJyZXNwb25zaXZlIiwibGF6eWxvYWQiLCJsYXp5bG9hZFNlbGVjdG9yIiwidG91Y2giLCJtb3VzZURyYWciLCJzd2lwZUFuZ2xlIiwibmVzdGVkIiwicHJldmVudEFjdGlvbldoZW5SdW5uaW5nIiwicHJldmVudFNjcm9sbE9uVG91Y2giLCJmcmVlemFibGUiLCJvbkluaXQiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJLRVlTIiwiRU5URVIiLCJTUEFDRSIsIkxFRlQiLCJSSUdIVCIsInRuc1N0b3JhZ2UiLCJsb2NhbFN0b3JhZ2VBY2Nlc3MiLCJicm93c2VySW5mbyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInVpZCIsIkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsIkNBTEMiLCJQRVJDRU5UQUdFTEFZT1VUIiwiQ1NTTVEiLCJUUkFOU0ZPUk0iLCJIQVMzRFRSQU5TRk9STVMiLCJUUkFOU0lUSU9ORFVSQVRJT04iLCJUUkFOU0lUSU9OREVMQVkiLCJBTklNQVRJT05EVVJBVElPTiIsIkFOSU1BVElPTkRFTEFZIiwiVFJBTlNJVElPTkVORCIsIkFOSU1BVElPTkVORCIsInN1cHBvcnRDb25zb2xlV2FybiIsInRuc0xpc3QiLCJvcHRpb25zRWxlbWVudHMiLCJub2RlTmFtZSIsImNhcm91c2VsIiwicmVzcG9uc2l2ZVRlbSIsInVwZGF0ZU9wdGlvbnMiLCJob3Jpem9udGFsIiwib3V0ZXJXcmFwcGVyIiwiaW5uZXJXcmFwcGVyIiwibWlkZGxlV3JhcHBlciIsImNvbnRhaW5lclBhcmVudCIsImNvbnRhaW5lckhUTUwiLCJvdXRlckhUTUwiLCJzbGlkZUl0ZW1zIiwic2xpZGVDb3VudCIsImJyZWFrcG9pbnRab25lIiwid2luZG93V2lkdGgiLCJnZXRXaW5kb3dXaWR0aCIsImlzT24iLCJzZXRCcmVha3BvaW50Wm9uZSIsImdldE9wdGlvbiIsInZpZXdwb3J0IiwiZ2V0Vmlld3BvcnRXaWR0aCIsImZsb29yIiwiZml4ZWRXaWR0aFZpZXdwb3J0V2lkdGgiLCJzbGlkZVBvc2l0aW9ucyIsInNsaWRlSXRlbXNPdXQiLCJjbG9uZUNvdW50IiwiZ2V0Q2xvbmVDb3VudEZvckxvb3AiLCJzbGlkZUNvdW50TmV3IiwiaGFzUmlnaHREZWFkWm9uZSIsInJpZ2h0Qm91bmRhcnkiLCJnZXRSaWdodEJvdW5kYXJ5IiwidXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1BdHRyIiwidHJhbnNmb3JtUHJlZml4IiwidHJhbnNmb3JtUG9zdGZpeCIsImdldEluZGV4TWF4IiwiY2VpbCIsIm1heCIsImdldFN0YXJ0SW5kZXgiLCJpbmRleENhY2hlZCIsImRpc3BsYXlJbmRleCIsImdldEN1cnJlbnRTbGlkZSIsImluZGV4TWluIiwiaW5kZXhNYXgiLCJyZXNpemVUaW1lciIsIm1vdmVEaXJlY3Rpb25FeHBlY3RlZCIsImV2ZW50cyIsIm5ld0NvbnRhaW5lckNsYXNzZXMiLCJzbGlkZUlkIiwiZGlzYWJsZSIsImRpc2FibGVkIiwiZnJlZXplIiwiZ2V0RnJlZXplIiwiZnJvemVuIiwiY29udHJvbHNFdmVudHMiLCJvbkNvbnRyb2xzQ2xpY2siLCJvbkNvbnRyb2xzS2V5ZG93biIsIm5hdkV2ZW50cyIsIm9uTmF2Q2xpY2siLCJvbk5hdktleWRvd24iLCJob3ZlckV2ZW50cyIsIm1vdXNlb3ZlclBhdXNlIiwibW91c2VvdXRSZXN0YXJ0IiwidmlzaWJpbGl0eUV2ZW50Iiwib25WaXNpYmlsaXR5Q2hhbmdlIiwiZG9jbWVudEtleWRvd25FdmVudCIsIm9uRG9jdW1lbnRLZXlkb3duIiwidG91Y2hFdmVudHMiLCJvblBhblN0YXJ0Iiwib25QYW5Nb3ZlIiwib25QYW5FbmQiLCJkcmFnRXZlbnRzIiwiaGFzQ29udHJvbHMiLCJoYXNPcHRpb24iLCJoYXNOYXYiLCJoYXNBdXRvcGxheSIsImhhc1RvdWNoIiwiaGFzTW91c2VEcmFnIiwic2xpZGVBY3RpdmVDbGFzcyIsImltZ0NvbXBsZXRlQ2xhc3MiLCJpbWdFdmVudHMiLCJvbkltZ0xvYWRlZCIsIm9uSW1nRmFpbGVkIiwiaW1nc0NvbXBsZXRlIiwibGl2ZXJlZ2lvbkN1cnJlbnQiLCJwcmV2ZW50U2Nyb2xsIiwiY29udHJvbHNDb250YWluZXJIVE1MIiwicHJldkJ1dHRvbkhUTUwiLCJuZXh0QnV0dG9uSFRNTCIsInByZXZJc0J1dHRvbiIsIm5leHRJc0J1dHRvbiIsIm5hdkNvbnRhaW5lckhUTUwiLCJuYXZJdGVtcyIsInBhZ2VzIiwiZ2V0UGFnZXMiLCJwYWdlc0NhY2hlZCIsIm5hdkNsaWNrZWQiLCJuYXZDdXJyZW50SW5kZXgiLCJnZXRDdXJyZW50TmF2SW5kZXgiLCJuYXZDdXJyZW50SW5kZXhDYWNoZWQiLCJuYXZBY3RpdmVDbGFzcyIsIm5hdlN0ciIsIm5hdlN0ckN1cnJlbnQiLCJhdXRvcGxheUJ1dHRvbkhUTUwiLCJhdXRvcGxheUh0bWxTdHJpbmdzIiwiYXV0b3BsYXlUaW1lciIsImFuaW1hdGluZyIsImF1dG9wbGF5SG92ZXJQYXVzZWQiLCJhdXRvcGxheVVzZXJQYXVzZWQiLCJhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQiLCJpbml0UG9zaXRpb24iLCJsYXN0UG9zaXRpb24iLCJ0cmFuc2xhdGVJbml0IiwiZGlzWCIsImRpc1kiLCJwYW5TdGFydCIsInJhZkluZGV4IiwiZ2V0RGlzdCIsImEiLCJiIiwicmVzZXRWYXJpYmxlc1doZW5EaXNhYmxlIiwiaW5pdFN0cnVjdHVyZSIsImluaXRTaGVldCIsImluaXRTbGlkZXJUcmFuc2Zvcm0iLCJjb25kaXRpb24iLCJ0ZW0iLCJpbmQiLCJnZXRBYnNJbmRleCIsImFic0luZGV4IiwiZ2V0SXRlbXNNYXgiLCJicCIsImFwcGx5IiwiaXRlbXNNYXgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRJbnNlcnRQb3NpdGlvbiIsInBvcyIsImdldENsaWVudFdpZHRoIiwicmVjdCIsInJpZ2h0Iiwid3ciLCJwYXJzZUludCIsImdldFNsaWRlTWFyZ2luTGVmdCIsImdldElubmVyV3JhcHBlclN0eWxlcyIsImVkZ2VQYWRkaW5nVGVtIiwiZ3V0dGVyVGVtIiwiZml4ZWRXaWR0aFRlbSIsInNwZWVkVGVtIiwiYXV0b0hlaWdodEJQIiwiZ3V0dGVyVGVtVW5pdCIsImRpciIsImdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlIiwiZ2V0Q29udGFpbmVyV2lkdGgiLCJpdGVtc1RlbSIsImdldFNsaWRlV2lkdGhTdHlsZSIsImRpdmlkZW5kIiwiZ2V0U2xpZGVHdXR0ZXJTdHlsZSIsImdldENTU1ByZWZpeCIsIm51bSIsInN1YnN0cmluZyIsImdldEFuaW1hdGlvbkR1cmF0aW9uU3R5bGUiLCJjbGFzc091dGVyIiwiY2xhc3NJbm5lciIsImhhc0d1dHRlciIsIndwIiwiZnJhZ21lbnRCZWZvcmUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ21lbnRBZnRlciIsImNsb25lRmlyc3QiLCJjbG9uZU5vZGUiLCJmaXJzdENoaWxkIiwiY2xvbmVMYXN0IiwiaW1ncyIsImltZyIsInNyYyIsImltZ0xvYWRlZCIsImltZ3NMb2FkZWRDaGVjayIsImdldEltYWdlQXJyYXkiLCJpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjayIsImRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50IiwiaW5pdFRvb2xzIiwiaW5pdEV2ZW50cyIsInN0eWxlc0FwcGxpY2F0aW9uQ2hlY2siLCJ0b0ZpeGVkIiwiaW5pdFNsaWRlclRyYW5zZm9ybUNvcmUiLCJzZXRTbGlkZVBvc2l0aW9ucyIsInVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0IiwiZm9udFNpemUiLCJzbGlkZSIsIm1hcmdpbkxlZnQiLCJ1cGRhdGVfY2Fyb3VzZWxfdHJhbnNpdGlvbl9kdXJhdGlvbiIsIm1pZGRsZVdyYXBwZXJTdHIiLCJpbm5lcldyYXBwZXJTdHIiLCJjb250YWluZXJTdHIiLCJzbGlkZVN0ciIsIml0ZW1zQlAiLCJmaXhlZFdpZHRoQlAiLCJzcGVlZEJQIiwiZWRnZVBhZGRpbmdCUCIsImd1dHRlckJQIiwidXBkYXRlU2xpZGVTdGF0dXMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJnZXRMaXZlUmVnaW9uU3RyIiwidHh0IiwidG9nZ2xlQXV0b3BsYXkiLCJzdGFydEF1dG9wbGF5IiwiaW5pdEluZGV4IiwibmF2SHRtbCIsImhpZGRlblN0ciIsInVwZGF0ZU5hdlZpc2liaWxpdHkiLCJpc0J1dHRvbiIsInVwZGF0ZUNvbnRyb2xzU3RhdHVzIiwiZGlzYWJsZVVJIiwiZXZlIiwib25UcmFuc2l0aW9uRW5kIiwicmVzaXplVGFza3MiLCJpbmZvIiwib25SZXNpemUiLCJkb0F1dG9IZWlnaHQiLCJkb0xhenlMb2FkIiwiZGlzYWJsZVNsaWRlciIsImZyZWV6ZVNsaWRlciIsImFkZGl0aW9uYWxVcGRhdGVzIiwiZGVzdHJveSIsIm93bmVyTm9kZSIsImNsZWFySW50ZXJ2YWwiLCJodG1sTGlzdCIsInByZXZFbCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwYXJlbnRFbCIsIm5leHRFbGVtZW50U2libGluZyIsImZpcnN0RWxlbWVudENoaWxkIiwiZ2V0RXZlbnQiLCJicENoYW5nZWQiLCJicmVha3BvaW50Wm9uZVRlbSIsIm5lZWRDb250YWluZXJUcmFuc2Zvcm0iLCJpbmRDaGFuZ2VkIiwiaXRlbXNDaGFuZ2VkIiwiZGlzYWJsZVRlbSIsImZyZWV6ZVRlbSIsImFycm93S2V5c1RlbSIsImNvbnRyb2xzVGVtIiwibmF2VGVtIiwidG91Y2hUZW0iLCJtb3VzZURyYWdUZW0iLCJhdXRvcGxheVRlbSIsImF1dG9wbGF5SG92ZXJQYXVzZVRlbSIsImF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHlUZW0iLCJpbmRleFRlbSIsImF1dG9IZWlnaHRUZW0iLCJjb250cm9sc1RleHRUZW0iLCJjZW50ZXJUZW0iLCJhdXRvcGxheVRleHRUZW0iLCJ1cGRhdGVJbmRleCIsImVuYWJsZVNsaWRlciIsImRvQ29udGFpbmVyVHJhbnNmb3JtIiwiZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUiLCJ1bmZyZWV6ZVNsaWRlciIsInN0b3BBdXRvcGxheSIsImh0bWwiLCJ1cGRhdGVMaXZlUmVnaW9uIiwidXBkYXRlR2FsbGVyeVNsaWRlUG9zaXRpb25zIiwiYXV0b2hlaWdodFRlbSIsInZwIiwibGVmdEVkZ2UiLCJyaWdodEVkZ2UiLCJlbmFibGVVSSIsIm1hcmdpbiIsImNsYXNzTiIsImdldFZpc2libGVTbGlkZVJhbmdlIiwic3RhcnQiLCJlbmQiLCJyYW5nZXN0YXJ0IiwicmFuZ2VlbmQiLCJwYXJzZUZsb2F0IiwicG9pbnQiLCJjZWxsIiwic3RvcFByb3BhZ2F0aW9uIiwic3Jjc2V0IiwiZ2V0VGFyZ2V0IiwiaW1nRmFpbGVkIiwiaW1nQ29tcGxldGVkIiwidXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0IiwidXBkYXRlTmF2U3RhdHVzIiwiZ2V0TWF4U2xpZGVIZWlnaHQiLCJzbGlkZVN0YXJ0Iiwic2xpZGVSYW5nZSIsImhlaWdodHMiLCJtYXhIZWlnaHQiLCJhdHRyMiIsImJhc2UiLCJuYXZQcmV2IiwibmF2Q3VycmVudCIsImdldExvd2VyQ2FzZU5vZGVOYW1lIiwiaXNBcmlhRGlzYWJsZWQiLCJkaXNFbmFibGVFbGVtZW50IiwicHJldkRpc2FibGVkIiwibmV4dERpc2FibGVkIiwiZGlzYWJsZVByZXYiLCJkaXNhYmxlTmV4dCIsInJlc2V0RHVyYXRpb24iLCJnZXRTbGlkZXJXaWR0aCIsImdldENlbnRlckdhcCIsImRlbm9taW5hdG9yIiwiYW5pbWF0ZVNsaWRlIiwibnVtYmVyIiwiY2xhc3NPdXQiLCJjbGFzc0luIiwiaXNPdXQiLCJ0cmFuc2Zvcm1Db3JlIiwicmVuZGVyIiwic2xpZGVyTW92ZWQiLCJzdHJUcmFucyIsInByb3BlcnR5TmFtZSIsImdvVG8iLCJ0YXJnZXRJbmRleCIsImluZGV4R2FwIiwiaXNOYU4iLCJmYWN0b3IiLCJwYXNzRXZlbnRPYmplY3QiLCJ0YXJnZXRJbiIsIm5hdkluZGV4IiwidGFyZ2V0SW5kZXhCYXNlIiwic2V0QXV0b3BsYXlUaW1lciIsInNldEludGVydmFsIiwic3RvcEF1dG9wbGF5VGltZXIiLCJ1cGRhdGVBdXRvcGxheUJ1dHRvbiIsImFjdGlvbiIsInBsYXkiLCJwYXVzZSIsImhpZGRlbiIsImtleUluZGV4Iiwic2V0Rm9jdXMiLCJjdXJFbGVtZW50IiwiaXNUb3VjaEV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJzcmNFbGVtZW50IiwicHJldmVudERlZmF1bHRCZWhhdmlvciIsInJldHVyblZhbHVlIiwiZ2V0TW92ZURpcmVjdGlvbkV4cGVjdGVkIiwiJCIsImNsaWVudFgiLCJjbGllbnRZIiwicGFuVXBkYXRlIiwiZXJyIiwiZGlzdCIsInBlcmNlbnRhZ2VYIiwicHJldmVudENsaWNrIiwiaW5kZXhNb3ZlZCIsIm1vdmVkIiwicm91Z2giLCJ2ZXJzaW9uIiwiZ2V0SW5mbyIsInVwZGF0ZVNsaWRlckhlaWdodCIsInJlZnJlc2giLCJyZWJ1aWxkIiwibG9nIiwieW91dHViZUZyYW1lIiwieW91dHViZVNyYyIsIm1lbnVUb2dnbGVyIiwic2lkZU5hdiIsIm92ZXJsYXkiLCJzbGlkZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsVUFBVSxHQUFJLFlBQU07QUFFeEIsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQiwrREFBMUIsRUFBMkYsMkNBQTNGLEVBQXdJLDZDQUF4SSxFQUF1TCwyQ0FBdkwsRUFBb08sUUFBcE8sRUFBOE8sUUFBOU8sRUFBd1AsT0FB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QUF6QjtBQUNBaXFCLFNBQU8sQ0FBQzVxQixTQUFSLENBQWtCVyxNQUFsQixDQUF5QixNQUF6QjtBQUNELENBSEQ7QUFLQWdxQixPQUFPLENBQUNockIsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQTRHLENBQUMsRUFBSTtBQUN0QyxNQUFHQSxDQUFDLENBQUNwRixNQUFGLENBQVNDLFlBQVQsQ0FBc0IsTUFBdEIsQ0FBSCxFQUFpQztBQUNoQ3VwQixXQUFPLENBQUMzcUIsU0FBUixDQUFrQlcsTUFBbEIsQ0FBeUIsTUFBekI7QUFDQWlxQixXQUFPLENBQUM1cUIsU0FBUixDQUFrQlcsTUFBbEIsQ0FBeUIsTUFBekI7QUFDQTtBQUNELENBTEQ7QUFPQWlxQixPQUFPLENBQUNqckIsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQzRHLENBQUQsRUFBTztBQUN2Q29rQixTQUFPLENBQUMzcUIsU0FBUixDQUFrQlcsTUFBbEIsQ0FBeUIsTUFBekI7QUFDQWlxQixTQUFPLENBQUM1cUIsU0FBUixDQUFrQlcsTUFBbEIsQ0FBeUIsTUFBekI7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFHQTs7Ozs7O0FBTUEsSUFBSTVCLFFBQVEsQ0FBQzhCLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBSixFQUF1QztBQUNyQyxNQUFJZ3FCLE1BQU0sR0FBRzNiLHFGQUFHLENBQUM7QUFDZm9CLGdCQUFZLEVBQUUsa0JBREM7QUFFZkMsbUJBQWUsRUFBRSxJQUZGO0FBR2ZULFlBQVEsRUFBRSxLQUhLO0FBSWYrQixTQUFLLEVBQUU7QUFKUSxHQUFELENBQWhCO0FBTUQsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hc3NldHMvanMvYnVuZGxlLmpzXCIpO1xuIiwiY29uc3QgTWljcm9Nb2RhbCA9ICgoKSA9PiB7XG5cbiAgY29uc3QgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXTtcblxuICBjbGFzcyBNb2RhbCB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgdGFyZ2V0TW9kYWwsXG4gICAgICB0cmlnZ2VycyA9IFtdLFxuICAgICAgb25TaG93ID0gKCkgPT4ge30sXG4gICAgICBvbkNsb3NlID0gKCkgPT4ge30sXG4gICAgICBvcGVuVHJpZ2dlciA9ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcicsXG4gICAgICBjbG9zZVRyaWdnZXIgPSAnZGF0YS1taWNyb21vZGFsLWNsb3NlJyxcbiAgICAgIGRpc2FibGVTY3JvbGwgPSBmYWxzZSxcbiAgICAgIGRpc2FibGVGb2N1cyA9IGZhbHNlLFxuICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbiA9IGZhbHNlLFxuICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uID0gZmFsc2UsXG4gICAgICBkZWJ1Z01vZGUgPSBmYWxzZVxuICAgIH0pIHtcbiAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIG1vZGFsXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpOyAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXNzZWQgY29uZmlnXG5cbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBkZWJ1Z01vZGUsXG4gICAgICAgIGRpc2FibGVTY3JvbGwsXG4gICAgICAgIG9wZW5UcmlnZ2VyLFxuICAgICAgICBjbG9zZVRyaWdnZXIsXG4gICAgICAgIG9uU2hvdyxcbiAgICAgICAgb25DbG9zZSxcbiAgICAgICAgYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgYXdhaXRPcGVuQW5pbWF0aW9uLFxuICAgICAgICBkaXNhYmxlRm9jdXMgLy8gUmVnaXN0ZXIgY2xpY2sgZXZlbnRzIG9ubHkgaWYgcHJlIGJpbmRpbmcgZXZlbnRMaXN0ZW5lcnNcblxuICAgICAgfTtcbiAgICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoLi4udHJpZ2dlcnMpOyAvLyBwcmUgYmluZCBmdW5jdGlvbnMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgb3BlblRyaWdnZXJzIGFuZCBiaW5kcyBjbGljayBldmVudFxuICAgICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBbQXJyYXkgb2Ygbm9kZSBlbGVtZW50c11cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICByZWdpc3RlclRyaWdnZXJzKC4uLnRyaWdnZXJzKSB7XG4gICAgICB0cmlnZ2Vycy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuc2hvd01vZGFsKGV2ZW50KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcbiAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdkaXNhYmxlJyk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsO1xuICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3VyKCdlbmFibGUnKTtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb25maWcub25DbG9zZSh0aGlzLm1vZGFsKTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICAgICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkge1xuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1vZGFsKTtcbiAgICAgIGlmICh0aGlzLm1vZGFsKSB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBzY3JvbGxCZWhhdmlvdXIodG9nZ2xlKSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVTY3JvbGwpIHJldHVybjtcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAgIHN3aXRjaCAodG9nZ2xlKSB7XG4gICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LnN0eWxlLCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUodGhpcy5jb25maWcuY2xvc2VUcmlnZ2VyKSkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB0aGlzLm1haW50YWluRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKTtcbiAgICAgIHJldHVybiBBcnJheSguLi5ub2Rlcyk7XG4gICAgfVxuXG4gICAgc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5kaXNhYmxlRm9jdXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpO1xuICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCkgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBtYWludGFpbkZvY3VzKGV2ZW50KSB7XG4gICAgICBjb25zdCBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gaWYgZGlzYWJsZUZvY3VzIGlzIHRydWVcblxuICAgICAgaWYgKCF0aGlzLm1vZGFsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG4gIC8qKlxuICAgKiBNb2RhbCBwcm90b3R5cGUgZW5kcy5cbiAgICogSGVyZSBvbiBjb2RlIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlY3RpbmcgYW5kXG4gICAqIGF1dG8gYmluZGluZyBldmVudCBoYW5kbGVycyBvbiBtb2RhbCB0cmlnZ2Vyc1xuICAgKi9cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3BlbmVkIG1vZGFsXG5cblxuICBsZXQgYWN0aXZlTW9kYWwgPSBudWxsO1xuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgaXQnc1xuICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgICAgQW4gYXJyYXkgb2YgYWxsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdHJpZ2dlckF0dHIgVGhlIGRhdGEtYXR0cmlidXRlIHdoaWNoIHRyaWdnZXJzIHRoZSBtb2R1bGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIGNvbnN0IGdlbmVyYXRlVHJpZ2dlck1hcCA9ICh0cmlnZ2VycywgdHJpZ2dlckF0dHIpID0+IHtcbiAgICBjb25zdCB0cmlnZ2VyTWFwID0gW107XG4gICAgdHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldE1vZGFsID0gdHJpZ2dlci5hdHRyaWJ1dGVzW3RyaWdnZXJBdHRyXS52YWx1ZTtcbiAgICAgIGlmICh0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9PT0gdW5kZWZpbmVkKSB0cmlnZ2VyTWFwW3RhcmdldE1vZGFsXSA9IFtdO1xuICAgICAgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0ucHVzaCh0cmlnZ2VyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJpZ2dlck1hcDtcbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbW9kYWwgb2YgdGhlIGdpdmVuIGlkIGV4aXN0c1xuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge251bWJlcn0gaWQgIFRoZSBpZCBvZiB0aGUgbW9kYWxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBjb25zdCB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UgPSBpZCA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTWljcm9Nb2RhbDogXFx1Mjc1N1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJyR7aWR9J2AsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oYCVjRXhhbXBsZTpgLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCBgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCIke2lkfVwiPjwvZGl2PmApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBhcmUgbW9kYWwgdHJpZ2dlcnMgcHJlc2VudFxuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBBbiBhcnJheSBvZiBkYXRhLXRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgY29uc3QgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UgPSB0cmlnZ2VycyA9PiB7XG4gICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE1pY3JvTW9kYWw6IFxcdTI3NTdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ2AsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdkYXRhIGF0dHJpYnV0ZS4nKTtcbiAgICAgIGNvbnNvbGUud2FybihgJWNFeGFtcGxlOmAsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIGA8YSBocmVmPVwiI1wiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVwibXktbW9kYWxcIj48L2E+YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRyaWdnZXJzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG1vZGFsc1xuICAgKiBhcmUgcHJlc2VudCBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyAgIEFycmF5IG9mIERPTSBub2RlcyB3aGljaCBoYXZlIGRhdGEtdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJNYXAgQXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCB0aGVpciB0cmlnZ2Vyc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIGNvbnN0IHZhbGlkYXRlQXJncyA9ICh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT4ge1xuICAgIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlKHRyaWdnZXJzKTtcbiAgICBpZiAoIXRyaWdnZXJNYXApIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gdHJpZ2dlck1hcCkgdmFsaWRhdGVNb2RhbFByZXNlbmNlKGlkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogQmluZHMgY2xpY2sgaGFuZGxlcnMgdG8gYWxsIG1vZGFsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuXG5cbiAgY29uc3QgaW5pdCA9IGNvbmZpZyA9PiB7XG4gICAgLy8gQ3JlYXRlIGFuIGNvbmZpZyBvYmplY3Qgd2l0aCBkZWZhdWx0IG9wZW5UcmlnZ2VyXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIG9wZW5UcmlnZ2VyOiAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInXG4gICAgfSwgY29uZmlnKTsgLy8gQ29sbGVjdHMgYWxsIHRoZSBub2RlcyB3aXRoIHRoZSB0cmlnZ2VyXG5cbiAgICBjb25zdCB0cmlnZ2VycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtvcHRpb25zLm9wZW5UcmlnZ2VyfV1gKV07IC8vIE1ha2VzIGEgbWFwcGluZ3Mgb2YgbW9kYWxzIHdpdGggdGhlaXIgdHJpZ2dlciBub2Rlc1xuXG4gICAgY29uc3QgdHJpZ2dlck1hcCA9IGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2Vycywgb3B0aW9ucy5vcGVuVHJpZ2dlcik7IC8vIENoZWNrcyBpZiBtb2RhbHMgYW5kIHRyaWdnZXJzIGV4aXN0IGluIGRvbVxuXG4gICAgaWYgKG9wdGlvbnMuZGVidWdNb2RlID09PSB0cnVlICYmIHZhbGlkYXRlQXJncyh0cmlnZ2VycywgdHJpZ2dlck1hcCkgPT09IGZhbHNlKSByZXR1cm47IC8vIEZvciBldmVyeSB0YXJnZXQgbW9kYWwgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuXG4gICAgZm9yICh2YXIga2V5IGluIHRyaWdnZXJNYXApIHtcbiAgICAgIGxldCB2YWx1ZSA9IHRyaWdnZXJNYXBba2V5XTtcbiAgICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSBrZXk7XG4gICAgICBvcHRpb25zLnRyaWdnZXJzID0gWy4uLnZhbHVlXTtcbiAgICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3dzIGEgcGFydGljdWxhciBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc3BsYXldXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gcGFzc11cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICBjb25zdCBzaG93ID0gKHRhcmdldE1vZGFsLCBjb25maWcpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gY29uZmlnIHx8IHt9O1xuICAgIG9wdGlvbnMudGFyZ2V0TW9kYWwgPSB0YXJnZXRNb2RhbDsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVNb2RhbFByZXNlbmNlKHRhcmdldE1vZGFsKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gc3RvcmVzIHJlZmVyZW5jZSB0byBhY3RpdmUgbW9kYWxcblxuICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgYWN0aXZlTW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGNsb3NlXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIGNvbnN0IGNsb3NlID0gdGFyZ2V0TW9kYWwgPT4ge1xuICAgIHRhcmdldE1vZGFsID8gYWN0aXZlTW9kYWwuY2xvc2VNb2RhbEJ5SWQodGFyZ2V0TW9kYWwpIDogYWN0aXZlTW9kYWwuY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBzaG93LFxuICAgIGNsb3NlXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNaWNyb01vZGFsO1xuIiwiLy8gT2JqZWN0LmtleXNcbmlmICghT2JqZWN0LmtleXMpIHtcbiAgT2JqZWN0LmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbmFtZSkpIHtcbiAgICAgICAga2V5cy5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfTtcbn0iLCIvLyBjcm9zcyBicm93c2VycyBhZGRSdWxlIG1ldGhvZFxuaW1wb3J0IHsgcmFmIH0gZnJvbSAnLi9yYWYuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU1J1bGUoc2hlZXQsIHNlbGVjdG9yLCBydWxlcywgaW5kZXgpIHtcbiAgLy8gcmV0dXJuIHJhZihmdW5jdGlvbigpIHtcbiAgICAnaW5zZXJ0UnVsZScgaW4gc2hlZXQgP1xuICAgICAgc2hlZXQuaW5zZXJ0UnVsZShzZWxlY3RvciArICd7JyArIHJ1bGVzICsgJ30nLCBpbmRleCkgOlxuICAgICAgc2hlZXQuYWRkUnVsZShzZWxlY3RvciwgcnVsZXMsIGluZGV4KTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgY2xhc3NMaXN0U3VwcG9ydCwgaGFzQ2xhc3MgfSBmcm9tICcuL2hhc0NsYXNzLmpzJztcbnZhciBhZGRDbGFzcyA9IGNsYXNzTGlzdFN1cHBvcnQgP1xuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7XG4gICAgICBpZiAoIWhhc0NsYXNzKGVsLCAgc3RyKSkgeyBlbC5jbGFzc0xpc3QuYWRkKHN0cik7IH1cbiAgICB9IDpcbiAgICBmdW5jdGlvbiAoZWwsIHN0cikge1xuICAgICAgaWYgKCFoYXNDbGFzcyhlbCwgIHN0cikpIHsgZWwuY2xhc3NOYW1lICs9ICcgJyArIHN0cjsgfVxuICAgIH07XG5cbmV4cG9ydCB7IGFkZENsYXNzIH07IiwiaW1wb3J0IHsgcGFzc2l2ZU9wdGlvbiB9IGZyb20gJy4vcGFzc2l2ZU9wdGlvbi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudHMoZWwsIG9iaiwgcHJldmVudFNjcm9sbGluZykge1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIHZhciBvcHRpb24gPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJ10uaW5kZXhPZihwcm9wKSA+PSAwICYmICFwcmV2ZW50U2Nyb2xsaW5nID8gcGFzc2l2ZU9wdGlvbiA6IGZhbHNlO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIocHJvcCwgb2JqW3Byb3BdLCBvcHRpb24pO1xuICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFycmF5RnJvbU5vZGVMaXN0IChubCkge1xuICB2YXIgYXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gbmwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYXJyLnB1c2gobmxbaV0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59IiwidmFyIHdpbiA9IHdpbmRvdztcblxuZXhwb3J0IHZhciBjYWYgPSB3aW4uY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IGZ1bmN0aW9uKGlkKXsgY2xlYXJUaW1lb3V0KGlkKTsgfTtcbiIsIi8vIGdldCBjc3MtY2FsYyBcbi8vIEByZXR1cm4gLSBmYWxzZSB8IGNhbGMgfCAtd2Via2l0LWNhbGMgfCAtbW96LWNhbGNcbi8vIEB1c2FnZSAtIHZhciBjYWxjID0gZ2V0Q2FsYygpOyBcbmltcG9ydCB7IGdldEJvZHkgfSBmcm9tICcuL2dldEJvZHkuanMnO1xuaW1wb3J0IHsgc2V0RmFrZUJvZHkgfSBmcm9tICcuL3NldEZha2VCb2R5LmpzJztcbmltcG9ydCB7IHJlc2V0RmFrZUJvZHkgfSBmcm9tICcuL3Jlc2V0RmFrZUJvZHkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsYygpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50LCBcbiAgICAgIGJvZHkgPSBnZXRCb2R5KCksXG4gICAgICBkb2NPdmVyZmxvdyA9IHNldEZha2VCb2R5KGJvZHkpLFxuICAgICAgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgdHJ5IHtcbiAgICB2YXIgc3RyID0gJygxMHB4ICogMTApJyxcbiAgICAgICAgdmFscyA9IFsnY2FsYycgKyBzdHIsICctbW96LWNhbGMnICsgc3RyLCAnLXdlYmtpdC1jYWxjJyArIHN0cl0sXG4gICAgICAgIHZhbDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdmFsID0gdmFsc1tpXTtcbiAgICAgIGRpdi5zdHlsZS53aWR0aCA9IHZhbDtcbiAgICAgIGlmIChkaXYub2Zmc2V0V2lkdGggPT09IDEwMCkgeyBcbiAgICAgICAgcmVzdWx0ID0gdmFsLnJlcGxhY2Uoc3RyLCAnJyk7IFxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIFxuICBib2R5LmZha2UgPyByZXNldEZha2VCb2R5KGJvZHksIGRvY092ZXJmbG93KSA6IGRpdi5yZW1vdmUoKTtcblxuICByZXR1cm4gcmVzdWx0O1xufSIsImV4cG9ydCBmdW5jdGlvbiBjaGVja1N0b3JhZ2VWYWx1ZSAodmFsdWUpIHtcbiAgcmV0dXJuIFsndHJ1ZScsICdmYWxzZSddLmluZGV4T2YodmFsdWUpID49IDAgPyBKU09OLnBhcnNlKHZhbHVlKSA6IHZhbHVlO1xufSIsIi8vIENoaWxkTm9kZS5yZW1vdmVcbmlmKCEoXCJyZW1vdmVcIiBpbiBFbGVtZW50LnByb3RvdHlwZSkpe1xuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpe1xuICAgIGlmKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cbiAgfTtcbn0iLCJleHBvcnQgdmFyIGNsYXNzTGlzdFN1cHBvcnQgPSAnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJyk7IiwiLy8gY3JlYXRlIGFuZCBhcHBlbmQgc3R5bGUgc2hlZXRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0IChtZWRpYSkge1xuICAvLyBDcmVhdGUgdGhlIDxzdHlsZT4gdGFnXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgLy8gc3R5bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuXG4gIC8vIEFkZCBhIG1lZGlhIChhbmQvb3IgbWVkaWEgcXVlcnkpIGhlcmUgaWYgeW91J2QgbGlrZSFcbiAgLy8gc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgXCJzY3JlZW5cIilcbiAgLy8gc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEwMjRweClcIilcbiAgaWYgKG1lZGlhKSB7IHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTsgfVxuXG4gIC8vIFdlYktpdCBoYWNrIDooXG4gIC8vIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcblxuICAvLyBBZGQgdGhlIDxzdHlsZT4gZWxlbWVudCB0byB0aGUgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIHJldHVybiBzdHlsZS5zaGVldCA/IHN0eWxlLnNoZWV0IDogc3R5bGUuc3R5bGVTaGVldDtcbn07IiwiZXhwb3J0IHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsImV4cG9ydCBmdW5jdGlvbiBFdmVudHMoKSB7XG4gIHJldHVybiB7XG4gICAgdG9waWNzOiB7fSxcbiAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgIHRoaXMudG9waWNzW2V2ZW50TmFtZV0gPSB0aGlzLnRvcGljc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIG9mZjogZnVuY3Rpb24oZXZlbnROYW1lLCBmbikge1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvcGljc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgZGF0YS50eXBlID0gZXZlbnROYW1lO1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgZm4oZGF0YSwgZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJleHBvcnQgZnVuY3Rpb24gZXh0ZW5kKCkge1xuICB2YXIgb2JqLCBuYW1lLCBjb3B5LFxuICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuICAgICAgaSA9IDEsXG4gICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKG9iaiA9IGFyZ3VtZW50c1tpXSkgIT09IG51bGwpIHtcbiAgICAgIGZvciAobmFtZSBpbiBvYmopIHtcbiAgICAgICAgY29weSA9IG9ialtuYW1lXTtcblxuICAgICAgICBpZiAodGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8vIGh0dHBzOi8vdG9kZG1vdHRvLmNvbS9kaXRjaC10aGUtYXJyYXktZm9yZWFjaC1jYWxsLW5vZGVsaXN0LWhhY2svXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaCAoYXJyLCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbChzY29wZSwgYXJyW2ldLCBpKTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGVsLCBhdHRyKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBib2R5ID0gZG9jLmJvZHk7XG5cbiAgaWYgKCFib2R5KSB7XG4gICAgYm9keSA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgYm9keS5mYWtlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBib2R5O1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkge1xuICB2YXIgcnVsZSA9ICgnaW5zZXJ0UnVsZScgaW4gc2hlZXQpID8gc2hlZXQuY3NzUnVsZXMgOiBzaGVldC5ydWxlcztcbiAgcmV0dXJuIHJ1bGUubGVuZ3RoO1xufSIsIi8vIGdldCB0cmFuc2l0aW9uZW5kLCBhbmltYXRpb25lbmQgYmFzZWQgb24gdHJhbnNpdGlvbkR1cmF0aW9uXG4vLyBAcHJvcGluOiBzdHJpbmdcbi8vIEBwcm9wT3V0OiBzdHJpbmcsIGZpcnN0LWxldHRlciB1cHBlcmNhc2Vcbi8vIFVzYWdlOiBnZXRFbmRQcm9wZXJ0eSgnV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uJywgJ1RyYW5zaXRpb24nKSA9PiB3ZWJraXRUcmFuc2l0aW9uRW5kXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kUHJvcGVydHkocHJvcEluLCBwcm9wT3V0KSB7XG4gIHZhciBlbmRQcm9wID0gZmFsc2U7XG4gIGlmICgvXldlYmtpdC8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICd3ZWJraXQnICsgcHJvcE91dCArICdFbmQnO1xuICB9IGVsc2UgaWYgKC9eTy8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICdvJyArIHByb3BPdXQgKyAnRW5kJztcbiAgfSBlbHNlIGlmIChwcm9wSW4pIHtcbiAgICBlbmRQcm9wID0gcHJvcE91dC50b0xvd2VyQ2FzZSgpICsgJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIGVuZFByb3A7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNsaWRlSWQoKSB7XG4gIHZhciBpZCA9IHdpbmRvdy50bnNJZDtcbiAgd2luZG93LnRuc0lkID0gIWlkID8gMSA6IGlkICsgMTtcbiAgXG4gIHJldHVybiAndG5zJyArIHdpbmRvdy50bnNJZDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hEaXJlY3Rpb24oYW5nbGUsIHJhbmdlKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBmYWxzZSxcbiAgICAgIGdhcCA9IE1hdGguYWJzKDkwIC0gTWF0aC5hYnMoYW5nbGUpKTtcbiAgICAgIFxuICBpZiAoZ2FwID49IDkwIC0gcmFuZ2UpIHtcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH0gZWxzZSBpZiAoZ2FwIDw9IHJhbmdlKSB7XG4gICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59IiwiaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXMzRFRyYW5zZm9ybXModGYpe1xuICBpZiAoIXRmKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7IHJldHVybiBmYWxzZTsgfVxuICBcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICBoYXMzZCxcbiAgICAgIGNzc1RGID0gdGYubGVuZ3RoID4gOSA/ICctJyArIHRmLnNsaWNlKDAsIC05KS50b0xvd2VyQ2FzZSgpICsgJy0nIDogJyc7XG5cbiAgY3NzVEYgKz0gJ3RyYW5zZm9ybSc7XG5cbiAgLy8gQWRkIGl0IHRvIHRoZSBib2R5IHRvIGdldCB0aGUgY29tcHV0ZWQgc3R5bGVcbiAgYm9keS5pbnNlcnRCZWZvcmUoZWwsIG51bGwpO1xuXG4gIGVsLnN0eWxlW3RmXSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xuICBoYXMzZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1RGKTtcblxuICBib2R5LmZha2UgPyByZXNldEZha2VCb2R5KGJvZHksIGRvY092ZXJmbG93KSA6IGVsLnJlbW92ZSgpO1xuXG4gIHJldHVybiAoaGFzM2QgIT09IHVuZGVmaW5lZCAmJiBoYXMzZC5sZW5ndGggPiAwICYmIGhhczNkICE9PSBcIm5vbmVcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQXR0cihlbCwgYXR0cikge1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKGF0dHIpO1xufSIsImltcG9ydCB7IGNsYXNzTGlzdFN1cHBvcnQgfSBmcm9tICcuL2NsYXNzTGlzdFN1cHBvcnQuanMnO1xuXG52YXIgaGFzQ2xhc3MgPSBjbGFzc0xpc3RTdXBwb3J0ID9cbiAgICBmdW5jdGlvbiAoZWwsIHN0cikgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0cik7IH0gOlxuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7IHJldHVybiBlbC5jbGFzc05hbWUuaW5kZXhPZihzdHIpID49IDA7IH07XG5cbmV4cG9ydCB7IGNsYXNzTGlzdFN1cHBvcnQsIGhhc0NsYXNzIH07IiwiZXhwb3J0IGZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsLCBmb3JjZUhpZGUpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgeyBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUxpc3QoZWwpIHtcbiAgLy8gT25seSBOb2RlTGlzdCBoYXMgdGhlIFwiaXRlbSgpXCIgZnVuY3Rpb25cbiAgcmV0dXJuIHR5cGVvZiBlbC5pdGVtICE9PSBcInVuZGVmaW5lZFwiOyBcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZGlzcGxheSAhPT0gJ25vbmUnO1xufSIsImV4cG9ydCBmdW5jdGlvbiBqc1RyYW5zZm9ybShlbGVtZW50LCBhdHRyLCBwcmVmaXgsIHBvc3RmaXgsIHRvLCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHRpY2sgPSBNYXRoLm1pbihkdXJhdGlvbiwgMTApLFxuICAgICAgdW5pdCA9ICh0by5pbmRleE9mKCclJykgPj0gMCkgPyAnJScgOiAncHgnLFxuICAgICAgdG8gPSB0by5yZXBsYWNlKHVuaXQsICcnKSxcbiAgICAgIGZyb20gPSBOdW1iZXIoZWxlbWVudC5zdHlsZVthdHRyXS5yZXBsYWNlKHByZWZpeCwgJycpLnJlcGxhY2UocG9zdGZpeCwgJycpLnJlcGxhY2UodW5pdCwgJycpKSxcbiAgICAgIHBvc2l0aW9uVGljayA9ICh0byAtIGZyb20pIC8gZHVyYXRpb24gKiB0aWNrLFxuICAgICAgcnVubmluZztcblxuICBzZXRUaW1lb3V0KG1vdmVFbGVtZW50LCB0aWNrKTtcbiAgZnVuY3Rpb24gbW92ZUVsZW1lbnQoKSB7XG4gICAgZHVyYXRpb24gLT0gdGljaztcbiAgICBmcm9tICs9IHBvc2l0aW9uVGljaztcbiAgICBlbGVtZW50LnN0eWxlW2F0dHJdID0gcHJlZml4ICsgZnJvbSArIHVuaXQgKyBwb3N0Zml4O1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHsgXG4gICAgICBzZXRUaW1lb3V0KG1vdmVFbGVtZW50LCB0aWNrKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYXF1ZXJ5U3VwcG9ydCAoKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudCxcbiAgICAgIGJvZHkgPSBnZXRCb2R5KCksXG4gICAgICBkb2NPdmVyZmxvdyA9IHNldEZha2VCb2R5KGJvZHkpLFxuICAgICAgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcbiAgICAgIHJ1bGUgPSAnQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDoxcHgpey50bnMtbXEtdGVzdHtwb3NpdGlvbjphYnNvbHV0ZX19JyxcbiAgICAgIHBvc2l0aW9uO1xuXG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICBkaXYuY2xhc3NOYW1lID0gJ3Rucy1tcS10ZXN0JztcblxuICBib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICB9XG5cbiAgcG9zaXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdikucG9zaXRpb24gOiBkaXYuY3VycmVudFN0eWxlWydwb3NpdGlvbiddO1xuXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiO1xufSIsIi8vIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWUgaWYgdGhlIHBhc3NpdmUgcHJvcGVydHkgaXMgYWNjZXNzZWRcbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuZXhwb3J0IHZhciBwYXNzaXZlT3B0aW9uID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTsiLCIvLyBnZXQgc3VicGl4ZWwgc3VwcG9ydCB2YWx1ZVxuLy8gQHJldHVybiAtIGJvb2xlYW5cbmltcG9ydCB7IGdldEJvZHkgfSBmcm9tICcuL2dldEJvZHkuanMnO1xuaW1wb3J0IHsgc2V0RmFrZUJvZHkgfSBmcm9tICcuL3NldEZha2VCb2R5LmpzJztcbmltcG9ydCB7IHJlc2V0RmFrZUJvZHkgfSBmcm9tICcuL3Jlc2V0RmFrZUJvZHkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGFnZUxheW91dCgpIHtcbiAgLy8gY2hlY2sgc3VicGl4ZWwgbGF5b3V0IHN1cHBvcnRpbmdcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICB3cmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgb3V0ZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBzdHIgPSAnJyxcbiAgICAgIGNvdW50ID0gNzAsXG4gICAgICBwZXJQYWdlID0gMyxcbiAgICAgIHN1cHBvcnRlZCA9IGZhbHNlO1xuXG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gXCJ0bnMtdC1zdWJwMlwiO1xuICBvdXRlci5jbGFzc05hbWUgPSBcInRucy10LWN0XCI7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgc3RyICs9ICc8ZGl2PjwvZGl2Pic7XG4gIH1cblxuICBvdXRlci5pbm5lckhUTUwgPSBzdHI7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIHN1cHBvcnRlZCA9IE1hdGguYWJzKHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIG91dGVyLmNoaWxkcmVuW2NvdW50IC0gcGVyUGFnZV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgPCAyO1xuXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogd3JhcHBlci5yZW1vdmUoKTtcblxuICByZXR1cm4gc3VwcG9ydGVkO1xufSIsInZhciB3aW4gPSB3aW5kb3c7XG5cbmV4cG9ydCB2YXIgcmFmID0gd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW4ud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbi5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luLm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IGZ1bmN0aW9uKGNiKSB7IHJldHVybiBzZXRUaW1lb3V0KGNiLCAxNik7IH07XG4iLCJpbXBvcnQgeyBpc05vZGVMaXN0IH0gZnJvbSBcIi4vaXNOb2RlTGlzdC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0cnMoZWxzLCBhdHRycykge1xuICBlbHMgPSAoaXNOb2RlTGlzdChlbHMpIHx8IGVscyBpbnN0YW5jZW9mIEFycmF5KSA/IGVscyA6IFtlbHNdO1xuICBhdHRycyA9IChhdHRycyBpbnN0YW5jZW9mIEFycmF5KSA/IGF0dHJzIDogW2F0dHJzXTtcblxuICB2YXIgYXR0ckxlbmd0aCA9IGF0dHJzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IGVscy5sZW5ndGg7IGktLTspIHtcbiAgICBmb3IgKHZhciBqID0gYXR0ckxlbmd0aDsgai0tOykge1xuICAgICAgZWxzW2ldLnJlbW92ZUF0dHJpYnV0ZShhdHRyc1tqXSk7XG4gICAgfVxuICB9XG59IiwiLy8gY3Jvc3MgYnJvd3NlcnMgYWRkUnVsZSBtZXRob2RcbmltcG9ydCB7IHJhZiB9IGZyb20gJy4vcmFmLmpzJztcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDU1NSdWxlKHNoZWV0LCBpbmRleCkge1xuICAvLyByZXR1cm4gcmFmKGZ1bmN0aW9uKCkge1xuICAgICdkZWxldGVSdWxlJyBpbiBzaGVldCA/XG4gICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KSA6XG4gICAgICBzaGVldC5yZW1vdmVSdWxlKGluZGV4KTtcbiAgLy8gfSk7XG59IiwiaW1wb3J0IHsgY2xhc3NMaXN0U3VwcG9ydCwgaGFzQ2xhc3MgfSBmcm9tICcuL2hhc0NsYXNzLmpzJztcbnZhciByZW1vdmVDbGFzcyA9IGNsYXNzTGlzdFN1cHBvcnQgP1xuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MoZWwsICBzdHIpKSB7IGVsLmNsYXNzTGlzdC5yZW1vdmUoc3RyKTsgfVxuICAgIH0gOlxuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MoZWwsIHN0cikpIHsgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2Uoc3RyLCAnJyk7IH1cbiAgICB9O1xuXG5leHBvcnQgeyByZW1vdmVDbGFzcyB9OyIsImltcG9ydCB7IHBhc3NpdmVPcHRpb24gfSBmcm9tICcuL3Bhc3NpdmVPcHRpb24uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKGVsLCBvYmopIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICB2YXIgb3B0aW9uID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZSddLmluZGV4T2YocHJvcCkgPj0gMCA/IHBhc3NpdmVPcHRpb24gOiBmYWxzZTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHByb3AsIG9ialtwcm9wXSwgb3B0aW9uKTtcbiAgfVxufSIsImltcG9ydCB7IGRvY0VsZW1lbnQgfSBmcm9tICcuL2RvY0VsZW1lbnQuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGYWtlQm9keSAoYm9keSwgZG9jT3ZlcmZsb3cpIHtcbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGJvZHkucmVtb3ZlKCk7XG4gICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY092ZXJmbG93O1xuICAgIC8vIFRyaWdnZXIgbGF5b3V0IHNvIGtpbmV0aWMgc2Nyb2xsaW5nIGlzbid0IGRpc2FibGVkIGluIGlPUzYrXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cbn0iLCJpbXBvcnQgeyBpc05vZGVMaXN0IH0gZnJvbSBcIi4vaXNOb2RlTGlzdC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cnMoZWxzLCBhdHRycykge1xuICBlbHMgPSAoaXNOb2RlTGlzdChlbHMpIHx8IGVscyBpbnN0YW5jZW9mIEFycmF5KSA/IGVscyA6IFtlbHNdO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGF0dHJzKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHsgcmV0dXJuOyB9XG5cbiAgZm9yICh2YXIgaSA9IGVscy5sZW5ndGg7IGktLTspIHtcbiAgICBmb3IodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgZWxzW2ldLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGRvY0VsZW1lbnQgfSBmcm9tICcuL2RvY0VsZW1lbnQuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RmFrZUJvZHkgKGJvZHkpIHtcbiAgdmFyIGRvY092ZXJmbG93ID0gJyc7XG4gIGlmIChib2R5LmZha2UpIHtcbiAgICBkb2NPdmVyZmxvdyA9IGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gICAgLy9hdm9pZCBjcmFzaGluZyBJRTgsIGlmIGJhY2tncm91bmQgaW1hZ2UgaXMgdXNlZFxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgIC8vU2FmYXJpIDUuMTMvNS4xLjQgT1NYIHN0b3BzIGxvYWRpbmcgaWYgOjotd2Via2l0LXNjcm9sbGJhciBpcyB1c2VkIGFuZCBzY3JvbGxiYXJzIGFyZSB2aXNpYmxlXG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2NFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICB9XG5cbiAgcmV0dXJuIGRvY092ZXJmbG93O1xufSIsImV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2Uoc3RvcmFnZSwga2V5LCB2YWx1ZSwgYWNjZXNzKSB7XG4gIGlmIChhY2Nlc3MpIHtcbiAgICB0cnkgeyBzdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7IH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufSIsImV4cG9ydCBmdW5jdGlvbiBzaG93RWxlbWVudChlbCwgZm9yY2VIaWRlKSB7XG4gIGlmIChlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHsgZWwuc3R5bGUuZGlzcGxheSA9ICcnOyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlICh5LCB4KSB7XG4gIHJldHVybiBNYXRoLmF0YW4yKHksIHgpICogKDE4MCAvIE1hdGguUEkpO1xufSIsImV4cG9ydCBmdW5jdGlvbiB3aGljaFByb3BlcnR5KHByb3BzKXtcbiAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgYXJyID0gW3Byb3BzXSxcbiAgICAgICAgUHJvcHMgPSBwcm9wcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BzLnN1YnN0cigxKSxcbiAgICAgICAgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnLCAnTyddO1xuICAgICAgICBcbiAgICBwcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uKHByZWZpeCkge1xuICAgICAgaWYgKHByZWZpeCAhPT0gJ21zJyB8fCBwcm9wcyA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgICAgYXJyLnB1c2gocHJlZml4ICsgUHJvcHMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvcHMgPSBhcnI7XG4gIH1cblxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpLFxuICAgICAgbGVuID0gcHJvcHMubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspe1xuICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgaWYoIGVsLnN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQgKXsgcmV0dXJuIHByb3A7IH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTsgLy8gZXhwbGljaXQgZm9yIGllOS1cbn1cbiIsImltcG9ydCAnLi9oZWxwZXJzL09iamVjdC5rZXlzJztcbmltcG9ydCAnLi9oZWxwZXJzL2NoaWxkTm9kZS5yZW1vdmUnO1xuaW1wb3J0IHsgcmFmIH0gZnJvbSAnLi9oZWxwZXJzL3JhZi5qcyc7XG5pbXBvcnQgeyBjYWYgfSBmcm9tICcuL2hlbHBlcnMvY2FmLmpzJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4vaGVscGVycy9leHRlbmQuanMnO1xuaW1wb3J0IHsgY2hlY2tTdG9yYWdlVmFsdWUgfSBmcm9tICcuL2hlbHBlcnMvY2hlY2tTdG9yYWdlVmFsdWUuanMnO1xuaW1wb3J0IHsgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9oZWxwZXJzL3NldExvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBnZXRTbGlkZUlkIH0gZnJvbSAnLi9oZWxwZXJzL2dldFNsaWRlSWQuanMnO1xuaW1wb3J0IHsgY2FsYyB9IGZyb20gJy4vaGVscGVycy9jYWxjLmpzJztcbmltcG9ydCB7IHBlcmNlbnRhZ2VMYXlvdXQgfSBmcm9tICcuL2hlbHBlcnMvcGVyY2VudGFnZUxheW91dC5qcyc7XG5pbXBvcnQgeyBtZWRpYXF1ZXJ5U3VwcG9ydCB9IGZyb20gJy4vaGVscGVycy9tZWRpYXF1ZXJ5U3VwcG9ydC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSAnLi9oZWxwZXJzL2NyZWF0ZVN0eWxlU2hlZXQuanMnO1xuaW1wb3J0IHsgYWRkQ1NTUnVsZSB9IGZyb20gJy4vaGVscGVycy9hZGRDU1NSdWxlLmpzJztcbmltcG9ydCB7IHJlbW92ZUNTU1J1bGUgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlQ1NTUnVsZS5qcyc7XG5pbXBvcnQgeyBnZXRDc3NSdWxlc0xlbmd0aCB9IGZyb20gJy4vaGVscGVycy9nZXRDc3NSdWxlc0xlbmd0aC5qcyc7XG5pbXBvcnQgeyB0b0RlZ3JlZSB9IGZyb20gJy4vaGVscGVycy90b0RlZ3JlZS5qcyc7XG5pbXBvcnQgeyBnZXRUb3VjaERpcmVjdGlvbiB9IGZyb20gJy4vaGVscGVycy9nZXRUb3VjaERpcmVjdGlvbi5qcyc7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnLi9oZWxwZXJzL2ZvckVhY2guanMnO1xuaW1wb3J0IHsgaGFzQ2xhc3MgfSBmcm9tICcuL2hlbHBlcnMvaGFzQ2xhc3MuanMnO1xuaW1wb3J0IHsgYWRkQ2xhc3MgfSBmcm9tICcuL2hlbHBlcnMvYWRkQ2xhc3MuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlQ2xhc3MuanMnO1xuaW1wb3J0IHsgaGFzQXR0ciB9IGZyb20gJy4vaGVscGVycy9oYXNBdHRyLmpzJztcbmltcG9ydCB7IGdldEF0dHIgfSBmcm9tICcuL2hlbHBlcnMvZ2V0QXR0ci5qcyc7XG5pbXBvcnQgeyBzZXRBdHRycyB9IGZyb20gJy4vaGVscGVycy9zZXRBdHRycy5qcyc7XG5pbXBvcnQgeyByZW1vdmVBdHRycyB9IGZyb20gJy4vaGVscGVycy9yZW1vdmVBdHRycy5qcyc7XG5pbXBvcnQgeyBhcnJheUZyb21Ob2RlTGlzdCB9IGZyb20gJy4vaGVscGVycy9hcnJheUZyb21Ob2RlTGlzdC5qcyc7XG5pbXBvcnQgeyBoaWRlRWxlbWVudCB9IGZyb20gJy4vaGVscGVycy9oaWRlRWxlbWVudC5qcyc7XG5pbXBvcnQgeyBzaG93RWxlbWVudCB9IGZyb20gJy4vaGVscGVycy9zaG93RWxlbWVudC5qcyc7XG5pbXBvcnQgeyBpc1Zpc2libGUgfSBmcm9tICcuL2hlbHBlcnMvaXNWaXNpYmxlLmpzJztcbmltcG9ydCB7IHdoaWNoUHJvcGVydHkgfSBmcm9tICcuL2hlbHBlcnMvd2hpY2hQcm9wZXJ0eS5qcyc7XG5pbXBvcnQgeyBoYXMzRFRyYW5zZm9ybXMgfSBmcm9tICcuL2hlbHBlcnMvaGFzM0RUcmFuc2Zvcm1zLmpzJztcbmltcG9ydCB7IGdldEVuZFByb3BlcnR5IH0gZnJvbSAnLi9oZWxwZXJzL2dldEVuZFByb3BlcnR5LmpzJztcbmltcG9ydCB7IGFkZEV2ZW50cyB9IGZyb20gJy4vaGVscGVycy9hZGRFdmVudHMuanMnO1xuaW1wb3J0IHsgcmVtb3ZlRXZlbnRzIH0gZnJvbSAnLi9oZWxwZXJzL3JlbW92ZUV2ZW50cy5qcyc7XG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuL2hlbHBlcnMvZXZlbnRzLmpzJztcbmltcG9ydCB7IGpzVHJhbnNmb3JtIH0gZnJvbSAnLi9oZWxwZXJzL2pzVHJhbnNmb3JtLmpzJztcblxuZXhwb3J0IHZhciB0bnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBleHRlbmQoe1xuICAgIGNvbnRhaW5lcjogJy5zbGlkZXInLFxuICAgIG1vZGU6ICdjYXJvdXNlbCcsXG4gICAgYXhpczogJ2hvcml6b250YWwnLFxuICAgIGl0ZW1zOiAxLFxuICAgIGd1dHRlcjogMCxcbiAgICBlZGdlUGFkZGluZzogMCxcbiAgICBmaXhlZFdpZHRoOiBmYWxzZSxcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxuICAgIHZpZXdwb3J0TWF4OiBmYWxzZSxcbiAgICBzbGlkZUJ5OiAxLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgY29udHJvbHM6IHRydWUsXG4gICAgY29udHJvbHNQb3NpdGlvbjogJ3RvcCcsXG4gICAgY29udHJvbHNUZXh0OiBbJ3ByZXYnLCAnbmV4dCddLFxuICAgIGNvbnRyb2xzQ29udGFpbmVyOiBmYWxzZSxcbiAgICBwcmV2QnV0dG9uOiBmYWxzZSxcbiAgICBuZXh0QnV0dG9uOiBmYWxzZSxcbiAgICBuYXY6IHRydWUsXG4gICAgbmF2UG9zaXRpb246ICd0b3AnLFxuICAgIG5hdkNvbnRhaW5lcjogZmFsc2UsXG4gICAgbmF2QXNUaHVtYm5haWxzOiBmYWxzZSxcbiAgICBhcnJvd0tleXM6IGZhbHNlLFxuICAgIHNwZWVkOiAzMDAsXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgIGF1dG9wbGF5UG9zaXRpb246ICd0b3AnLFxuICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICBhdXRvcGxheURpcmVjdGlvbjogJ2ZvcndhcmQnLFxuICAgIGF1dG9wbGF5VGV4dDogWydzdGFydCcsICdzdG9wJ10sXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiBmYWxzZSxcbiAgICBhdXRvcGxheUJ1dHRvbjogZmFsc2UsXG4gICAgYXV0b3BsYXlCdXR0b25PdXRwdXQ6IHRydWUsXG4gICAgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eTogdHJ1ZSxcbiAgICBhbmltYXRlSW46ICd0bnMtZmFkZUluJyxcbiAgICBhbmltYXRlT3V0OiAndG5zLWZhZGVPdXQnLFxuICAgIGFuaW1hdGVOb3JtYWw6ICd0bnMtbm9ybWFsJyxcbiAgICBhbmltYXRlRGVsYXk6IGZhbHNlLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcmV3aW5kOiBmYWxzZSxcbiAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICByZXNwb25zaXZlOiBmYWxzZSxcbiAgICBsYXp5bG9hZDogZmFsc2UsXG4gICAgbGF6eWxvYWRTZWxlY3RvcjogJy50bnMtbGF6eS1pbWcnLFxuICAgIHRvdWNoOiB0cnVlLFxuICAgIG1vdXNlRHJhZzogZmFsc2UsXG4gICAgc3dpcGVBbmdsZTogMTUsXG4gICAgbmVzdGVkOiBmYWxzZSxcbiAgICBwcmV2ZW50QWN0aW9uV2hlblJ1bm5pbmc6IGZhbHNlLFxuICAgIHByZXZlbnRTY3JvbGxPblRvdWNoOiBmYWxzZSxcbiAgICBmcmVlemFibGU6IHRydWUsXG4gICAgb25Jbml0OiBmYWxzZSxcbiAgICB1c2VMb2NhbFN0b3JhZ2U6IHRydWVcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG4gIFxuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICB3aW4gPSB3aW5kb3csXG4gICAgICBLRVlTID0ge1xuICAgICAgICBFTlRFUjogMTMsXG4gICAgICAgIFNQQUNFOiAzMixcbiAgICAgICAgTEVGVDogMzcsXG4gICAgICAgIFJJR0hUOiAzOVxuICAgICAgfSxcbiAgICAgIHRuc1N0b3JhZ2UgPSB7fSxcbiAgICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IG9wdGlvbnMudXNlTG9jYWxTdG9yYWdlO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2VBY2Nlc3MpIHtcbiAgICAvLyBjaGVjayBicm93c2VyIHZlcnNpb24gYW5kIGxvY2FsIHN0b3JhZ2UgYWNjZXNzXG4gICAgdmFyIGJyb3dzZXJJbmZvID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICB2YXIgdWlkID0gbmV3IERhdGU7XG5cbiAgICB0cnkge1xuICAgICAgdG5zU3RvcmFnZSA9IHdpbi5sb2NhbFN0b3JhZ2U7XG4gICAgICBpZiAodG5zU3RvcmFnZSkge1xuICAgICAgICB0bnNTdG9yYWdlLnNldEl0ZW0odWlkLCB1aWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VBY2Nlc3MgPSB0bnNTdG9yYWdlLmdldEl0ZW0odWlkKSA9PSB1aWQ7XG4gICAgICAgIHRuc1N0b3JhZ2UucmVtb3ZlSXRlbSh1aWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlQWNjZXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZUFjY2VzcykgeyB0bnNTdG9yYWdlID0ge307IH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChsb2NhbFN0b3JhZ2VBY2Nlc3MpIHtcbiAgICAgIC8vIHJlbW92ZSBzdG9yYWdlIHdoZW4gYnJvd3NlciB2ZXJzaW9uIGNoYW5nZXNcbiAgICAgIGlmICh0bnNTdG9yYWdlWyd0bnNBcHAnXSAmJiB0bnNTdG9yYWdlWyd0bnNBcHAnXSAhPT0gYnJvd3NlckluZm8pIHtcbiAgICAgICAgWyd0QycsICd0UEwnLCAndE1RJywgJ3RUZicsICd0M0QnLCAndFREdScsICd0VERlJywgJ3RBRHUnLCAndEFEZScsICd0VEUnLCAndEFFJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7IHRuc1N0b3JhZ2UucmVtb3ZlSXRlbShpdGVtKTsgfSk7XG4gICAgICB9XG4gICAgICAvLyB1cGRhdGUgYnJvd3NlckluZm9cbiAgICAgIGxvY2FsU3RvcmFnZVsndG5zQXBwJ10gPSBicm93c2VySW5mbztcbiAgICB9XG4gIH1cblxuICB2YXIgQ0FMQyA9IHRuc1N0b3JhZ2VbJ3RDJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QyddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndEMnLCBjYWxjKCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBQRVJDRU5UQUdFTEFZT1VUID0gdG5zU3RvcmFnZVsndFBMJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0UEwnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RQTCcsIHBlcmNlbnRhZ2VMYXlvdXQoKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIENTU01RID0gdG5zU3RvcmFnZVsndE1RJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0TVEnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RNUScsIG1lZGlhcXVlcnlTdXBwb3J0KCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0ZPUk0gPSB0bnNTdG9yYWdlWyd0VGYnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RUZiddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFRmJywgd2hpY2hQcm9wZXJ0eSgndHJhbnNmb3JtJyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBIQVMzRFRSQU5TRk9STVMgPSB0bnNTdG9yYWdlWyd0M0QnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3QzRCddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndDNEJywgaGFzM0RUcmFuc2Zvcm1zKFRSQU5TRk9STSksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0lUSU9ORFVSQVRJT04gPSB0bnNTdG9yYWdlWyd0VER1J10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VER1J10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0VER1Jywgd2hpY2hQcm9wZXJ0eSgndHJhbnNpdGlvbkR1cmF0aW9uJyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0lUSU9OREVMQVkgPSB0bnNTdG9yYWdlWyd0VERlJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VERlJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0VERlJywgd2hpY2hQcm9wZXJ0eSgndHJhbnNpdGlvbkRlbGF5JyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBBTklNQVRJT05EVVJBVElPTiA9IHRuc1N0b3JhZ2VbJ3RBRHUnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RBRHUnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RBRHUnLCB3aGljaFByb3BlcnR5KCdhbmltYXRpb25EdXJhdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgQU5JTUFUSU9OREVMQVkgPSB0bnNTdG9yYWdlWyd0QURlJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QURlJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0QURlJywgd2hpY2hQcm9wZXJ0eSgnYW5pbWF0aW9uRGVsYXknKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIFRSQU5TSVRJT05FTkQgPSB0bnNTdG9yYWdlWyd0VEUnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RURSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFRFJywgZ2V0RW5kUHJvcGVydHkoVFJBTlNJVElPTkRVUkFUSU9OLCAnVHJhbnNpdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgQU5JTUFUSU9ORU5EID0gdG5zU3RvcmFnZVsndEFFJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QUUnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RBRScsIGdldEVuZFByb3BlcnR5KEFOSU1BVElPTkRVUkFUSU9OLCAnQW5pbWF0aW9uJyksIGxvY2FsU3RvcmFnZUFjY2Vzcyk7XG5cbiAgLy8gZ2V0IGVsZW1lbnQgbm9kZXMgZnJvbSBzZWxlY3RvcnNcbiAgdmFyIHN1cHBvcnRDb25zb2xlV2FybiA9IHdpbi5jb25zb2xlICYmIHR5cGVvZiB3aW4uY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIsXG4gICAgICB0bnNMaXN0ID0gWydjb250YWluZXInLCAnY29udHJvbHNDb250YWluZXInLCAncHJldkJ1dHRvbicsICduZXh0QnV0dG9uJywgJ25hdkNvbnRhaW5lcicsICdhdXRvcGxheUJ1dHRvbiddLCBcbiAgICAgIG9wdGlvbnNFbGVtZW50cyA9IHt9O1xuICAgICAgXG4gIHRuc0xpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zW2l0ZW1dID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0ciA9IG9wdGlvbnNbaXRlbV0sXG4gICAgICAgICAgZWwgPSBkb2MucXVlcnlTZWxlY3RvcihzdHIpO1xuICAgICAgb3B0aW9uc0VsZW1lbnRzW2l0ZW1dID0gc3RyO1xuXG4gICAgICBpZiAoZWwgJiYgZWwubm9kZU5hbWUpIHtcbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IGVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZmluZCcsIG9wdGlvbnNbaXRlbV0pOyB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIG1ha2Ugc3VyZSBhdCBsZWFzdCAxIHNsaWRlXG4gIGlmIChvcHRpb25zLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPCAxKSB7XG4gICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ05vIHNsaWRlcyBmb3VuZCBpbicsIG9wdGlvbnMuY29udGFpbmVyKTsgfVxuICAgIHJldHVybjtcbiAgIH1cblxuICAvLyB1cGRhdGUgb3B0aW9uc1xuICB2YXIgcmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSxcbiAgICAgIG5lc3RlZCA9IG9wdGlvbnMubmVzdGVkLFxuICAgICAgY2Fyb3VzZWwgPSBvcHRpb25zLm1vZGUgPT09ICdjYXJvdXNlbCcgPyB0cnVlIDogZmFsc2U7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAvLyBhcHBseSByZXNwb25zaXZlWzBdIHRvIG9wdGlvbnMgYW5kIHJlbW92ZSBpdFxuICAgIGlmICgwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywgcmVzcG9uc2l2ZVswXSk7XG4gICAgICBkZWxldGUgcmVzcG9uc2l2ZVswXTtcbiAgICB9XG5cbiAgICB2YXIgcmVzcG9uc2l2ZVRlbSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiByZXNwb25zaXZlKSB7XG4gICAgICB2YXIgdmFsID0gcmVzcG9uc2l2ZVtrZXldO1xuICAgICAgLy8gdXBkYXRlIHJlc3BvbnNpdmVcbiAgICAgIC8vIGZyb206IDMwMDogMlxuICAgICAgLy8gdG86IFxuICAgICAgLy8gICAzMDA6IHsgXG4gICAgICAvLyAgICAgaXRlbXM6IDIgXG4gICAgICAvLyAgIH0gXG4gICAgICB2YWwgPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IHtpdGVtczogdmFsfSA6IHZhbDtcbiAgICAgIHJlc3BvbnNpdmVUZW1ba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmVzcG9uc2l2ZSA9IHJlc3BvbnNpdmVUZW07XG4gICAgcmVzcG9uc2l2ZVRlbSA9IG51bGw7XG4gIH1cblxuICAvLyB1cGRhdGUgb3B0aW9uc1xuICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zIChvYmopIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoIWNhcm91c2VsKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdzbGlkZUJ5JykgeyBvYmpba2V5XSA9ICdwYWdlJzsgfVxuICAgICAgICBpZiAoa2V5ID09PSAnZWRnZVBhZGRpbmcnKSB7IG9ialtrZXldID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKGtleSA9PT0gJ2F1dG9IZWlnaHQnKSB7IG9ialtrZXldID0gZmFsc2U7IH1cbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIHJlc3BvbnNpdmUgb3B0aW9uc1xuICAgICAgaWYgKGtleSA9PT0gJ3Jlc3BvbnNpdmUnKSB7IHVwZGF0ZU9wdGlvbnMob2JqW2tleV0pOyB9XG4gICAgfVxuICB9XG4gIGlmICghY2Fyb3VzZWwpIHsgdXBkYXRlT3B0aW9ucyhvcHRpb25zKTsgfVxuXG5cbiAgLy8gPT09IGRlZmluZSBhbmQgc2V0IHZhcmlhYmxlcyA9PT1cbiAgaWYgKCFjYXJvdXNlbCkge1xuICAgIG9wdGlvbnMuYXhpcyA9ICdob3Jpem9udGFsJztcbiAgICBvcHRpb25zLnNsaWRlQnkgPSAncGFnZSc7XG4gICAgb3B0aW9ucy5lZGdlUGFkZGluZyA9IGZhbHNlO1xuXG4gICAgdmFyIGFuaW1hdGVJbiA9IG9wdGlvbnMuYW5pbWF0ZUluLFxuICAgICAgICBhbmltYXRlT3V0ID0gb3B0aW9ucy5hbmltYXRlT3V0LFxuICAgICAgICBhbmltYXRlRGVsYXkgPSBvcHRpb25zLmFuaW1hdGVEZWxheSxcbiAgICAgICAgYW5pbWF0ZU5vcm1hbCA9IG9wdGlvbnMuYW5pbWF0ZU5vcm1hbDtcbiAgfVxuXG4gIHZhciBob3Jpem9udGFsID0gb3B0aW9ucy5heGlzID09PSAnaG9yaXpvbnRhbCcgPyB0cnVlIDogZmFsc2UsXG4gICAgICBvdXRlcldyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBpbm5lcldyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBtaWRkbGVXcmFwcGVyLFxuICAgICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIsXG4gICAgICBjb250YWluZXJQYXJlbnQgPSBjb250YWluZXIucGFyZW50Tm9kZSxcbiAgICAgIGNvbnRhaW5lckhUTUwgPSBjb250YWluZXIub3V0ZXJIVE1MLFxuICAgICAgc2xpZGVJdGVtcyA9IGNvbnRhaW5lci5jaGlsZHJlbixcbiAgICAgIHNsaWRlQ291bnQgPSBzbGlkZUl0ZW1zLmxlbmd0aCxcbiAgICAgIGJyZWFrcG9pbnRab25lLFxuICAgICAgd2luZG93V2lkdGggPSBnZXRXaW5kb3dXaWR0aCgpLFxuICAgICAgaXNPbiA9IGZhbHNlO1xuICBpZiAocmVzcG9uc2l2ZSkgeyBzZXRCcmVha3BvaW50Wm9uZSgpOyB9XG4gIGlmIChjYXJvdXNlbCkgeyBjb250YWluZXIuY2xhc3NOYW1lICs9ICcgdG5zLXZwZml4JzsgfVxuXG4gIC8vIGZpeGVkV2lkdGg6IHZpZXdwb3J0ID4gcmlnaHRCb3VuZGFyeSA+IGluZGV4TWF4XG4gIHZhciBhdXRvV2lkdGggPSBvcHRpb25zLmF1dG9XaWR0aCxcbiAgICAgIGZpeGVkV2lkdGggPSBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnKSxcbiAgICAgIGVkZ2VQYWRkaW5nID0gZ2V0T3B0aW9uKCdlZGdlUGFkZGluZycpLFxuICAgICAgZ3V0dGVyID0gZ2V0T3B0aW9uKCdndXR0ZXInKSxcbiAgICAgIHZpZXdwb3J0ID0gZ2V0Vmlld3BvcnRXaWR0aCgpLFxuICAgICAgY2VudGVyID0gZ2V0T3B0aW9uKCdjZW50ZXInKSxcbiAgICAgIGl0ZW1zID0gIWF1dG9XaWR0aCA/IE1hdGguZmxvb3IoZ2V0T3B0aW9uKCdpdGVtcycpKSA6IDEsXG4gICAgICBzbGlkZUJ5ID0gZ2V0T3B0aW9uKCdzbGlkZUJ5JyksXG4gICAgICB2aWV3cG9ydE1heCA9IG9wdGlvbnMudmlld3BvcnRNYXggfHwgb3B0aW9ucy5maXhlZFdpZHRoVmlld3BvcnRXaWR0aCxcbiAgICAgIGFycm93S2V5cyA9IGdldE9wdGlvbignYXJyb3dLZXlzJyksXG4gICAgICBzcGVlZCA9IGdldE9wdGlvbignc3BlZWQnKSxcbiAgICAgIHJld2luZCA9IG9wdGlvbnMucmV3aW5kLFxuICAgICAgbG9vcCA9IHJld2luZCA/IGZhbHNlIDogb3B0aW9ucy5sb29wLFxuICAgICAgYXV0b0hlaWdodCA9IGdldE9wdGlvbignYXV0b0hlaWdodCcpLFxuICAgICAgY29udHJvbHMgPSBnZXRPcHRpb24oJ2NvbnRyb2xzJyksXG4gICAgICBjb250cm9sc1RleHQgPSBnZXRPcHRpb24oJ2NvbnRyb2xzVGV4dCcpLFxuICAgICAgbmF2ID0gZ2V0T3B0aW9uKCduYXYnKSxcbiAgICAgIHRvdWNoID0gZ2V0T3B0aW9uKCd0b3VjaCcpLFxuICAgICAgbW91c2VEcmFnID0gZ2V0T3B0aW9uKCdtb3VzZURyYWcnKSxcbiAgICAgIGF1dG9wbGF5ID0gZ2V0T3B0aW9uKCdhdXRvcGxheScpLFxuICAgICAgYXV0b3BsYXlUaW1lb3V0ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVRpbWVvdXQnKSxcbiAgICAgIGF1dG9wbGF5VGV4dCA9IGdldE9wdGlvbignYXV0b3BsYXlUZXh0JyksXG4gICAgICBhdXRvcGxheUhvdmVyUGF1c2UgPSBnZXRPcHRpb24oJ2F1dG9wbGF5SG92ZXJQYXVzZScpLFxuICAgICAgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGdldE9wdGlvbignYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eScpLFxuICAgICAgc2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KCksXG4gICAgICBsYXp5bG9hZCA9IG9wdGlvbnMubGF6eWxvYWQsXG4gICAgICBsYXp5bG9hZFNlbGVjdG9yID0gb3B0aW9ucy5sYXp5bG9hZFNlbGVjdG9yLFxuICAgICAgc2xpZGVQb3NpdGlvbnMsIC8vIGNvbGxlY3Rpb24gb2Ygc2xpZGUgcG9zaXRpb25zXG4gICAgICBzbGlkZUl0ZW1zT3V0ID0gW10sXG4gICAgICBjbG9uZUNvdW50ID0gbG9vcCA/IGdldENsb25lQ291bnRGb3JMb29wKCkgOiAwLFxuICAgICAgc2xpZGVDb3VudE5ldyA9ICFjYXJvdXNlbCA/IHNsaWRlQ291bnQgKyBjbG9uZUNvdW50IDogc2xpZGVDb3VudCArIGNsb25lQ291bnQgKiAyLFxuICAgICAgaGFzUmlnaHREZWFkWm9uZSA9IChmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCkgJiYgIWxvb3AgPyB0cnVlIDogZmFsc2UsXG4gICAgICByaWdodEJvdW5kYXJ5ID0gZml4ZWRXaWR0aCA/IGdldFJpZ2h0Qm91bmRhcnkoKSA6IG51bGwsXG4gICAgICB1cGRhdGVJbmRleEJlZm9yZVRyYW5zZm9ybSA9ICghY2Fyb3VzZWwgfHwgIWxvb3ApID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgLy8gdHJhbnNmb3JtXG4gICAgICB0cmFuc2Zvcm1BdHRyID0gaG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnLFxuICAgICAgdHJhbnNmb3JtUHJlZml4ID0gJycsXG4gICAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gJycsXG4gICAgICAvLyBpbmRleFxuICAgICAgZ2V0SW5kZXhNYXggPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZml4ZWRXaWR0aCkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIGNlbnRlciAmJiAhbG9vcCA/IHNsaWRlQ291bnQgLSAxIDogTWF0aC5jZWlsKC0gcmlnaHRCb3VuZGFyeSAvIChmaXhlZFdpZHRoICsgZ3V0dGVyKSk7IH07XG4gICAgICAgIH0gZWxzZSBpZiAoYXV0b1dpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHNsaWRlQ291bnROZXc7IGktLTspIHtcbiAgICAgICAgICAgICAgaWYgKHNsaWRlUG9zaXRpb25zW2ldID49IC0gcmlnaHRCb3VuZGFyeSkgeyByZXR1cm4gaTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNlbnRlciAmJiBjYXJvdXNlbCAmJiAhbG9vcCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbG9vcCB8fCBjYXJvdXNlbCA/IE1hdGgubWF4KDAsIHNsaWRlQ291bnROZXcgLSBNYXRoLmNlaWwoaXRlbXMpKSA6IHNsaWRlQ291bnROZXcgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pKCksXG4gICAgICBpbmRleCA9IGdldFN0YXJ0SW5kZXgoZ2V0T3B0aW9uKCdzdGFydEluZGV4JykpLFxuICAgICAgaW5kZXhDYWNoZWQgPSBpbmRleCxcbiAgICAgIGRpc3BsYXlJbmRleCA9IGdldEN1cnJlbnRTbGlkZSgpLFxuICAgICAgaW5kZXhNaW4gPSAwLFxuICAgICAgaW5kZXhNYXggPSAhYXV0b1dpZHRoID8gZ2V0SW5kZXhNYXgoKSA6IG51bGwsXG4gICAgICAvLyByZXNpemVcbiAgICAgIHJlc2l6ZVRpbWVyLFxuICAgICAgcHJldmVudEFjdGlvbldoZW5SdW5uaW5nID0gb3B0aW9ucy5wcmV2ZW50QWN0aW9uV2hlblJ1bm5pbmcsXG4gICAgICBzd2lwZUFuZ2xlID0gb3B0aW9ucy5zd2lwZUFuZ2xlLFxuICAgICAgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gc3dpcGVBbmdsZSA/ICc/JyA6IHRydWUsXG4gICAgICBydW5uaW5nID0gZmFsc2UsXG4gICAgICBvbkluaXQgPSBvcHRpb25zLm9uSW5pdCxcbiAgICAgIGV2ZW50cyA9IG5ldyBFdmVudHMoKSxcbiAgICAgIC8vIGlkLCBjbGFzc1xuICAgICAgbmV3Q29udGFpbmVyQ2xhc3NlcyA9ICcgdG5zLXNsaWRlciB0bnMtJyArIG9wdGlvbnMubW9kZSxcbiAgICAgIHNsaWRlSWQgPSBjb250YWluZXIuaWQgfHwgZ2V0U2xpZGVJZCgpLFxuICAgICAgZGlzYWJsZSA9IGdldE9wdGlvbignZGlzYWJsZScpLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgIGZyZWV6YWJsZSA9IG9wdGlvbnMuZnJlZXphYmxlLFxuICAgICAgZnJlZXplID0gZnJlZXphYmxlICYmICFhdXRvV2lkdGggPyBnZXRGcmVlemUoKSA6IGZhbHNlLFxuICAgICAgZnJvemVuID0gZmFsc2UsXG4gICAgICBjb250cm9sc0V2ZW50cyA9IHtcbiAgICAgICAgJ2NsaWNrJzogb25Db250cm9sc0NsaWNrLFxuICAgICAgICAna2V5ZG93bic6IG9uQ29udHJvbHNLZXlkb3duXG4gICAgICB9LFxuICAgICAgbmF2RXZlbnRzID0ge1xuICAgICAgICAnY2xpY2snOiBvbk5hdkNsaWNrLFxuICAgICAgICAna2V5ZG93bic6IG9uTmF2S2V5ZG93blxuICAgICAgfSxcbiAgICAgIGhvdmVyRXZlbnRzID0ge1xuICAgICAgICAnbW91c2VvdmVyJzogbW91c2VvdmVyUGF1c2UsXG4gICAgICAgICdtb3VzZW91dCc6IG1vdXNlb3V0UmVzdGFydFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHlFdmVudCA9IHsndmlzaWJpbGl0eWNoYW5nZSc6IG9uVmlzaWJpbGl0eUNoYW5nZX0sXG4gICAgICBkb2NtZW50S2V5ZG93bkV2ZW50ID0geydrZXlkb3duJzogb25Eb2N1bWVudEtleWRvd259LFxuICAgICAgdG91Y2hFdmVudHMgPSB7XG4gICAgICAgICd0b3VjaHN0YXJ0Jzogb25QYW5TdGFydCxcbiAgICAgICAgJ3RvdWNobW92ZSc6IG9uUGFuTW92ZSxcbiAgICAgICAgJ3RvdWNoZW5kJzogb25QYW5FbmQsXG4gICAgICAgICd0b3VjaGNhbmNlbCc6IG9uUGFuRW5kXG4gICAgICB9LCBkcmFnRXZlbnRzID0ge1xuICAgICAgICAnbW91c2Vkb3duJzogb25QYW5TdGFydCxcbiAgICAgICAgJ21vdXNlbW92ZSc6IG9uUGFuTW92ZSxcbiAgICAgICAgJ21vdXNldXAnOiBvblBhbkVuZCxcbiAgICAgICAgJ21vdXNlbGVhdmUnOiBvblBhbkVuZFxuICAgICAgfSxcbiAgICAgIGhhc0NvbnRyb2xzID0gaGFzT3B0aW9uKCdjb250cm9scycpLFxuICAgICAgaGFzTmF2ID0gaGFzT3B0aW9uKCduYXYnKSxcbiAgICAgIG5hdkFzVGh1bWJuYWlscyA9IGF1dG9XaWR0aCA/IHRydWUgOiBvcHRpb25zLm5hdkFzVGh1bWJuYWlscyxcbiAgICAgIGhhc0F1dG9wbGF5ID0gaGFzT3B0aW9uKCdhdXRvcGxheScpLFxuICAgICAgaGFzVG91Y2ggPSBoYXNPcHRpb24oJ3RvdWNoJyksXG4gICAgICBoYXNNb3VzZURyYWcgPSBoYXNPcHRpb24oJ21vdXNlRHJhZycpLFxuICAgICAgc2xpZGVBY3RpdmVDbGFzcyA9ICd0bnMtc2xpZGUtYWN0aXZlJyxcbiAgICAgIGltZ0NvbXBsZXRlQ2xhc3MgPSAndG5zLWNvbXBsZXRlJyxcbiAgICAgIGltZ0V2ZW50cyA9IHtcbiAgICAgICAgJ2xvYWQnOiBvbkltZ0xvYWRlZCxcbiAgICAgICAgJ2Vycm9yJzogb25JbWdGYWlsZWRcbiAgICAgIH0sXG4gICAgICBpbWdzQ29tcGxldGUsXG4gICAgICBsaXZlcmVnaW9uQ3VycmVudCxcbiAgICAgIHByZXZlbnRTY3JvbGwgPSBvcHRpb25zLnByZXZlbnRTY3JvbGxPblRvdWNoID09PSAnZm9yY2UnID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIC8vIGNvbnRyb2xzXG4gIGlmIChoYXNDb250cm9scykge1xuICAgIHZhciBjb250cm9sc0NvbnRhaW5lciA9IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIsXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVySFRNTCA9IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIgPyBvcHRpb25zLmNvbnRyb2xzQ29udGFpbmVyLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBwcmV2QnV0dG9uID0gb3B0aW9ucy5wcmV2QnV0dG9uLFxuICAgICAgICBuZXh0QnV0dG9uID0gb3B0aW9ucy5uZXh0QnV0dG9uLFxuICAgICAgICBwcmV2QnV0dG9uSFRNTCA9IG9wdGlvbnMucHJldkJ1dHRvbiA/IG9wdGlvbnMucHJldkJ1dHRvbi5vdXRlckhUTUwgOiAnJyxcbiAgICAgICAgbmV4dEJ1dHRvbkhUTUwgPSBvcHRpb25zLm5leHRCdXR0b24gPyBvcHRpb25zLm5leHRCdXR0b24ub3V0ZXJIVE1MIDogJycsXG4gICAgICAgIHByZXZJc0J1dHRvbixcbiAgICAgICAgbmV4dElzQnV0dG9uO1xuICB9XG5cbiAgLy8gbmF2XG4gIGlmIChoYXNOYXYpIHtcbiAgICB2YXIgbmF2Q29udGFpbmVyID0gb3B0aW9ucy5uYXZDb250YWluZXIsXG4gICAgICAgIG5hdkNvbnRhaW5lckhUTUwgPSBvcHRpb25zLm5hdkNvbnRhaW5lciA/IG9wdGlvbnMubmF2Q29udGFpbmVyLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBuYXZJdGVtcyxcbiAgICAgICAgcGFnZXMgPSBhdXRvV2lkdGggPyBzbGlkZUNvdW50IDogZ2V0UGFnZXMoKSxcbiAgICAgICAgcGFnZXNDYWNoZWQgPSAwLFxuICAgICAgICBuYXZDbGlja2VkID0gLTEsXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnROYXZJbmRleCgpLFxuICAgICAgICBuYXZDdXJyZW50SW5kZXhDYWNoZWQgPSBuYXZDdXJyZW50SW5kZXgsXG4gICAgICAgIG5hdkFjdGl2ZUNsYXNzID0gJ3Rucy1uYXYtYWN0aXZlJyxcbiAgICAgICAgbmF2U3RyID0gJ0Nhcm91c2VsIFBhZ2UgJyxcbiAgICAgICAgbmF2U3RyQ3VycmVudCA9ICcgKEN1cnJlbnQgU2xpZGUpJztcbiAgfVxuXG4gIC8vIGF1dG9wbGF5XG4gIGlmIChoYXNBdXRvcGxheSkge1xuICAgIHZhciBhdXRvcGxheURpcmVjdGlvbiA9IG9wdGlvbnMuYXV0b3BsYXlEaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IDEgOiAtMSxcbiAgICAgICAgYXV0b3BsYXlCdXR0b24gPSBvcHRpb25zLmF1dG9wbGF5QnV0dG9uLFxuICAgICAgICBhdXRvcGxheUJ1dHRvbkhUTUwgPSBvcHRpb25zLmF1dG9wbGF5QnV0dG9uID8gb3B0aW9ucy5hdXRvcGxheUJ1dHRvbi5vdXRlckhUTUwgOiAnJyxcbiAgICAgICAgYXV0b3BsYXlIdG1sU3RyaW5ncyA9IFsnPHNwYW4gY2xhc3M9XFwndG5zLXZpc3VhbGx5LWhpZGRlblxcJz4nLCAnIGFuaW1hdGlvbjwvc3Bhbj4nXSxcbiAgICAgICAgYXV0b3BsYXlUaW1lcixcbiAgICAgICAgYW5pbWF0aW5nLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2VkLFxuICAgICAgICBhdXRvcGxheVVzZXJQYXVzZWQsXG4gICAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZDtcbiAgfVxuXG4gIGlmIChoYXNUb3VjaCB8fCBoYXNNb3VzZURyYWcpIHtcbiAgICB2YXIgaW5pdFBvc2l0aW9uID0ge30sXG4gICAgICAgIGxhc3RQb3NpdGlvbiA9IHt9LFxuICAgICAgICB0cmFuc2xhdGVJbml0LFxuICAgICAgICBkaXNYLFxuICAgICAgICBkaXNZLFxuICAgICAgICBwYW5TdGFydCA9IGZhbHNlLFxuICAgICAgICByYWZJbmRleCxcbiAgICAgICAgZ2V0RGlzdCA9IGhvcml6b250YWwgPyBcbiAgICAgICAgICBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhLnggLSBiLng7IH0gOlxuICAgICAgICAgIGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEueSAtIGIueTsgfTtcbiAgfVxuICBcbiAgLy8gZGlzYWJsZSBzbGlkZXIgd2hlbiBzbGlkZWNvdW50IDw9IGl0ZW1zXG4gIGlmICghYXV0b1dpZHRoKSB7IHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlIHx8IGZyZWV6ZSk7IH1cblxuICBpZiAoVFJBTlNGT1JNKSB7XG4gICAgdHJhbnNmb3JtQXR0ciA9IFRSQU5TRk9STTtcbiAgICB0cmFuc2Zvcm1QcmVmaXggPSAndHJhbnNsYXRlJztcblxuICAgIGlmIChIQVMzRFRSQU5TRk9STVMpIHtcbiAgICAgIHRyYW5zZm9ybVByZWZpeCArPSBob3Jpem9udGFsID8gJzNkKCcgOiAnM2QoMHB4LCAnO1xuICAgICAgdHJhbnNmb3JtUG9zdGZpeCA9IGhvcml6b250YWwgPyAnLCAwcHgsIDBweCknIDogJywgMHB4KSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybVByZWZpeCArPSBob3Jpem9udGFsID8gJ1goJyA6ICdZKCc7XG4gICAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gJyknO1xuICAgIH1cblxuICB9XG5cbiAgaWYgKGNhcm91c2VsKSB7IGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoJ3Rucy12cGZpeCcsICcnKTsgfVxuICBpbml0U3RydWN0dXJlKCk7XG4gIGluaXRTaGVldCgpO1xuICBpbml0U2xpZGVyVHJhbnNmb3JtKCk7XG5cbiAgLy8gPT09IENPTU1PTiBGVU5DVElPTlMgPT09IC8vXG4gIGZ1bmN0aW9uIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZSAoY29uZGl0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgY29udHJvbHMgPSBuYXYgPSB0b3VjaCA9IG1vdXNlRHJhZyA9IGFycm93S2V5cyA9IGF1dG9wbGF5ID0gYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZSAoKSB7XG4gICAgdmFyIHRlbSA9IGNhcm91c2VsID8gaW5kZXggLSBjbG9uZUNvdW50IDogaW5kZXg7XG4gICAgd2hpbGUgKHRlbSA8IDApIHsgdGVtICs9IHNsaWRlQ291bnQ7IH1cbiAgICByZXR1cm4gdGVtJXNsaWRlQ291bnQgKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RhcnRJbmRleCAoaW5kKSB7XG4gICAgaW5kID0gaW5kID8gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9vcCA/IHNsaWRlQ291bnQgLSAxIDogc2xpZGVDb3VudCAtIGl0ZW1zLCBpbmQpKSA6IDA7XG4gICAgcmV0dXJuIGNhcm91c2VsID8gaW5kICsgY2xvbmVDb3VudCA6IGluZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFic0luZGV4IChpKSB7XG4gICAgaWYgKGkgPT0gbnVsbCkgeyBpID0gaW5kZXg7IH1cblxuICAgIGlmIChjYXJvdXNlbCkgeyBpIC09IGNsb25lQ291bnQ7IH1cbiAgICB3aGlsZSAoaSA8IDApIHsgaSArPSBzbGlkZUNvdW50OyB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihpJXNsaWRlQ291bnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudE5hdkluZGV4ICgpIHtcbiAgICB2YXIgYWJzSW5kZXggPSBnZXRBYnNJbmRleCgpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICByZXN1bHQgPSBuYXZBc1RodW1ibmFpbHMgPyBhYnNJbmRleCA6IFxuICAgICAgZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGggPyBNYXRoLmNlaWwoKGFic0luZGV4ICsgMSkgKiBwYWdlcyAvIHNsaWRlQ291bnQgLSAxKSA6IFxuICAgICAgICAgIE1hdGguZmxvb3IoYWJzSW5kZXggLyBpdGVtcyk7XG5cbiAgICAvLyBzZXQgYWN0aXZlIG5hdiB0byB0aGUgbGFzdCBvbmUgd2hlbiByZWFjaGVzIHRoZSByaWdodCBlZGdlXG4gICAgaWYgKCFsb29wICYmIGNhcm91c2VsICYmIGluZGV4ID09PSBpbmRleE1heCkgeyByZXN1bHQgPSBwYWdlcyAtIDE7IH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVtc01heCAoKSB7XG4gICAgLy8gZml4ZWRXaWR0aCBvciBhdXRvV2lkdGggd2hpbGUgdmlld3BvcnRNYXggaXMgbm90IGF2YWlsYWJsZVxuICAgIGlmIChhdXRvV2lkdGggfHwgKGZpeGVkV2lkdGggJiYgIXZpZXdwb3J0TWF4KSkge1xuICAgICAgcmV0dXJuIHNsaWRlQ291bnQgLSAxO1xuICAgIC8vIG1vc3QgY2FzZXNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0ciA9IGZpeGVkV2lkdGggPyAnZml4ZWRXaWR0aCcgOiAnaXRlbXMnLFxuICAgICAgICAgIGFyciA9IFtdO1xuXG4gICAgICBpZiAoZml4ZWRXaWR0aCB8fCBvcHRpb25zW3N0cl0gPCBzbGlkZUNvdW50KSB7IGFyci5wdXNoKG9wdGlvbnNbc3RyXSk7IH1cblxuICAgICAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgICAgZm9yICh2YXIgYnAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgICAgIHZhciB0ZW0gPSByZXNwb25zaXZlW2JwXVtzdHJdO1xuICAgICAgICAgIGlmICh0ZW0gJiYgKGZpeGVkV2lkdGggfHwgdGVtIDwgc2xpZGVDb3VudCkpIHsgYXJyLnB1c2godGVtKTsgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXJyLmxlbmd0aCkgeyBhcnIucHVzaCgwKTsgfVxuXG4gICAgICByZXR1cm4gTWF0aC5jZWlsKGZpeGVkV2lkdGggPyB2aWV3cG9ydE1heCAvIE1hdGgubWluLmFwcGx5KG51bGwsIGFycikgOiBNYXRoLm1heC5hcHBseShudWxsLCBhcnIpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbG9uZUNvdW50Rm9yTG9vcCAoKSB7XG4gICAgdmFyIGl0ZW1zTWF4ID0gZ2V0SXRlbXNNYXgoKSxcbiAgICAgICAgcmVzdWx0ID0gY2Fyb3VzZWwgPyBNYXRoLmNlaWwoKGl0ZW1zTWF4ICogNSAtIHNsaWRlQ291bnQpLzIpIDogKGl0ZW1zTWF4ICogNCAtIHNsaWRlQ291bnQpO1xuICAgIHJlc3VsdCA9IE1hdGgubWF4KGl0ZW1zTWF4LCByZXN1bHQpO1xuXG4gICAgcmV0dXJuIGhhc09wdGlvbignZWRnZVBhZGRpbmcnKSA/IHJlc3VsdCArIDEgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dXaWR0aCAoKSB7XG4gICAgcmV0dXJuIHdpbi5pbm5lcldpZHRoIHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jLmJvZHkuY2xpZW50V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbnNlcnRQb3NpdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIHBvcyA9PT0gJ3RvcCcgPyAnYWZ0ZXJiZWdpbicgOiAnYmVmb3JlZW5kJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsaWVudFdpZHRoIChlbCkge1xuICAgIHZhciBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksIHJlY3QsIHdpZHRoO1xuICAgIGVsLmFwcGVuZENoaWxkKGRpdik7XG4gICAgcmVjdCA9IGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB3aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gICAgZGl2LnJlbW92ZSgpO1xuICAgIHJldHVybiB3aWR0aCB8fCBnZXRDbGllbnRXaWR0aChlbC5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZXdwb3J0V2lkdGggKCkge1xuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGVkZ2VQYWRkaW5nICogMiAtIGd1dHRlciA6IDA7XG4gICAgcmV0dXJuIGdldENsaWVudFdpZHRoKGNvbnRhaW5lclBhcmVudCkgLSBnYXA7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNPcHRpb24gKGl0ZW0pIHtcbiAgICBpZiAob3B0aW9uc1tpdGVtXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2l2ZVticF1baXRlbV0pIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldCBvcHRpb246XG4gIC8vIGZpeGVkIHdpZHRoOiB2aWV3cG9ydCwgZml4ZWRXaWR0aCwgZ3V0dGVyID0+IGl0ZW1zXG4gIC8vIG90aGVyczogd2luZG93IHdpZHRoID0+IGFsbCB2YXJpYWJsZXNcbiAgLy8gYWxsOiBpdGVtcyA9PiBzbGlkZUJ5XG4gIGZ1bmN0aW9uIGdldE9wdGlvbiAoaXRlbSwgd3cpIHtcbiAgICBpZiAod3cgPT0gbnVsbCkgeyB3dyA9IHdpbmRvd1dpZHRoOyB9XG5cbiAgICBpZiAoaXRlbSA9PT0gJ2l0ZW1zJyAmJiBmaXhlZFdpZHRoKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodmlld3BvcnQgKyBndXR0ZXIpIC8gKGZpeGVkV2lkdGggKyBndXR0ZXIpKSB8fCAxO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSBvcHRpb25zW2l0ZW1dO1xuXG4gICAgICBpZiAocmVzcG9uc2l2ZSkge1xuICAgICAgICBmb3IgKHZhciBicCBpbiByZXNwb25zaXZlKSB7XG4gICAgICAgICAgLy8gYnA6IGNvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxuICAgICAgICAgIGlmICh3dyA+PSBwYXJzZUludChicCkpIHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluIHJlc3BvbnNpdmVbYnBdKSB7IHJlc3VsdCA9IHJlc3BvbnNpdmVbYnBdW2l0ZW1dOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtID09PSAnc2xpZGVCeScgJiYgcmVzdWx0ID09PSAncGFnZScpIHsgcmVzdWx0ID0gZ2V0T3B0aW9uKCdpdGVtcycpOyB9XG4gICAgICBpZiAoIWNhcm91c2VsICYmIChpdGVtID09PSAnc2xpZGVCeScgfHwgaXRlbSA9PT0gJ2l0ZW1zJykpIHsgcmVzdWx0ID0gTWF0aC5mbG9vcihyZXN1bHQpOyB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVNYXJnaW5MZWZ0IChpKSB7XG4gICAgcmV0dXJuIENBTEMgPyBcbiAgICAgIENBTEMgKyAnKCcgKyBpICogMTAwICsgJyUgLyAnICsgc2xpZGVDb3VudE5ldyArICcpJyA6IFxuICAgICAgaSAqIDEwMCAvIHNsaWRlQ291bnROZXcgKyAnJSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbm5lcldyYXBwZXJTdHlsZXMgKGVkZ2VQYWRkaW5nVGVtLCBndXR0ZXJUZW0sIGZpeGVkV2lkdGhUZW0sIHNwZWVkVGVtLCBhdXRvSGVpZ2h0QlApIHtcbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICBpZiAoZWRnZVBhZGRpbmdUZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGdhcCA9IGVkZ2VQYWRkaW5nVGVtO1xuICAgICAgaWYgKGd1dHRlclRlbSkgeyBnYXAgLT0gZ3V0dGVyVGVtOyB9XG4gICAgICBzdHIgPSBob3Jpem9udGFsID9cbiAgICAgICAgJ21hcmdpbjogMCAnICsgZ2FwICsgJ3B4IDAgJyArIGVkZ2VQYWRkaW5nVGVtICsgJ3B4OycgOlxuICAgICAgICAnbWFyZ2luOiAnICsgZWRnZVBhZGRpbmdUZW0gKyAncHggMCAnICsgZ2FwICsgJ3B4IDA7JztcbiAgICB9IGVsc2UgaWYgKGd1dHRlclRlbSAmJiAhZml4ZWRXaWR0aFRlbSkge1xuICAgICAgdmFyIGd1dHRlclRlbVVuaXQgPSAnLScgKyBndXR0ZXJUZW0gKyAncHgnLFxuICAgICAgICAgIGRpciA9IGhvcml6b250YWwgPyBndXR0ZXJUZW1Vbml0ICsgJyAwIDAnIDogJzAgJyArIGd1dHRlclRlbVVuaXQgKyAnIDAnO1xuICAgICAgc3RyID0gJ21hcmdpbjogMCAnICsgZGlyICsgJzsnXG4gICAgfVxuXG4gICAgaWYgKCFjYXJvdXNlbCAmJiBhdXRvSGVpZ2h0QlAgJiYgVFJBTlNJVElPTkRVUkFUSU9OICYmIHNwZWVkVGVtKSB7IHN0ciArPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShzcGVlZFRlbSk7IH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmVyV2lkdGggKGZpeGVkV2lkdGhUZW0sIGd1dHRlclRlbSwgaXRlbXNUZW0pIHtcbiAgICBpZiAoZml4ZWRXaWR0aFRlbSkge1xuICAgICAgcmV0dXJuIChmaXhlZFdpZHRoVGVtICsgZ3V0dGVyVGVtKSAqIHNsaWRlQ291bnROZXcgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ0FMQyA/XG4gICAgICAgIENBTEMgKyAnKCcgKyBzbGlkZUNvdW50TmV3ICogMTAwICsgJyUgLyAnICsgaXRlbXNUZW0gKyAnKScgOlxuICAgICAgICBzbGlkZUNvdW50TmV3ICogMTAwIC8gaXRlbXNUZW0gKyAnJSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVXaWR0aFN0eWxlIChmaXhlZFdpZHRoVGVtLCBndXR0ZXJUZW0sIGl0ZW1zVGVtKSB7XG4gICAgdmFyIHdpZHRoO1xuXG4gICAgaWYgKGZpeGVkV2lkdGhUZW0pIHtcbiAgICAgIHdpZHRoID0gKGZpeGVkV2lkdGhUZW0gKyBndXR0ZXJUZW0pICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjYXJvdXNlbCkgeyBpdGVtc1RlbSA9IE1hdGguZmxvb3IoaXRlbXNUZW0pOyB9XG4gICAgICB2YXIgZGl2aWRlbmQgPSBjYXJvdXNlbCA/IHNsaWRlQ291bnROZXcgOiBpdGVtc1RlbTtcbiAgICAgIHdpZHRoID0gQ0FMQyA/IFxuICAgICAgICBDQUxDICsgJygxMDAlIC8gJyArIGRpdmlkZW5kICsgJyknIDogXG4gICAgICAgIDEwMCAvIGRpdmlkZW5kICsgJyUnO1xuICAgIH1cblxuICAgIHdpZHRoID0gJ3dpZHRoOicgKyB3aWR0aDtcblxuICAgIC8vIGlubmVyIHNsaWRlcjogb3ZlcndyaXRlIG91dGVyIHNsaWRlciBzdHlsZXNcbiAgICByZXR1cm4gbmVzdGVkICE9PSAnaW5uZXInID8gd2lkdGggKyAnOycgOiB3aWR0aCArICcgIWltcG9ydGFudDsnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVHdXR0ZXJTdHlsZSAoZ3V0dGVyVGVtKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgLy8gZ3V0dGVyIG1heWJlIGludGVyZ2VyIHx8IDBcbiAgICAvLyBzbyBjYW4ndCB1c2UgJ2lmIChndXR0ZXIpJ1xuICAgIGlmIChndXR0ZXJUZW0gIT09IGZhbHNlKSB7XG4gICAgICB2YXIgcHJvcCA9IGhvcml6b250YWwgPyAncGFkZGluZy0nIDogJ21hcmdpbi0nLFxuICAgICAgICAgIGRpciA9IGhvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gICAgICBzdHIgPSBwcm9wICsgIGRpciArICc6ICcgKyBndXR0ZXJUZW0gKyAncHg7JztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q1NTUHJlZml4IChuYW1lLCBudW0pIHtcbiAgICB2YXIgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSBudW0pLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHByZWZpeCkgeyBwcmVmaXggPSAnLScgKyBwcmVmaXggKyAnLSc7IH1cblxuICAgIHJldHVybiBwcmVmaXg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZSAoc3BlZWQpIHtcbiAgICByZXR1cm4gZ2V0Q1NTUHJlZml4KFRSQU5TSVRJT05EVVJBVElPTiwgMTgpICsgJ3RyYW5zaXRpb24tZHVyYXRpb246JyArIHNwZWVkIC8gMTAwMCArICdzOyc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbmltYXRpb25EdXJhdGlvblN0eWxlIChzcGVlZCkge1xuICAgIHJldHVybiBnZXRDU1NQcmVmaXgoQU5JTUFUSU9ORFVSQVRJT04sIDE3KSArICdhbmltYXRpb24tZHVyYXRpb246JyArIHNwZWVkIC8gMTAwMCArICdzOyc7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U3RydWN0dXJlICgpIHtcbiAgICB2YXIgY2xhc3NPdXRlciA9ICd0bnMtb3V0ZXInLFxuICAgICAgICBjbGFzc0lubmVyID0gJ3Rucy1pbm5lcicsXG4gICAgICAgIGhhc0d1dHRlciA9IGhhc09wdGlvbignZ3V0dGVyJyk7XG5cbiAgICBvdXRlcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NPdXRlcjtcbiAgICBpbm5lcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NJbm5lcjtcbiAgICBvdXRlcldyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1vdyc7XG4gICAgaW5uZXJXcmFwcGVyLmlkID0gc2xpZGVJZCArICctaXcnO1xuXG4gICAgLy8gc2V0IGNvbnRhaW5lciBwcm9wZXJ0aWVzXG4gICAgaWYgKGNvbnRhaW5lci5pZCA9PT0gJycpIHsgY29udGFpbmVyLmlkID0gc2xpZGVJZDsgfVxuICAgIG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gUEVSQ0VOVEFHRUxBWU9VVCB8fCBhdXRvV2lkdGggPyAnIHRucy1zdWJwaXhlbCcgOiAnIHRucy1uby1zdWJwaXhlbCc7XG4gICAgbmV3Q29udGFpbmVyQ2xhc3NlcyArPSBDQUxDID8gJyB0bnMtY2FsYycgOiAnIHRucy1uby1jYWxjJztcbiAgICBpZiAoYXV0b1dpZHRoKSB7IG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gJyB0bnMtYXV0b3dpZHRoJzsgfVxuICAgIG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gJyB0bnMtJyArIG9wdGlvbnMuYXhpcztcbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IG5ld0NvbnRhaW5lckNsYXNzZXM7XG5cbiAgICAvLyBhZGQgY29uc3RyYWluIGxheWVyIGZvciBjYXJvdXNlbFxuICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgbWlkZGxlV3JhcHBlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVdyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1tdyc7XG4gICAgICBtaWRkbGVXcmFwcGVyLmNsYXNzTmFtZSA9ICd0bnMtb3ZoJztcblxuICAgICAgb3V0ZXJXcmFwcGVyLmFwcGVuZENoaWxkKG1pZGRsZVdyYXBwZXIpO1xuICAgICAgbWlkZGxlV3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcldyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgdmFyIHdwID0gbWlkZGxlV3JhcHBlciA/IG1pZGRsZVdyYXBwZXIgOiBpbm5lcldyYXBwZXI7XG4gICAgICB3cC5jbGFzc05hbWUgKz0gJyB0bnMtYWgnO1xuICAgIH1cblxuICAgIGNvbnRhaW5lclBhcmVudC5pbnNlcnRCZWZvcmUob3V0ZXJXcmFwcGVyLCBjb250YWluZXIpO1xuICAgIGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gYWRkIGlkLCBjbGFzcywgYXJpYSBhdHRyaWJ1dGVzIFxuICAgIC8vIGJlZm9yZSBjbG9uZSBzbGlkZXNcbiAgICBmb3JFYWNoKHNsaWRlSXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgIGFkZENsYXNzKGl0ZW0sICd0bnMtaXRlbScpO1xuICAgICAgaWYgKCFpdGVtLmlkKSB7IGl0ZW0uaWQgPSBzbGlkZUlkICsgJy1pdGVtJyArIGk7IH1cbiAgICAgIGlmICghY2Fyb3VzZWwgJiYgYW5pbWF0ZU5vcm1hbCkgeyBhZGRDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTsgfVxuICAgICAgc2V0QXR0cnMoaXRlbSwge1xuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gIyMgY2xvbmUgc2xpZGVzXG4gICAgLy8gY2Fyb3VzZWw6IG4gKyBzbGlkZXMgKyBuXG4gICAgLy8gZ2FsbGVyeTogICAgICBzbGlkZXMgKyBuXG4gICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBmcmFnbWVudEJlZm9yZSA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIFxuICAgICAgICAgIGZyYWdtZW50QWZ0ZXIgPSBkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICBmb3IgKHZhciBqID0gY2xvbmVDb3VudDsgai0tOykge1xuICAgICAgICB2YXIgbnVtID0gaiVzbGlkZUNvdW50LFxuICAgICAgICAgICAgY2xvbmVGaXJzdCA9IHNsaWRlSXRlbXNbbnVtXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHJlbW92ZUF0dHJzKGNsb25lRmlyc3QsICdpZCcpO1xuICAgICAgICBmcmFnbWVudEFmdGVyLmluc2VydEJlZm9yZShjbG9uZUZpcnN0LCBmcmFnbWVudEFmdGVyLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgICAgIHZhciBjbG9uZUxhc3QgPSBzbGlkZUl0ZW1zW3NsaWRlQ291bnQgLSAxIC0gbnVtXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgcmVtb3ZlQXR0cnMoY2xvbmVMYXN0LCAnaWQnKTtcbiAgICAgICAgICBmcmFnbWVudEJlZm9yZS5hcHBlbmRDaGlsZChjbG9uZUxhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZnJhZ21lbnRCZWZvcmUsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudEFmdGVyKTtcbiAgICAgIHNsaWRlSXRlbXMgPSBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtICgpIHtcbiAgICAvLyAjIyBpbWFnZXMgbG9hZGVkL2ZhaWxlZFxuICAgIGlmIChoYXNPcHRpb24oJ2F1dG9IZWlnaHQnKSB8fCBhdXRvV2lkdGggfHwgIWhvcml6b250YWwpIHtcbiAgICAgIHZhciBpbWdzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuXG4gICAgICAvLyBhZGQgY29tcGxldGUgY2xhc3MgaWYgYWxsIGltYWdlcyBhcmUgbG9hZGVkL2ZhaWxlZFxuICAgICAgZm9yRWFjaChpbWdzLCBmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgdmFyIHNyYyA9IGltZy5zcmM7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3JjICYmIHNyYy5pbmRleE9mKCdkYXRhOmltYWdlJykgPCAwKSB7XG4gICAgICAgICAgYWRkRXZlbnRzKGltZywgaW1nRXZlbnRzKTtcbiAgICAgICAgICBpbWcuc3JjID0gJyc7XG4gICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICBhZGRDbGFzcyhpbWcsICdsb2FkaW5nJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWxhenlsb2FkKSB7XG4gICAgICAgICAgaW1nTG9hZGVkKGltZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBbGwgaW1ncyBhcmUgY29tcGxldGVkXG4gICAgICByYWYoZnVuY3Rpb24oKXsgaW1nc0xvYWRlZENoZWNrKGFycmF5RnJvbU5vZGVMaXN0KGltZ3MpLCBmdW5jdGlvbigpIHsgaW1nc0NvbXBsZXRlID0gdHJ1ZTsgfSk7IH0pO1xuXG4gICAgICAvLyBDaGVjayBpbWdzIGluIHdpbmRvdyBvbmx5IGZvciBhdXRvIGhlaWdodFxuICAgICAgaWYgKCFhdXRvV2lkdGggJiYgaG9yaXpvbnRhbCkgeyBpbWdzID0gZ2V0SW1hZ2VBcnJheShpbmRleCwgTWF0aC5taW4oaW5kZXggKyBpdGVtcyAtIDEsIHNsaWRlQ291bnROZXcgLSAxKSk7IH1cblxuICAgICAgbGF6eWxvYWQgPyBpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjaygpIDogcmFmKGZ1bmN0aW9uKCl7IGltZ3NMb2FkZWRDaGVjayhhcnJheUZyb21Ob2RlTGlzdChpbWdzKSwgaW5pdFNsaWRlclRyYW5zZm9ybVN0eWxlQ2hlY2spOyB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgY29udGFpbmVyIHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgICAgaWYgKGNhcm91c2VsKSB7IGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7IH1cblxuICAgICAgLy8gdXBkYXRlIHNsaWRlciB0b29scyBhbmQgZXZlbnRzXG4gICAgICBpbml0VG9vbHMoKTtcbiAgICAgIGluaXRFdmVudHMoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjayAoKSB7XG4gICAgaWYgKGF1dG9XaWR0aCkge1xuICAgICAgLy8gY2hlY2sgc3R5bGVzIGFwcGxpY2F0aW9uXG4gICAgICB2YXIgbnVtID0gbG9vcCA/IGluZGV4IDogc2xpZGVDb3VudCAtIDE7XG4gICAgICAoZnVuY3Rpb24gc3R5bGVzQXBwbGljYXRpb25DaGVjaygpIHtcbiAgICAgICAgc2xpZGVJdGVtc1tudW0gLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodC50b0ZpeGVkKDIpID09PSBzbGlkZUl0ZW1zW251bV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC50b0ZpeGVkKDIpID9cbiAgICAgICAgaW5pdFNsaWRlclRyYW5zZm9ybUNvcmUoKSA6XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgc3R5bGVzQXBwbGljYXRpb25DaGVjaygpIH0sIDE2KTtcbiAgICAgIH0pKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRTbGlkZXJUcmFuc2Zvcm1Db3JlKCk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtQ29yZSAoKSB7XG4gICAgLy8gcnVuIEZuKClzIHdoaWNoIGFyZSByZWx5IG9uIGltYWdlIGxvYWRpbmdcbiAgICBpZiAoIWhvcml6b250YWwgfHwgYXV0b1dpZHRoKSB7XG4gICAgICBzZXRTbGlkZVBvc2l0aW9ucygpO1xuXG4gICAgICBpZiAoYXV0b1dpZHRoKSB7XG4gICAgICAgIHJpZ2h0Qm91bmRhcnkgPSBnZXRSaWdodEJvdW5kYXJ5KCk7XG4gICAgICAgIGlmIChmcmVlemFibGUpIHsgZnJlZXplID0gZ2V0RnJlZXplKCk7IH1cbiAgICAgICAgaW5kZXhNYXggPSBnZXRJbmRleE1heCgpOyAvLyA8PSBzbGlkZVBvc2l0aW9ucywgcmlnaHRCb3VuZGFyeSA8PVxuICAgICAgICByZXNldFZhcmlibGVzV2hlbkRpc2FibGUoZGlzYWJsZSB8fCBmcmVlemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ29udGVudFdyYXBwZXJIZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgY29udGFpbmVyIHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgIGlmIChjYXJvdXNlbCkgeyBkb0NvbnRhaW5lclRyYW5zZm9ybVNpbGVudCgpOyB9XG5cbiAgICAvLyB1cGRhdGUgc2xpZGVyIHRvb2xzIGFuZCBldmVudHNcbiAgICBpbml0VG9vbHMoKTtcbiAgICBpbml0RXZlbnRzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2hlZXQgKCkge1xuICAgIC8vIGdhbGxlcnk6XG4gICAgLy8gc2V0IGFuaW1hdGlvbiBjbGFzc2VzIGFuZCBsZWZ0IHZhbHVlIGZvciBnYWxsZXJ5IHNsaWRlclxuICAgIGlmICghY2Fyb3VzZWwpIHsgXG4gICAgICBmb3IgKHZhciBpID0gaW5kZXgsIGwgPSBpbmRleCArIE1hdGgubWluKHNsaWRlQ291bnQsIGl0ZW1zKTsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV07XG4gICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVJbik7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vICMjIyMgTEFZT1VUXG5cbiAgICAvLyAjIyBJTkxJTkUtQkxPQ0sgVlMgRkxPQVRcblxuICAgIC8vICMjIFBlcmNlbnRhZ2VMYXlvdXQ6XG4gICAgLy8gc2xpZGVzOiBpbmxpbmUtYmxvY2tcbiAgICAvLyByZW1vdmUgYmxhbmsgc3BhY2UgYmV0d2VlbiBzbGlkZXMgYnkgc2V0IGZvbnQtc2l6ZTogMFxuXG4gICAgLy8gIyMgTm9uIFBlcmNlbnRhZ2VMYXlvdXQ6XG4gICAgLy8gc2xpZGVzOiBmbG9hdFxuICAgIC8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTAwJVxuICAgIC8vICAgICAgICAgbWFyZ2luLWxlZnQ6IH5cblxuICAgIC8vIFJlc291cmNlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xNDd1cDI0NXd3VFhlUVl2ZTNCUlNBRDRvVmN2UW11R3NGdGVKT2VBNXhOUS9lZGl0P3VzcD1zaGFyaW5nXG4gICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgIGlmIChQRVJDRU5UQUdFTEFZT1VUIHx8IGF1dG9XaWR0aCkge1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbScsICdmb250LXNpemU6JyArIHdpbi5nZXRDb21wdXRlZFN0eWxlKHNsaWRlSXRlbXNbMF0pLmZvbnRTaXplICsgJzsnLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkLCAnZm9udC1zaXplOjA7JywgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgIH0gZWxzZSBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgZm9yRWFjaChzbGlkZUl0ZW1zLCBmdW5jdGlvbiAoc2xpZGUsIGkpIHtcbiAgICAgICAgICBzbGlkZS5zdHlsZS5tYXJnaW5MZWZ0ID0gZ2V0U2xpZGVNYXJnaW5MZWZ0KGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vICMjIEJBU0lDIFNUWUxFU1xuICAgIGlmIChDU1NNUSkge1xuICAgICAgLy8gbWlkZGxlIHdyYXBwZXIgc3R5bGVcbiAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHtcbiAgICAgICAgdmFyIHN0ciA9IG1pZGRsZVdyYXBwZXIgJiYgb3B0aW9ucy5hdXRvSGVpZ2h0ID8gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUob3B0aW9ucy5zcGVlZCkgOiAnJztcbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICctbXcnLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlubmVyIHdyYXBwZXIgc3R5bGVzXG4gICAgICBzdHIgPSBnZXRJbm5lcldyYXBwZXJTdHlsZXMob3B0aW9ucy5lZGdlUGFkZGluZywgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuZml4ZWRXaWR0aCwgb3B0aW9ucy5zcGVlZCwgb3B0aW9ucy5hdXRvSGVpZ2h0KTtcbiAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnLWl3Jywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuXG4gICAgICAvLyBjb250YWluZXIgc3R5bGVzXG4gICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgc3RyID0gaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoID8gJ3dpZHRoOicgKyBnZXRDb250YWluZXJXaWR0aChvcHRpb25zLmZpeGVkV2lkdGgsIG9wdGlvbnMuZ3V0dGVyLCBvcHRpb25zLml0ZW1zKSArICc7JyA6ICcnO1xuICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OKSB7IHN0ciArPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShzcGVlZCk7IH1cbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCwgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBzbGlkZSBzdHlsZXNcbiAgICAgIHN0ciA9IGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCA/IGdldFNsaWRlV2lkdGhTdHlsZShvcHRpb25zLmZpeGVkV2lkdGgsIG9wdGlvbnMuZ3V0dGVyLCBvcHRpb25zLml0ZW1zKSA6ICcnO1xuICAgICAgaWYgKG9wdGlvbnMuZ3V0dGVyKSB7IHN0ciArPSBnZXRTbGlkZUd1dHRlclN0eWxlKG9wdGlvbnMuZ3V0dGVyKTsgfVxuICAgICAgLy8gc2V0IGdhbGxlcnkgaXRlbXMgdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgaWYgKCFjYXJvdXNlbCkge1xuICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OKSB7IHN0ciArPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShzcGVlZCk7IH1cbiAgICAgICAgaWYgKEFOSU1BVElPTkRVUkFUSU9OKSB7IHN0ciArPSBnZXRBbmltYXRpb25EdXJhdGlvblN0eWxlKHNwZWVkKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHN0cikgeyBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbScsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTsgfVxuXG4gICAgLy8gbm9uIENTUyBtZWRpYXF1ZXJpZXM6IElFOFxuICAgIC8vICMjIHVwZGF0ZSBpbm5lciB3cmFwcGVyLCBjb250YWluZXIsIHNsaWRlcyBpZiBuZWVkZWRcbiAgICAvLyBzZXQgaW5saW5lIHN0eWxlcyBmb3IgaW5uZXIgd3JhcHBlciAmIGNvbnRhaW5lclxuICAgIC8vIGluc2VydCBzdHlsZXNoZWV0IChvbmUgbGluZSkgZm9yIHNsaWRlcyBvbmx5IChzaW5jZSBzbGlkZXMgYXJlIG1hbnkpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1pZGRsZSB3cmFwcGVyIHN0eWxlc1xuICAgICAgdXBkYXRlX2Nhcm91c2VsX3RyYW5zaXRpb25fZHVyYXRpb24oKTtcblxuICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHlsZXNcbiAgICAgIGlubmVyV3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKGVkZ2VQYWRkaW5nLCBndXR0ZXIsIGZpeGVkV2lkdGgsIGF1dG9IZWlnaHQpO1xuXG4gICAgICAvLyBjb250YWluZXIgc3R5bGVzXG4gICAgICBpZiAoY2Fyb3VzZWwgJiYgaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGdldENvbnRhaW5lcldpZHRoKGZpeGVkV2lkdGgsIGd1dHRlciwgaXRlbXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBzbGlkZSBzdHlsZXNcbiAgICAgIHZhciBzdHIgPSBob3Jpem9udGFsICYmICFhdXRvV2lkdGggPyBnZXRTbGlkZVdpZHRoU3R5bGUoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcykgOiAnJztcbiAgICAgIGlmIChndXR0ZXIpIHsgc3RyICs9IGdldFNsaWRlR3V0dGVyU3R5bGUoZ3V0dGVyKTsgfVxuXG4gICAgICAvLyBhcHBlbmQgdG8gdGhlIGxhc3QgbGluZVxuICAgICAgaWYgKHN0cikgeyBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbScsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTsgfVxuICAgIH1cblxuICAgIC8vICMjIE1FRElBUVVFUklFU1xuICAgIGlmIChyZXNwb25zaXZlICYmIENTU01RKSB7XG4gICAgICBmb3IgKHZhciBicCBpbiByZXNwb25zaXZlKSB7XG4gICAgICAgIC8vIGJwOiBjb252ZXJ0IHN0cmluZyB0byBudW1iZXJcbiAgICAgICAgYnAgPSBwYXJzZUludChicCk7XG5cbiAgICAgICAgdmFyIG9wdHMgPSByZXNwb25zaXZlW2JwXSxcbiAgICAgICAgICAgIHN0ciA9ICcnLFxuICAgICAgICAgICAgbWlkZGxlV3JhcHBlclN0ciA9ICcnLFxuICAgICAgICAgICAgaW5uZXJXcmFwcGVyU3RyID0gJycsXG4gICAgICAgICAgICBjb250YWluZXJTdHIgPSAnJyxcbiAgICAgICAgICAgIHNsaWRlU3RyID0gJycsXG4gICAgICAgICAgICBpdGVtc0JQID0gIWF1dG9XaWR0aCA/IGdldE9wdGlvbignaXRlbXMnLCBicCkgOiBudWxsLFxuICAgICAgICAgICAgZml4ZWRXaWR0aEJQID0gZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJywgYnApLFxuICAgICAgICAgICAgc3BlZWRCUCA9IGdldE9wdGlvbignc3BlZWQnLCBicCksXG4gICAgICAgICAgICBlZGdlUGFkZGluZ0JQID0gZ2V0T3B0aW9uKCdlZGdlUGFkZGluZycsIGJwKSxcbiAgICAgICAgICAgIGF1dG9IZWlnaHRCUCA9IGdldE9wdGlvbignYXV0b0hlaWdodCcsIGJwKSxcbiAgICAgICAgICAgIGd1dHRlckJQID0gZ2V0T3B0aW9uKCdndXR0ZXInLCBicCk7XG5cbiAgICAgICAgLy8gbWlkZGxlIHdyYXBwZXIgc3RyaW5nXG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04gJiYgbWlkZGxlV3JhcHBlciAmJiBnZXRPcHRpb24oJ2F1dG9IZWlnaHQnLCBicCkgJiYgJ3NwZWVkJyBpbiBvcHRzKSB7XG4gICAgICAgICAgbWlkZGxlV3JhcHBlclN0ciA9ICcjJyArIHNsaWRlSWQgKyAnLW13eycgKyBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShzcGVlZEJQKSArICd9JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlubmVyIHdyYXBwZXIgc3RyaW5nXG4gICAgICAgIGlmICgnZWRnZVBhZGRpbmcnIGluIG9wdHMgfHwgJ2d1dHRlcicgaW4gb3B0cykge1xuICAgICAgICAgIGlubmVyV3JhcHBlclN0ciA9ICcjJyArIHNsaWRlSWQgKyAnLWl3eycgKyBnZXRJbm5lcldyYXBwZXJTdHlsZXMoZWRnZVBhZGRpbmdCUCwgZ3V0dGVyQlAsIGZpeGVkV2lkdGhCUCwgc3BlZWRCUCwgYXV0b0hlaWdodEJQKSArICd9JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnRhaW5lciBzdHJpbmdcbiAgICAgICAgaWYgKGNhcm91c2VsICYmIGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCAmJiAoJ2ZpeGVkV2lkdGgnIGluIG9wdHMgfHwgJ2l0ZW1zJyBpbiBvcHRzIHx8IChmaXhlZFdpZHRoICYmICdndXR0ZXInIGluIG9wdHMpKSkge1xuICAgICAgICAgIGNvbnRhaW5lclN0ciA9ICd3aWR0aDonICsgZ2V0Q29udGFpbmVyV2lkdGgoZml4ZWRXaWR0aEJQLCBndXR0ZXJCUCwgaXRlbXNCUCkgKyAnOyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTiAmJiAnc3BlZWQnIGluIG9wdHMpIHtcbiAgICAgICAgICBjb250YWluZXJTdHIgKz0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWRCUCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRhaW5lclN0cikge1xuICAgICAgICAgIGNvbnRhaW5lclN0ciA9ICcjJyArIHNsaWRlSWQgKyAneycgKyBjb250YWluZXJTdHIgKyAnfSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzbGlkZSBzdHJpbmdcbiAgICAgICAgaWYgKCdmaXhlZFdpZHRoJyBpbiBvcHRzIHx8IChmaXhlZFdpZHRoICYmICdndXR0ZXInIGluIG9wdHMpIHx8ICFjYXJvdXNlbCAmJiAnaXRlbXMnIGluIG9wdHMpIHtcbiAgICAgICAgICBzbGlkZVN0ciArPSBnZXRTbGlkZVdpZHRoU3R5bGUoZml4ZWRXaWR0aEJQLCBndXR0ZXJCUCwgaXRlbXNCUCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdndXR0ZXInIGluIG9wdHMpIHtcbiAgICAgICAgICBzbGlkZVN0ciArPSBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlckJQKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZ2FsbGVyeSBpdGVtcyB0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICAgIGlmICghY2Fyb3VzZWwgJiYgJ3NwZWVkJyBpbiBvcHRzKSB7XG4gICAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBzbGlkZVN0ciArPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShzcGVlZEJQKTsgfVxuICAgICAgICAgIGlmIChBTklNQVRJT05EVVJBVElPTikgeyBzbGlkZVN0ciArPSBnZXRBbmltYXRpb25EdXJhdGlvblN0eWxlKHNwZWVkQlApOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNsaWRlU3RyKSB7IHNsaWRlU3RyID0gJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW17JyArIHNsaWRlU3RyICsgJ30nOyB9XG5cbiAgICAgICAgLy8gYWRkIHVwXG4gICAgICAgIHN0ciA9IG1pZGRsZVdyYXBwZXJTdHIgKyBpbm5lcldyYXBwZXJTdHIgKyBjb250YWluZXJTdHIgKyBzbGlkZVN0cjtcblxuICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZSgnQG1lZGlhIChtaW4td2lkdGg6ICcgKyBicCAvIDE2ICsgJ2VtKSB7JyArIHN0ciArICd9Jywgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRUb29scyAoKSB7XG4gICAgLy8gPT0gc2xpZGVzID09XG4gICAgdXBkYXRlU2xpZGVTdGF0dXMoKTtcblxuICAgIC8vID09IGxpdmUgcmVnaW9uID09XG4gICAgb3V0ZXJXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsICc8ZGl2IGNsYXNzPVwidG5zLWxpdmVyZWdpb24gdG5zLXZpc3VhbGx5LWhpZGRlblwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPnNsaWRlIDxzcGFuIGNsYXNzPVwiY3VycmVudFwiPicgKyBnZXRMaXZlUmVnaW9uU3RyKCkgKyAnPC9zcGFuPiAgb2YgJyArIHNsaWRlQ291bnQgKyAnPC9kaXY+Jyk7XG4gICAgbGl2ZXJlZ2lvbkN1cnJlbnQgPSBvdXRlcldyYXBwZXIucXVlcnlTZWxlY3RvcignLnRucy1saXZlcmVnaW9uIC5jdXJyZW50Jyk7XG5cbiAgICAvLyA9PSBhdXRvcGxheUluaXQgPT1cbiAgICBpZiAoaGFzQXV0b3BsYXkpIHtcbiAgICAgIHZhciB0eHQgPSBhdXRvcGxheSA/ICdzdG9wJyA6ICdzdGFydCc7XG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHtcbiAgICAgICAgc2V0QXR0cnMoYXV0b3BsYXlCdXR0b24sIHsnZGF0YS1hY3Rpb24nOiB0eHR9KTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5hdXRvcGxheUJ1dHRvbk91dHB1dCkge1xuICAgICAgICBvdXRlcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKGdldEluc2VydFBvc2l0aW9uKG9wdGlvbnMuYXV0b3BsYXlQb3NpdGlvbiksICc8YnV0dG9uIGRhdGEtYWN0aW9uPVwiJyArIHR4dCArICdcIj4nICsgYXV0b3BsYXlIdG1sU3RyaW5nc1swXSArIHR4dCArIGF1dG9wbGF5SHRtbFN0cmluZ3NbMV0gKyBhdXRvcGxheVRleHRbMF0gKyAnPC9idXR0b24+Jyk7XG4gICAgICAgIGF1dG9wbGF5QnV0dG9uID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbl0nKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGV2ZW50XG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHtcbiAgICAgICAgYWRkRXZlbnRzKGF1dG9wbGF5QnV0dG9uLCB7J2NsaWNrJzogdG9nZ2xlQXV0b3BsYXl9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZSkgeyBhZGRFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7IH1cbiAgICAgICAgaWYgKGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgdmlzaWJpbGl0eUV2ZW50KTsgfVxuICAgICAgfVxuICAgIH1cbiBcbiAgICAvLyA9PSBuYXZJbml0ID09XG4gICAgaWYgKGhhc05hdikge1xuICAgICAgdmFyIGluaXRJbmRleCA9ICFjYXJvdXNlbCA/IDAgOiBjbG9uZUNvdW50O1xuICAgICAgLy8gY3VzdG9taXplZCBuYXZcbiAgICAgIC8vIHdpbGwgbm90IGhpZGUgdGhlIG5hdnMgaW4gY2FzZSB0aGV5J3JlIHRodW1ibmFpbHNcbiAgICAgIGlmIChuYXZDb250YWluZXIpIHtcbiAgICAgICAgc2V0QXR0cnMobmF2Q29udGFpbmVyLCB7J2FyaWEtbGFiZWwnOiAnQ2Fyb3VzZWwgUGFnaW5hdGlvbid9KTtcbiAgICAgICAgbmF2SXRlbXMgPSBuYXZDb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgIGZvckVhY2gobmF2SXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICBzZXRBdHRycyhpdGVtLCB7XG4gICAgICAgICAgICAnZGF0YS1uYXYnOiBpLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogbmF2U3RyICsgKGkgKyAxKSxcbiAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogc2xpZGVJZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGdlbmVyYXRlZCBuYXYgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmF2SHRtbCA9ICcnLFxuICAgICAgICAgICAgaGlkZGVuU3RyID0gbmF2QXNUaHVtYm5haWxzID8gJycgOiAnc3R5bGU9XCJkaXNwbGF5Om5vbmVcIic7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgLy8gaGlkZSBuYXYgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAgIG5hdkh0bWwgKz0gJzxidXR0b24gZGF0YS1uYXY9XCInICsgaSArJ1wiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHNsaWRlSWQgKyAnXCIgJyArIGhpZGRlblN0ciArICcgYXJpYS1sYWJlbD1cIicgKyBuYXZTdHIgKyAoaSArIDEpICsnXCI+PC9idXR0b24+JztcbiAgICAgICAgfVxuICAgICAgICBuYXZIdG1sID0gJzxkaXYgY2xhc3M9XCJ0bnMtbmF2XCIgYXJpYS1sYWJlbD1cIkNhcm91c2VsIFBhZ2luYXRpb25cIj4nICsgbmF2SHRtbCArICc8L2Rpdj4nO1xuICAgICAgICBvdXRlcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKGdldEluc2VydFBvc2l0aW9uKG9wdGlvbnMubmF2UG9zaXRpb24pLCBuYXZIdG1sKTtcblxuICAgICAgICBuYXZDb250YWluZXIgPSBvdXRlcldyYXBwZXIucXVlcnlTZWxlY3RvcignLnRucy1uYXYnKTtcbiAgICAgICAgbmF2SXRlbXMgPSBuYXZDb250YWluZXIuY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcblxuICAgICAgLy8gYWRkIHRyYW5zaXRpb25cbiAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IFRSQU5TSVRJT05EVVJBVElPTi5zdWJzdHJpbmcoMCwgVFJBTlNJVElPTkRVUkFUSU9OLmxlbmd0aCAtIDE4KS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgc3RyID0gJ3RyYW5zaXRpb246IGFsbCAnICsgc3BlZWQgLyAxMDAwICsgJ3MnO1xuXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICBzdHIgPSAnLScgKyBwcmVmaXggKyAnLScgKyBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnW2FyaWEtY29udHJvbHNePScgKyBzbGlkZUlkICsgJy1pdGVtXScsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgIH1cblxuICAgICAgc2V0QXR0cnMobmF2SXRlbXNbbmF2Q3VycmVudEluZGV4XSwgeydhcmlhLWxhYmVsJzogbmF2U3RyICsgKG5hdkN1cnJlbnRJbmRleCArIDEpICsgbmF2U3RyQ3VycmVudH0pO1xuICAgICAgcmVtb3ZlQXR0cnMobmF2SXRlbXNbbmF2Q3VycmVudEluZGV4XSwgJ3RhYmluZGV4Jyk7XG4gICAgICBhZGRDbGFzcyhuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdLCBuYXZBY3RpdmVDbGFzcyk7XG5cbiAgICAgIC8vIGFkZCBldmVudHNcbiAgICAgIGFkZEV2ZW50cyhuYXZDb250YWluZXIsIG5hdkV2ZW50cyk7XG4gICAgfVxuXG5cblxuICAgIC8vID09IGNvbnRyb2xzSW5pdCA9PVxuICAgIGlmIChoYXNDb250cm9scykge1xuICAgICAgaWYgKCFjb250cm9sc0NvbnRhaW5lciAmJiAoIXByZXZCdXR0b24gfHwgIW5leHRCdXR0b24pKSB7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoZ2V0SW5zZXJ0UG9zaXRpb24ob3B0aW9ucy5jb250cm9sc1Bvc2l0aW9uKSwgJzxkaXYgY2xhc3M9XCJ0bnMtY29udHJvbHNcIiBhcmlhLWxhYmVsPVwiQ2Fyb3VzZWwgTmF2aWdhdGlvblwiIHRhYmluZGV4PVwiMFwiPjxidXR0b24gZGF0YS1jb250cm9scz1cInByZXZcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1jb250cm9scz1cIicgKyBzbGlkZUlkICsnXCI+JyArIGNvbnRyb2xzVGV4dFswXSArICc8L2J1dHRvbj48YnV0dG9uIGRhdGEtY29udHJvbHM9XCJuZXh0XCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtY29udHJvbHM9XCInICsgc2xpZGVJZCArJ1wiPicgKyBjb250cm9sc1RleHRbMV0gKyAnPC9idXR0b24+PC9kaXY+Jyk7XG5cbiAgICAgICAgY29udHJvbHNDb250YWluZXIgPSBvdXRlcldyYXBwZXIucXVlcnlTZWxlY3RvcignLnRucy1jb250cm9scycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXByZXZCdXR0b24gfHwgIW5leHRCdXR0b24pIHtcbiAgICAgICAgcHJldkJ1dHRvbiA9IGNvbnRyb2xzQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICBuZXh0QnV0dG9uID0gY29udHJvbHNDb250YWluZXIuY2hpbGRyZW5bMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNvbnRyb2xzQ29udGFpbmVyKSB7XG4gICAgICAgIHNldEF0dHJzKGNvbnRyb2xzQ29udGFpbmVyLCB7XG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnQ2Fyb3VzZWwgTmF2aWdhdGlvbicsXG4gICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jb250cm9sc0NvbnRhaW5lciB8fCAob3B0aW9ucy5wcmV2QnV0dG9uICYmIG9wdGlvbnMubmV4dEJ1dHRvbikpIHtcbiAgICAgICAgc2V0QXR0cnMoW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLCB7XG4gICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBzbGlkZUlkLFxuICAgICAgICAgICd0YWJpbmRleCc6ICctMScsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAob3B0aW9ucy5jb250cm9sc0NvbnRhaW5lciB8fCAob3B0aW9ucy5wcmV2QnV0dG9uICYmIG9wdGlvbnMubmV4dEJ1dHRvbikpIHtcbiAgICAgICAgc2V0QXR0cnMocHJldkJ1dHRvbiwgeydkYXRhLWNvbnRyb2xzJyA6ICdwcmV2J30pO1xuICAgICAgICBzZXRBdHRycyhuZXh0QnV0dG9uLCB7J2RhdGEtY29udHJvbHMnIDogJ25leHQnfSk7XG4gICAgICB9XG5cbiAgICAgIHByZXZJc0J1dHRvbiA9IGlzQnV0dG9uKHByZXZCdXR0b24pO1xuICAgICAgbmV4dElzQnV0dG9uID0gaXNCdXR0b24obmV4dEJ1dHRvbik7XG5cbiAgICAgIHVwZGF0ZUNvbnRyb2xzU3RhdHVzKCk7XG5cbiAgICAgIC8vIGFkZCBldmVudHNcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBhZGRFdmVudHMoY29udHJvbHNDb250YWluZXIsIGNvbnRyb2xzRXZlbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZEV2ZW50cyhwcmV2QnV0dG9uLCBjb250cm9sc0V2ZW50cyk7XG4gICAgICAgIGFkZEV2ZW50cyhuZXh0QnV0dG9uLCBjb250cm9sc0V2ZW50cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaGlkZSB0b29scyBpZiBuZWVkZWRcbiAgICBkaXNhYmxlVUkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRFdmVudHMgKCkge1xuICAgIC8vIGFkZCBldmVudHNcbiAgICBpZiAoY2Fyb3VzZWwgJiYgVFJBTlNJVElPTkVORCkge1xuICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgZXZlW1RSQU5TSVRJT05FTkRdID0gb25UcmFuc2l0aW9uRW5kO1xuICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgZXZlKTtcbiAgICB9XG5cbiAgICBpZiAodG91Y2gpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMsIG9wdGlvbnMucHJldmVudFNjcm9sbE9uVG91Y2gpOyB9XG4gICAgaWYgKG1vdXNlRHJhZykgeyBhZGRFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTsgfVxuICAgIGlmIChhcnJvd0tleXMpIHsgYWRkRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7IH1cblxuICAgIGlmIChuZXN0ZWQgPT09ICdpbm5lcicpIHtcbiAgICAgIGV2ZW50cy5vbignb3V0ZXJSZXNpemVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNpemVUYXNrcygpO1xuICAgICAgICBldmVudHMuZW1pdCgnaW5uZXJMb2FkZWQnLCBpbmZvKCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChyZXNwb25zaXZlIHx8IGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoIHx8IGF1dG9IZWlnaHQgfHwgIWhvcml6b250YWwpIHtcbiAgICAgIGFkZEV2ZW50cyh3aW4sIHsncmVzaXplJzogb25SZXNpemV9KTtcbiAgICB9XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgaWYgKG5lc3RlZCA9PT0gJ291dGVyJykge1xuICAgICAgICBldmVudHMub24oJ2lubmVyTG9hZGVkJywgZG9BdXRvSGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAoIWRpc2FibGUpIHsgZG9BdXRvSGVpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICBkb0xhenlMb2FkKCk7XG4gICAgaWYgKGRpc2FibGUpIHsgZGlzYWJsZVNsaWRlcigpOyB9IGVsc2UgaWYgKGZyZWV6ZSkgeyBmcmVlemVTbGlkZXIoKTsgfVxuXG4gICAgZXZlbnRzLm9uKCdpbmRleENoYW5nZWQnLCBhZGRpdGlvbmFsVXBkYXRlcyk7XG4gICAgaWYgKG5lc3RlZCA9PT0gJ2lubmVyJykgeyBldmVudHMuZW1pdCgnaW5uZXJMb2FkZWQnLCBpbmZvKCkpOyB9XG4gICAgaWYgKHR5cGVvZiBvbkluaXQgPT09ICdmdW5jdGlvbicpIHsgb25Jbml0KGluZm8oKSk7IH1cbiAgICBpc09uID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIC8vIHNoZWV0XG4gICAgc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmIChzaGVldC5vd25lck5vZGUpIHsgc2hlZXQub3duZXJOb2RlLnJlbW92ZSgpOyB9XG5cbiAgICAvLyByZW1vdmUgd2luIGV2ZW50IGxpc3RlbmVyc1xuICAgIHJlbW92ZUV2ZW50cyh3aW4sIHsncmVzaXplJzogb25SZXNpemV9KTtcblxuICAgIC8vIGFycm93S2V5cywgY29udHJvbHMsIG5hdlxuICAgIGlmIChhcnJvd0tleXMpIHsgcmVtb3ZlRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7IH1cbiAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHsgcmVtb3ZlRXZlbnRzKGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0V2ZW50cyk7IH1cbiAgICBpZiAobmF2Q29udGFpbmVyKSB7IHJlbW92ZUV2ZW50cyhuYXZDb250YWluZXIsIG5hdkV2ZW50cyk7IH1cblxuICAgIC8vIGF1dG9wbGF5XG4gICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgaG92ZXJFdmVudHMpO1xuICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIHZpc2liaWxpdHlFdmVudCk7XG4gICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7IHJlbW92ZUV2ZW50cyhhdXRvcGxheUJ1dHRvbiwgeydjbGljayc6IHRvZ2dsZUF1dG9wbGF5fSk7IH1cbiAgICBpZiAoYXV0b3BsYXkpIHsgY2xlYXJJbnRlcnZhbChhdXRvcGxheVRpbWVyKTsgfVxuXG4gICAgLy8gY29udGFpbmVyXG4gICAgaWYgKGNhcm91c2VsICYmIFRSQU5TSVRJT05FTkQpIHtcbiAgICAgIHZhciBldmUgPSB7fTtcbiAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGV2ZSk7XG4gICAgfVxuICAgIGlmICh0b3VjaCkgeyByZW1vdmVFdmVudHMoY29udGFpbmVyLCB0b3VjaEV2ZW50cyk7IH1cbiAgICBpZiAobW91c2VEcmFnKSB7IHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpOyB9XG5cbiAgICAvLyBjYWNoZSBPYmplY3QgdmFsdWVzIGluIG9wdGlvbnMgJiYgcmVzZXQgSFRNTFxuICAgIHZhciBodG1sTGlzdCA9IFtjb250YWluZXJIVE1MLCBjb250cm9sc0NvbnRhaW5lckhUTUwsIHByZXZCdXR0b25IVE1MLCBuZXh0QnV0dG9uSFRNTCwgbmF2Q29udGFpbmVySFRNTCwgYXV0b3BsYXlCdXR0b25IVE1MXTtcblxuICAgIHRuc0xpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICB2YXIgZWwgPSBpdGVtID09PSAnY29udGFpbmVyJyA/IG91dGVyV3JhcHBlciA6IG9wdGlvbnNbaXRlbV07XG5cbiAgICAgIGlmICh0eXBlb2YgZWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBwcmV2RWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nID8gZWwucHJldmlvdXNFbGVtZW50U2libGluZyA6IGZhbHNlLFxuICAgICAgICAgICAgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICBlbC5vdXRlckhUTUwgPSBodG1sTGlzdFtpXTtcbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IHByZXZFbCA/IHByZXZFbC5uZXh0RWxlbWVudFNpYmxpbmcgOiBwYXJlbnRFbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy8gcmVzZXQgdmFyaWFibGVzXG4gICAgdG5zTGlzdCA9IGFuaW1hdGVJbiA9IGFuaW1hdGVPdXQgPSBhbmltYXRlRGVsYXkgPSBhbmltYXRlTm9ybWFsID0gaG9yaXpvbnRhbCA9IG91dGVyV3JhcHBlciA9IGlubmVyV3JhcHBlciA9IGNvbnRhaW5lciA9IGNvbnRhaW5lclBhcmVudCA9IGNvbnRhaW5lckhUTUwgPSBzbGlkZUl0ZW1zID0gc2xpZGVDb3VudCA9IGJyZWFrcG9pbnRab25lID0gd2luZG93V2lkdGggPSBhdXRvV2lkdGggPSBmaXhlZFdpZHRoID0gZWRnZVBhZGRpbmcgPSBndXR0ZXIgPSB2aWV3cG9ydCA9IGl0ZW1zID0gc2xpZGVCeSA9IHZpZXdwb3J0TWF4ID0gYXJyb3dLZXlzID0gc3BlZWQgPSByZXdpbmQgPSBsb29wID0gYXV0b0hlaWdodCA9IHNoZWV0ID0gbGF6eWxvYWQgPSBzbGlkZVBvc2l0aW9ucyA9IHNsaWRlSXRlbXNPdXQgPSBjbG9uZUNvdW50ID0gc2xpZGVDb3VudE5ldyA9IGhhc1JpZ2h0RGVhZFpvbmUgPSByaWdodEJvdW5kYXJ5ID0gdXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1BdHRyID0gdHJhbnNmb3JtUHJlZml4ID0gdHJhbnNmb3JtUG9zdGZpeCA9IGdldEluZGV4TWF4ID0gaW5kZXggPSBpbmRleENhY2hlZCA9IGluZGV4TWluID0gaW5kZXhNYXggPSByZXNpemVUaW1lciA9IHN3aXBlQW5nbGUgPSBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgPSBydW5uaW5nID0gb25Jbml0ID0gZXZlbnRzID0gbmV3Q29udGFpbmVyQ2xhc3NlcyA9IHNsaWRlSWQgPSBkaXNhYmxlID0gZGlzYWJsZWQgPSBmcmVlemFibGUgPSBmcmVlemUgPSBmcm96ZW4gPSBjb250cm9sc0V2ZW50cyA9IG5hdkV2ZW50cyA9IGhvdmVyRXZlbnRzID0gdmlzaWJpbGl0eUV2ZW50ID0gZG9jbWVudEtleWRvd25FdmVudCA9IHRvdWNoRXZlbnRzID0gZHJhZ0V2ZW50cyA9IGhhc0NvbnRyb2xzID0gaGFzTmF2ID0gbmF2QXNUaHVtYm5haWxzID0gaGFzQXV0b3BsYXkgPSBoYXNUb3VjaCA9IGhhc01vdXNlRHJhZyA9IHNsaWRlQWN0aXZlQ2xhc3MgPSBpbWdDb21wbGV0ZUNsYXNzID0gaW1nRXZlbnRzID0gaW1nc0NvbXBsZXRlID0gY29udHJvbHMgPSBjb250cm9sc1RleHQgPSBjb250cm9sc0NvbnRhaW5lciA9IGNvbnRyb2xzQ29udGFpbmVySFRNTCA9IHByZXZCdXR0b24gPSBuZXh0QnV0dG9uID0gcHJldklzQnV0dG9uID0gbmV4dElzQnV0dG9uID0gbmF2ID0gbmF2Q29udGFpbmVyID0gbmF2Q29udGFpbmVySFRNTCA9IG5hdkl0ZW1zID0gcGFnZXMgPSBwYWdlc0NhY2hlZCA9IG5hdkNsaWNrZWQgPSBuYXZDdXJyZW50SW5kZXggPSBuYXZDdXJyZW50SW5kZXhDYWNoZWQgPSBuYXZBY3RpdmVDbGFzcyA9IG5hdlN0ciA9IG5hdlN0ckN1cnJlbnQgPSBhdXRvcGxheSA9IGF1dG9wbGF5VGltZW91dCA9IGF1dG9wbGF5RGlyZWN0aW9uID0gYXV0b3BsYXlUZXh0ID0gYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlCdXR0b24gPSBhdXRvcGxheUJ1dHRvbkhUTUwgPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gYXV0b3BsYXlIdG1sU3RyaW5ncyA9IGF1dG9wbGF5VGltZXIgPSBhbmltYXRpbmcgPSBhdXRvcGxheUhvdmVyUGF1c2VkID0gYXV0b3BsYXlVc2VyUGF1c2VkID0gYXV0b3BsYXlWaXNpYmlsaXR5UGF1c2VkID0gaW5pdFBvc2l0aW9uID0gbGFzdFBvc2l0aW9uID0gdHJhbnNsYXRlSW5pdCA9IGRpc1ggPSBkaXNZID0gcGFuU3RhcnQgPSByYWZJbmRleCA9IGdldERpc3QgPSB0b3VjaCA9IG1vdXNlRHJhZyA9IG51bGw7XG4gICAgLy8gY2hlY2sgdmFyaWFibGVzXG4gICAgLy8gW2FuaW1hdGVJbiwgYW5pbWF0ZU91dCwgYW5pbWF0ZURlbGF5LCBhbmltYXRlTm9ybWFsLCBob3Jpem9udGFsLCBvdXRlcldyYXBwZXIsIGlubmVyV3JhcHBlciwgY29udGFpbmVyLCBjb250YWluZXJQYXJlbnQsIGNvbnRhaW5lckhUTUwsIHNsaWRlSXRlbXMsIHNsaWRlQ291bnQsIGJyZWFrcG9pbnRab25lLCB3aW5kb3dXaWR0aCwgYXV0b1dpZHRoLCBmaXhlZFdpZHRoLCBlZGdlUGFkZGluZywgZ3V0dGVyLCB2aWV3cG9ydCwgaXRlbXMsIHNsaWRlQnksIHZpZXdwb3J0TWF4LCBhcnJvd0tleXMsIHNwZWVkLCByZXdpbmQsIGxvb3AsIGF1dG9IZWlnaHQsIHNoZWV0LCBsYXp5bG9hZCwgc2xpZGVQb3NpdGlvbnMsIHNsaWRlSXRlbXNPdXQsIGNsb25lQ291bnQsIHNsaWRlQ291bnROZXcsIGhhc1JpZ2h0RGVhZFpvbmUsIHJpZ2h0Qm91bmRhcnksIHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtLCB0cmFuc2Zvcm1BdHRyLCB0cmFuc2Zvcm1QcmVmaXgsIHRyYW5zZm9ybVBvc3RmaXgsIGdldEluZGV4TWF4LCBpbmRleCwgaW5kZXhDYWNoZWQsIGluZGV4TWluLCBpbmRleE1heCwgcmVzaXplVGltZXIsIHN3aXBlQW5nbGUsIG1vdmVEaXJlY3Rpb25FeHBlY3RlZCwgcnVubmluZywgb25Jbml0LCBldmVudHMsIG5ld0NvbnRhaW5lckNsYXNzZXMsIHNsaWRlSWQsIGRpc2FibGUsIGRpc2FibGVkLCBmcmVlemFibGUsIGZyZWV6ZSwgZnJvemVuLCBjb250cm9sc0V2ZW50cywgbmF2RXZlbnRzLCBob3ZlckV2ZW50cywgdmlzaWJpbGl0eUV2ZW50LCBkb2NtZW50S2V5ZG93bkV2ZW50LCB0b3VjaEV2ZW50cywgZHJhZ0V2ZW50cywgaGFzQ29udHJvbHMsIGhhc05hdiwgbmF2QXNUaHVtYm5haWxzLCBoYXNBdXRvcGxheSwgaGFzVG91Y2gsIGhhc01vdXNlRHJhZywgc2xpZGVBY3RpdmVDbGFzcywgaW1nQ29tcGxldGVDbGFzcywgaW1nRXZlbnRzLCBpbWdzQ29tcGxldGUsIGNvbnRyb2xzLCBjb250cm9sc1RleHQsIGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0NvbnRhaW5lckhUTUwsIHByZXZCdXR0b24sIG5leHRCdXR0b24sIHByZXZJc0J1dHRvbiwgbmV4dElzQnV0dG9uLCBuYXYsIG5hdkNvbnRhaW5lciwgbmF2Q29udGFpbmVySFRNTCwgbmF2SXRlbXMsIHBhZ2VzLCBwYWdlc0NhY2hlZCwgbmF2Q2xpY2tlZCwgbmF2Q3VycmVudEluZGV4LCBuYXZDdXJyZW50SW5kZXhDYWNoZWQsIG5hdkFjdGl2ZUNsYXNzLCBuYXZTdHIsIG5hdlN0ckN1cnJlbnQsIGF1dG9wbGF5LCBhdXRvcGxheVRpbWVvdXQsIGF1dG9wbGF5RGlyZWN0aW9uLCBhdXRvcGxheVRleHQsIGF1dG9wbGF5SG92ZXJQYXVzZSwgYXV0b3BsYXlCdXR0b24sIGF1dG9wbGF5QnV0dG9uSFRNTCwgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSwgYXV0b3BsYXlIdG1sU3RyaW5ncywgYXV0b3BsYXlUaW1lciwgYW5pbWF0aW5nLCBhdXRvcGxheUhvdmVyUGF1c2VkLCBhdXRvcGxheVVzZXJQYXVzZWQsIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCwgaW5pdFBvc2l0aW9uLCBsYXN0UG9zaXRpb24sIHRyYW5zbGF0ZUluaXQsIGRpc1gsIGRpc1ksIHBhblN0YXJ0LCByYWZJbmRleCwgZ2V0RGlzdCwgdG91Y2gsIG1vdXNlRHJhZyBdLmZvckVhY2goZnVuY3Rpb24oaXRlbSkgeyBpZiAoaXRlbSAhPT0gbnVsbCkgeyBjb25zb2xlLmxvZyhpdGVtKTsgfSB9KTtcblxuICAgIGZvciAodmFyIGEgaW4gdGhpcykge1xuICAgICAgaWYgKGEgIT09ICdyZWJ1aWxkJykgeyB0aGlzW2FdID0gbnVsbDsgfVxuICAgIH1cbiAgICBpc09uID0gZmFsc2U7XG4gIH1cblxuLy8gPT09IE9OIFJFU0laRSA9PT1cbiAgLy8gcmVzcG9uc2l2ZSB8fCBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCB8fCAhaG9yaXpvbnRhbFxuICBmdW5jdGlvbiBvblJlc2l6ZSAoZSkge1xuICAgIHJhZihmdW5jdGlvbigpeyByZXNpemVUYXNrcyhnZXRFdmVudChlKSk7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplVGFza3MgKGUpIHtcbiAgICBpZiAoIWlzT24pIHsgcmV0dXJuOyB9XG4gICAgaWYgKG5lc3RlZCA9PT0gJ291dGVyJykgeyBldmVudHMuZW1pdCgnb3V0ZXJSZXNpemVkJywgaW5mbyhlKSk7IH1cbiAgICB3aW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCk7XG4gICAgdmFyIGJwQ2hhbmdlZCxcbiAgICAgICAgYnJlYWtwb2ludFpvbmVUZW0gPSBicmVha3BvaW50Wm9uZSxcbiAgICAgICAgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IGZhbHNlO1xuXG4gICAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgIHNldEJyZWFrcG9pbnRab25lKCk7XG4gICAgICBicENoYW5nZWQgPSBicmVha3BvaW50Wm9uZVRlbSAhPT0gYnJlYWtwb2ludFpvbmU7XG4gICAgICAvLyBpZiAoaGFzUmlnaHREZWFkWm9uZSkgeyBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTsgfSAvLyAqP1xuICAgICAgaWYgKGJwQ2hhbmdlZCkgeyBldmVudHMuZW1pdCgnbmV3QnJlYWtwb2ludFN0YXJ0JywgaW5mbyhlKSk7IH1cbiAgICB9XG5cbiAgICB2YXIgaW5kQ2hhbmdlZCxcbiAgICAgICAgaXRlbXNDaGFuZ2VkLFxuICAgICAgICBpdGVtc1RlbSA9IGl0ZW1zLFxuICAgICAgICBkaXNhYmxlVGVtID0gZGlzYWJsZSxcbiAgICAgICAgZnJlZXplVGVtID0gZnJlZXplLFxuICAgICAgICBhcnJvd0tleXNUZW0gPSBhcnJvd0tleXMsXG4gICAgICAgIGNvbnRyb2xzVGVtID0gY29udHJvbHMsXG4gICAgICAgIG5hdlRlbSA9IG5hdixcbiAgICAgICAgdG91Y2hUZW0gPSB0b3VjaCxcbiAgICAgICAgbW91c2VEcmFnVGVtID0gbW91c2VEcmFnLFxuICAgICAgICBhdXRvcGxheVRlbSA9IGF1dG9wbGF5LFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2VUZW0gPSBhdXRvcGxheUhvdmVyUGF1c2UsXG4gICAgICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHlUZW0gPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5LFxuICAgICAgICBpbmRleFRlbSA9IGluZGV4O1xuXG4gICAgaWYgKGJwQ2hhbmdlZCkge1xuICAgICAgdmFyIGZpeGVkV2lkdGhUZW0gPSBmaXhlZFdpZHRoLFxuICAgICAgICAgIGF1dG9IZWlnaHRUZW0gPSBhdXRvSGVpZ2h0LFxuICAgICAgICAgIGNvbnRyb2xzVGV4dFRlbSA9IGNvbnRyb2xzVGV4dCxcbiAgICAgICAgICBjZW50ZXJUZW0gPSBjZW50ZXIsXG4gICAgICAgICAgYXV0b3BsYXlUZXh0VGVtID0gYXV0b3BsYXlUZXh0O1xuXG4gICAgICBpZiAoIUNTU01RKSB7XG4gICAgICAgIHZhciBndXR0ZXJUZW0gPSBndXR0ZXIsXG4gICAgICAgICAgICBlZGdlUGFkZGluZ1RlbSA9IGVkZ2VQYWRkaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBvcHRpb246XG4gICAgLy8gZml4ZWQgd2lkdGg6IHZpZXdwb3J0LCBmaXhlZFdpZHRoLCBndXR0ZXIgPT4gaXRlbXNcbiAgICAvLyBvdGhlcnM6IHdpbmRvdyB3aWR0aCA9PiBhbGwgdmFyaWFibGVzXG4gICAgLy8gYWxsOiBpdGVtcyA9PiBzbGlkZUJ5XG4gICAgYXJyb3dLZXlzID0gZ2V0T3B0aW9uKCdhcnJvd0tleXMnKTtcbiAgICBjb250cm9scyA9IGdldE9wdGlvbignY29udHJvbHMnKTtcbiAgICBuYXYgPSBnZXRPcHRpb24oJ25hdicpO1xuICAgIHRvdWNoID0gZ2V0T3B0aW9uKCd0b3VjaCcpO1xuICAgIGNlbnRlciA9IGdldE9wdGlvbignY2VudGVyJyk7XG4gICAgbW91c2VEcmFnID0gZ2V0T3B0aW9uKCdtb3VzZURyYWcnKTtcbiAgICBhdXRvcGxheSA9IGdldE9wdGlvbignYXV0b3BsYXknKTtcbiAgICBhdXRvcGxheUhvdmVyUGF1c2UgPSBnZXRPcHRpb24oJ2F1dG9wbGF5SG92ZXJQYXVzZScpO1xuICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5UmVzZXRPblZpc2liaWxpdHknKTtcblxuICAgIGlmIChicENoYW5nZWQpIHtcbiAgICAgIGRpc2FibGUgPSBnZXRPcHRpb24oJ2Rpc2FibGUnKTtcbiAgICAgIGZpeGVkV2lkdGggPSBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnKTtcbiAgICAgIHNwZWVkID0gZ2V0T3B0aW9uKCdzcGVlZCcpO1xuICAgICAgYXV0b0hlaWdodCA9IGdldE9wdGlvbignYXV0b0hlaWdodCcpO1xuICAgICAgY29udHJvbHNUZXh0ID0gZ2V0T3B0aW9uKCdjb250cm9sc1RleHQnKTtcbiAgICAgIGF1dG9wbGF5VGV4dCA9IGdldE9wdGlvbignYXV0b3BsYXlUZXh0Jyk7XG4gICAgICBhdXRvcGxheVRpbWVvdXQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGltZW91dCcpO1xuXG4gICAgICBpZiAoIUNTU01RKSB7XG4gICAgICAgIGVkZ2VQYWRkaW5nID0gZ2V0T3B0aW9uKCdlZGdlUGFkZGluZycpO1xuICAgICAgICBndXR0ZXIgPSBnZXRPcHRpb24oJ2d1dHRlcicpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgb3B0aW9uc1xuICAgIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlKTtcblxuICAgIHZpZXdwb3J0ID0gZ2V0Vmlld3BvcnRXaWR0aCgpOyAvLyA8PSBlZGdlUGFkZGluZywgZ3V0dGVyXG4gICAgaWYgKCghaG9yaXpvbnRhbCB8fCBhdXRvV2lkdGgpICYmICFkaXNhYmxlKSB7XG4gICAgICBzZXRTbGlkZVBvc2l0aW9ucygpO1xuICAgICAgaWYgKCFob3Jpem9udGFsKSB7XG4gICAgICAgIHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7IC8vIDw9IHNldFNsaWRlUG9zaXRpb25zXG4gICAgICAgIG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpIHtcbiAgICAgIHJpZ2h0Qm91bmRhcnkgPSBnZXRSaWdodEJvdW5kYXJ5KCk7IC8vIGF1dG9XaWR0aDogPD0gdmlld3BvcnQsIHNsaWRlUG9zaXRpb25zLCBndXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpeGVkV2lkdGg6IDw9IHZpZXdwb3J0LCBmaXhlZFdpZHRoLCBndXR0ZXJcbiAgICAgIGluZGV4TWF4ID0gZ2V0SW5kZXhNYXgoKTsgLy8gYXV0b1dpZHRoOiA8PSByaWdodEJvdW5kYXJ5LCBzbGlkZVBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXhlZFdpZHRoOiA8PSByaWdodEJvdW5kYXJ5LCBmaXhlZFdpZHRoLCBndXR0ZXJcbiAgICB9XG5cbiAgICBpZiAoYnBDaGFuZ2VkIHx8IGZpeGVkV2lkdGgpIHtcbiAgICAgIGl0ZW1zID0gZ2V0T3B0aW9uKCdpdGVtcycpO1xuICAgICAgc2xpZGVCeSA9IGdldE9wdGlvbignc2xpZGVCeScpO1xuICAgICAgaXRlbXNDaGFuZ2VkID0gaXRlbXMgIT09IGl0ZW1zVGVtO1xuXG4gICAgICBpZiAoaXRlbXNDaGFuZ2VkKSB7XG4gICAgICAgIGlmICghZml4ZWRXaWR0aCAmJiAhYXV0b1dpZHRoKSB7IGluZGV4TWF4ID0gZ2V0SW5kZXhNYXgoKTsgfSAvLyA8PSBpdGVtc1xuICAgICAgICAvLyBjaGVjayBpbmRleCBiZWZvcmUgdHJhbnNmb3JtIGluIGNhc2VcbiAgICAgICAgLy8gc2xpZGVyIHJlYWNoIHRoZSByaWdodCBlZGdlIHRoZW4gaXRlbXMgYmVjb21lIGJpZ2dlclxuICAgICAgICB1cGRhdGVJbmRleCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoYnBDaGFuZ2VkKSB7XG4gICAgICBpZiAoZGlzYWJsZSAhPT0gZGlzYWJsZVRlbSkge1xuICAgICAgICBpZiAoZGlzYWJsZSkge1xuICAgICAgICAgIGRpc2FibGVTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmFibGVTbGlkZXIoKTsgLy8gPD0gc2xpZGVQb3NpdGlvbnMsIHJpZ2h0Qm91bmRhcnksIGluZGV4TWF4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJlZXphYmxlICYmIChicENoYW5nZWQgfHwgZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpKSB7XG4gICAgICBmcmVlemUgPSBnZXRGcmVlemUoKTsgLy8gPD0gYXV0b1dpZHRoOiBzbGlkZVBvc2l0aW9ucywgZ3V0dGVyLCB2aWV3cG9ydCwgcmlnaHRCb3VuZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDw9IGZpeGVkV2lkdGg6IGZpeGVkV2lkdGgsIGd1dHRlciwgcmlnaHRCb3VuZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDw9IG90aGVyczogaXRlbXNcblxuICAgICAgaWYgKGZyZWV6ZSAhPT0gZnJlZXplVGVtKSB7XG4gICAgICAgIGlmIChmcmVlemUpIHtcbiAgICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybShnZXRDb250YWluZXJUcmFuc2Zvcm1WYWx1ZShnZXRTdGFydEluZGV4KDApKSk7XG4gICAgICAgICAgZnJlZXplU2xpZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5mcmVlemVTbGlkZXIoKTtcbiAgICAgICAgICBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlIHx8IGZyZWV6ZSk7IC8vIGNvbnRyb2xzLCBuYXYsIHRvdWNoLCBtb3VzZURyYWcsIGFycm93S2V5cywgYXV0b3BsYXksIGF1dG9wbGF5SG92ZXJQYXVzZSwgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eVxuICAgIGlmICghYXV0b3BsYXkpIHsgYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGZhbHNlOyB9XG5cbiAgICBpZiAoYXJyb3dLZXlzICE9PSBhcnJvd0tleXNUZW0pIHtcbiAgICAgIGFycm93S2V5cyA/XG4gICAgICAgIGFkZEV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7XG4gICAgfVxuICAgIGlmIChjb250cm9scyAhPT0gY29udHJvbHNUZW0pIHtcbiAgICAgIGlmIChjb250cm9scykge1xuICAgICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgc2hvd0VsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBzaG93RWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgICBoaWRlRWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgaGlkZUVsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBoaWRlRWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXYgIT09IG5hdlRlbSkge1xuICAgICAgbmF2ID9cbiAgICAgICAgc2hvd0VsZW1lbnQobmF2Q29udGFpbmVyKSA6XG4gICAgICAgIGhpZGVFbGVtZW50KG5hdkNvbnRhaW5lcik7XG4gICAgfVxuICAgIGlmICh0b3VjaCAhPT0gdG91Y2hUZW0pIHtcbiAgICAgIHRvdWNoID9cbiAgICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMsIG9wdGlvbnMucHJldmVudFNjcm9sbE9uVG91Y2gpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpO1xuICAgIH1cbiAgICBpZiAobW91c2VEcmFnICE9PSBtb3VzZURyYWdUZW0pIHtcbiAgICAgIG1vdXNlRHJhZyA/XG4gICAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cyk7XG4gICAgfVxuICAgIGlmIChhdXRvcGxheSAhPT0gYXV0b3BsYXlUZW0pIHtcbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgc2hvd0VsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgICAgIGlmICghYW5pbWF0aW5nICYmICFhdXRvcGxheVVzZXJQYXVzZWQpIHsgc3RhcnRBdXRvcGxheSgpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgaGlkZUVsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHsgc3RvcEF1dG9wbGF5KCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZSAhPT0gYXV0b3BsYXlIb3ZlclBhdXNlVGVtKSB7XG4gICAgICBhdXRvcGxheUhvdmVyUGF1c2UgP1xuICAgICAgICBhZGRFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cykgOlxuICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7XG4gICAgfVxuICAgIGlmIChhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ICE9PSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5VGVtKSB7XG4gICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID9cbiAgICAgICAgYWRkRXZlbnRzKGRvYywgdmlzaWJpbGl0eUV2ZW50KSA6XG4gICAgICAgIHJlbW92ZUV2ZW50cyhkb2MsIHZpc2liaWxpdHlFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGJwQ2hhbmdlZCkge1xuICAgICAgaWYgKGZpeGVkV2lkdGggIT09IGZpeGVkV2lkdGhUZW0gfHwgY2VudGVyICE9PSBjZW50ZXJUZW0pIHsgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IHRydWU7IH1cblxuICAgICAgaWYgKGF1dG9IZWlnaHQgIT09IGF1dG9IZWlnaHRUZW0pIHtcbiAgICAgICAgaWYgKCFhdXRvSGVpZ2h0KSB7IGlubmVyV3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnJzsgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udHJvbHMgJiYgY29udHJvbHNUZXh0ICE9PSBjb250cm9sc1RleHRUZW0pIHtcbiAgICAgICAgcHJldkJ1dHRvbi5pbm5lckhUTUwgPSBjb250cm9sc1RleHRbMF07XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gY29udHJvbHNUZXh0WzFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24gJiYgYXV0b3BsYXlUZXh0ICE9PSBhdXRvcGxheVRleHRUZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhdXRvcGxheSA/IDEgOiAwLFxuICAgICAgICAgICAgaHRtbCA9IGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCxcbiAgICAgICAgICAgIGxlbiA9IGh0bWwubGVuZ3RoIC0gYXV0b3BsYXlUZXh0VGVtW2ldLmxlbmd0aDtcbiAgICAgICAgaWYgKGh0bWwuc3Vic3RyaW5nKGxlbikgPT09IGF1dG9wbGF5VGV4dFRlbVtpXSkge1xuICAgICAgICAgIGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCA9IGh0bWwuc3Vic3RyaW5nKDAsIGxlbikgKyBhdXRvcGxheVRleHRbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNlbnRlciAmJiAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpKSB7IG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlOyB9XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlZCB8fCBmaXhlZFdpZHRoICYmICFhdXRvV2lkdGgpIHtcbiAgICAgIHBhZ2VzID0gZ2V0UGFnZXMoKTtcbiAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICBpbmRDaGFuZ2VkID0gaW5kZXggIT09IGluZGV4VGVtO1xuICAgIGlmIChpbmRDaGFuZ2VkKSB7IFxuICAgICAgZXZlbnRzLmVtaXQoJ2luZGV4Q2hhbmdlZCcsIGluZm8oKSk7XG4gICAgICBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGl0ZW1zQ2hhbmdlZCkge1xuICAgICAgaWYgKCFpbmRDaGFuZ2VkKSB7IGFkZGl0aW9uYWxVcGRhdGVzKCk7IH1cbiAgICB9IGVsc2UgaWYgKGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSB7XG4gICAgICBkb0xhenlMb2FkKCk7IFxuICAgICAgdXBkYXRlU2xpZGVTdGF0dXMoKTtcbiAgICAgIHVwZGF0ZUxpdmVSZWdpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbXNDaGFuZ2VkICYmICFjYXJvdXNlbCkgeyB1cGRhdGVHYWxsZXJ5U2xpZGVQb3NpdGlvbnMoKTsgfVxuXG4gICAgaWYgKCFkaXNhYmxlICYmICFmcmVlemUpIHtcbiAgICAgIC8vIG5vbi1tZWR1YXF1ZXJpZXM6IElFOFxuICAgICAgaWYgKGJwQ2hhbmdlZCAmJiAhQ1NTTVEpIHtcbiAgICAgICAgLy8gbWlkZGxlIHdyYXBwZXIgc3R5bGVzXG4gICAgICAgIGlmIChhdXRvSGVpZ2h0ICE9PSBhdXRvaGVpZ2h0VGVtIHx8IHNwZWVkICE9PSBzcGVlZFRlbSkge1xuICAgICAgICAgIHVwZGF0ZV9jYXJvdXNlbF90cmFuc2l0aW9uX2R1cmF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbm5lciB3cmFwcGVyIHN0eWxlc1xuICAgICAgICBpZiAoZWRnZVBhZGRpbmcgIT09IGVkZ2VQYWRkaW5nVGVtIHx8IGd1dHRlciAhPT0gZ3V0dGVyVGVtKSB7XG4gICAgICAgICAgaW5uZXJXcmFwcGVyLnN0eWxlLmNzc1RleHQgPSBnZXRJbm5lcldyYXBwZXJTdHlsZXMoZWRnZVBhZGRpbmcsIGd1dHRlciwgZml4ZWRXaWR0aCwgc3BlZWQsIGF1dG9IZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAvLyBjb250YWluZXIgc3R5bGVzXG4gICAgICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBnZXRDb250YWluZXJXaWR0aChmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzbGlkZSBzdHlsZXNcbiAgICAgICAgICB2YXIgc3RyID0gZ2V0U2xpZGVXaWR0aFN0eWxlKGZpeGVkV2lkdGgsIGd1dHRlciwgaXRlbXMpICsgXG4gICAgICAgICAgICAgICAgICAgIGdldFNsaWRlR3V0dGVyU3R5bGUoZ3V0dGVyKTtcblxuICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGFzdCBsaW5lIGFuZFxuICAgICAgICAgIC8vIGFkZCBuZXcgc3R5bGVzXG4gICAgICAgICAgcmVtb3ZlQ1NTUnVsZShzaGVldCwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpIC0gMSk7XG4gICAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYXV0byBoZWlnaHRcbiAgICAgIGlmIChhdXRvSGVpZ2h0KSB7IGRvQXV0b0hlaWdodCgpOyB9XG5cbiAgICAgIGlmIChuZWVkQ29udGFpbmVyVHJhbnNmb3JtKSB7XG4gICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7XG4gICAgICAgIGluZGV4Q2FjaGVkID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJwQ2hhbmdlZCkgeyBldmVudHMuZW1pdCgnbmV3QnJlYWtwb2ludEVuZCcsIGluZm8oZSkpOyB9XG4gIH1cblxuXG5cblxuXG4gIC8vID09PSBJTklUSUFMSVpBVElPTiBGVU5DVElPTlMgPT09IC8vXG4gIGZ1bmN0aW9uIGdldEZyZWV6ZSAoKSB7XG4gICAgaWYgKCFmaXhlZFdpZHRoICYmICFhdXRvV2lkdGgpIHtcbiAgICAgIHZhciBhID0gY2VudGVyID8gaXRlbXMgLSAoaXRlbXMgLSAxKSAvIDIgOiBpdGVtcztcbiAgICAgIHJldHVybiAgc2xpZGVDb3VudCA8PSBhO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IGZpeGVkV2lkdGggPyAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBzbGlkZUNvdW50IDogc2xpZGVQb3NpdGlvbnNbc2xpZGVDb3VudF0sXG4gICAgICAgIHZwID0gZWRnZVBhZGRpbmcgPyB2aWV3cG9ydCArIGVkZ2VQYWRkaW5nICogMiA6IHZpZXdwb3J0ICsgZ3V0dGVyO1xuXG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgdnAgLT0gZml4ZWRXaWR0aCA/ICh2aWV3cG9ydCAtIGZpeGVkV2lkdGgpIC8gMiA6ICh2aWV3cG9ydCAtIChzbGlkZVBvc2l0aW9uc1tpbmRleCArIDFdIC0gc2xpZGVQb3NpdGlvbnNbaW5kZXhdIC0gZ3V0dGVyKSkgLyAyO1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aCA8PSB2cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEJyZWFrcG9pbnRab25lICgpIHtcbiAgICBicmVha3BvaW50Wm9uZSA9IDA7XG4gICAgZm9yICh2YXIgYnAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgYnAgPSBwYXJzZUludChicCk7IC8vIGNvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxuICAgICAgaWYgKHdpbmRvd1dpZHRoID49IGJwKSB7IGJyZWFrcG9pbnRab25lID0gYnA7IH1cbiAgICB9XG4gIH1cblxuICAvLyAoc2xpZGVCeSwgaW5kZXhNaW4sIGluZGV4TWF4KSA9PiBpbmRleFxuICB2YXIgdXBkYXRlSW5kZXggPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb29wID8gXG4gICAgICBjYXJvdXNlbCA/XG4gICAgICAgIC8vIGxvb3AgKyBjYXJvdXNlbFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGxlZnRFZGdlID0gaW5kZXhNaW4sXG4gICAgICAgICAgICAgIHJpZ2h0RWRnZSA9IGluZGV4TWF4O1xuXG4gICAgICAgICAgbGVmdEVkZ2UgKz0gc2xpZGVCeTtcbiAgICAgICAgICByaWdodEVkZ2UgLT0gc2xpZGVCeTtcblxuICAgICAgICAgIC8vIGFkanVzdCBlZGdlcyB3aGVuIGhhcyBlZGdlIHBhZGRpbmdzXG4gICAgICAgICAgLy8gb3IgZml4ZWQtd2lkdGggc2xpZGVyIHdpdGggZXh0cmEgc3BhY2Ugb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICAgIGxlZnRFZGdlICs9IDE7XG4gICAgICAgICAgICByaWdodEVkZ2UgLT0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgICAgIGlmICgodmlld3BvcnQgKyBndXR0ZXIpJShmaXhlZFdpZHRoICsgZ3V0dGVyKSkgeyByaWdodEVkZ2UgLT0gMTsgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjbG9uZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiByaWdodEVkZ2UpIHtcbiAgICAgICAgICAgICAgaW5kZXggLT0gc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCBsZWZ0RWRnZSkge1xuICAgICAgICAgICAgICBpbmRleCArPSBzbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSA6XG4gICAgICAgIC8vIGxvb3AgKyBnYWxsZXJ5XG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChpbmRleCA+IGluZGV4TWF4KSB7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPj0gaW5kZXhNaW4gKyBzbGlkZUNvdW50KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgaW5kZXhNaW4pIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8PSBpbmRleE1heCAtIHNsaWRlQ291bnQpIHsgaW5kZXggKz0gc2xpZGVDb3VudDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSA6XG4gICAgICAvLyBub24tbG9vcFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5tYXgoaW5kZXhNaW4sIE1hdGgubWluKGluZGV4TWF4LCBpbmRleCkpO1xuICAgICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBkaXNhYmxlVUkgKCkge1xuICAgIGlmICghYXV0b3BsYXkgJiYgYXV0b3BsYXlCdXR0b24pIHsgaGlkZUVsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgaWYgKCFuYXYgJiYgbmF2Q29udGFpbmVyKSB7IGhpZGVFbGVtZW50KG5hdkNvbnRhaW5lcik7IH1cbiAgICBpZiAoIWNvbnRyb2xzKSB7XG4gICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgaGlkZUVsZW1lbnQoY29udHJvbHNDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgaGlkZUVsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgaWYgKG5leHRCdXR0b24pIHsgaGlkZUVsZW1lbnQobmV4dEJ1dHRvbik7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVVSSAoKSB7XG4gICAgaWYgKGF1dG9wbGF5ICYmIGF1dG9wbGF5QnV0dG9uKSB7IHNob3dFbGVtZW50KGF1dG9wbGF5QnV0dG9uKTsgfVxuICAgIGlmIChuYXYgJiYgbmF2Q29udGFpbmVyKSB7IHNob3dFbGVtZW50KG5hdkNvbnRhaW5lcik7IH1cbiAgICBpZiAoY29udHJvbHMpIHtcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJldkJ1dHRvbikgeyBzaG93RWxlbWVudChwcmV2QnV0dG9uKTsgfVxuICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBzaG93RWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZyZWV6ZVNsaWRlciAoKSB7XG4gICAgaWYgKGZyb3plbikgeyByZXR1cm47IH1cblxuICAgIC8vIHJlbW92ZSBlZGdlIHBhZGRpbmcgZnJvbSBpbm5lciB3cmFwcGVyXG4gICAgaWYgKGVkZ2VQYWRkaW5nKSB7IGlubmVyV3JhcHBlci5zdHlsZS5tYXJnaW4gPSAnMHB4JzsgfVxuXG4gICAgLy8gYWRkIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JztcbiAgICAgIGZvciAodmFyIGkgPSBjbG9uZUNvdW50OyBpLS07KSB7XG4gICAgICAgIGlmIChjYXJvdXNlbCkgeyBhZGRDbGFzcyhzbGlkZUl0ZW1zW2ldLCBzdHIpOyB9XG4gICAgICAgIGFkZENsYXNzKHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGkgLSAxXSwgc3RyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBkaXNhYmxlVUkoKTtcblxuICAgIGZyb3plbiA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB1bmZyZWV6ZVNsaWRlciAoKSB7XG4gICAgaWYgKCFmcm96ZW4pIHsgcmV0dXJuOyB9XG5cbiAgICAvLyByZXN0b3JlIGVkZ2UgcGFkZGluZyBmb3IgaW5uZXIgd3JhcHBlclxuICAgIC8vIGZvciBtb3JkZXJuIGJyb3dzZXJzXG4gICAgaWYgKGVkZ2VQYWRkaW5nICYmIENTU01RKSB7IGlubmVyV3JhcHBlci5zdHlsZS5tYXJnaW4gPSAnJzsgfVxuXG4gICAgLy8gcmVtb3ZlIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JztcbiAgICAgIGZvciAodmFyIGkgPSBjbG9uZUNvdW50OyBpLS07KSB7XG4gICAgICAgIGlmIChjYXJvdXNlbCkgeyByZW1vdmVDbGFzcyhzbGlkZUl0ZW1zW2ldLCBzdHIpOyB9XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGkgLSAxXSwgc3RyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBlbmFibGVVSSgpO1xuXG4gICAgZnJvemVuID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyICgpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBzaGVldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZShuZXdDb250YWluZXJDbGFzc2VzLnN1YnN0cmluZygxKSwgJycpO1xuICAgIHJlbW92ZUF0dHJzKGNvbnRhaW5lciwgWydzdHlsZSddKTtcbiAgICBpZiAobG9vcCkge1xuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgaWYgKGNhcm91c2VsKSB7IGhpZGVFbGVtZW50KHNsaWRlSXRlbXNbal0pOyB9XG4gICAgICAgIGhpZGVFbGVtZW50KHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGogLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmVydGljYWwgc2xpZGVyXG4gICAgaWYgKCFob3Jpem9udGFsIHx8ICFjYXJvdXNlbCkgeyByZW1vdmVBdHRycyhpbm5lcldyYXBwZXIsIFsnc3R5bGUnXSk7IH1cblxuICAgIC8vIGdhbGxlcnlcbiAgICBpZiAoIWNhcm91c2VsKSB7IFxuICAgICAgZm9yICh2YXIgaSA9IGluZGV4LCBsID0gaW5kZXggKyBzbGlkZUNvdW50OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcbiAgICAgICAgcmVtb3ZlQXR0cnMoaXRlbSwgWydzdHlsZSddKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZUluKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHRvb2xzXG4gICAgZGlzYWJsZVVJKCk7XG5cbiAgICBkaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVTbGlkZXIgKCkge1xuICAgIGlmICghZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBzaGVldC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gbmV3Q29udGFpbmVyQ2xhc3NlcztcbiAgICBkb0NvbnRhaW5lclRyYW5zZm9ybVNpbGVudCgpO1xuXG4gICAgaWYgKGxvb3ApIHtcbiAgICAgIGZvciAodmFyIGogPSBjbG9uZUNvdW50OyBqLS07KSB7XG4gICAgICAgIGlmIChjYXJvdXNlbCkgeyBzaG93RWxlbWVudChzbGlkZUl0ZW1zW2pdKTsgfVxuICAgICAgICBzaG93RWxlbWVudChzbGlkZUl0ZW1zW3NsaWRlQ291bnROZXcgLSBqIC0gMV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdhbGxlcnlcbiAgICBpZiAoIWNhcm91c2VsKSB7IFxuICAgICAgZm9yICh2YXIgaSA9IGluZGV4LCBsID0gaW5kZXggKyBzbGlkZUNvdW50OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXSxcbiAgICAgICAgICAgIGNsYXNzTiA9IGkgPCBpbmRleCArIGl0ZW1zID8gYW5pbWF0ZUluIDogYW5pbWF0ZU5vcm1hbDtcbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgY2xhc3NOKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBlbmFibGVVSSgpO1xuXG4gICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxpdmVSZWdpb24gKCkge1xuICAgIHZhciBzdHIgPSBnZXRMaXZlUmVnaW9uU3RyKCk7XG4gICAgaWYgKGxpdmVyZWdpb25DdXJyZW50LmlubmVySFRNTCAhPT0gc3RyKSB7IGxpdmVyZWdpb25DdXJyZW50LmlubmVySFRNTCA9IHN0cjsgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGl2ZVJlZ2lvblN0ciAoKSB7XG4gICAgdmFyIGFyciA9IGdldFZpc2libGVTbGlkZVJhbmdlKCksXG4gICAgICAgIHN0YXJ0ID0gYXJyWzBdICsgMSxcbiAgICAgICAgZW5kID0gYXJyWzFdICsgMTtcbiAgICByZXR1cm4gc3RhcnQgPT09IGVuZCA/IHN0YXJ0ICsgJycgOiBzdGFydCArICcgdG8gJyArIGVuZDsgXG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaXNpYmxlU2xpZGVSYW5nZSAodmFsKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7IHZhbCA9IGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlKCk7IH1cbiAgICB2YXIgc3RhcnQgPSBpbmRleCwgZW5kLCByYW5nZXN0YXJ0LCByYW5nZWVuZDtcblxuICAgIC8vIGdldCByYW5nZSBzdGFydCwgcmFuZ2UgZW5kIGZvciBhdXRvV2lkdGggYW5kIGZpeGVkV2lkdGhcbiAgICBpZiAoY2VudGVyIHx8IGVkZ2VQYWRkaW5nKSB7XG4gICAgICBpZiAoYXV0b1dpZHRoIHx8IGZpeGVkV2lkdGgpIHtcbiAgICAgICAgcmFuZ2VzdGFydCA9IC0gKHBhcnNlRmxvYXQodmFsKSArIGVkZ2VQYWRkaW5nKTtcbiAgICAgICAgcmFuZ2VlbmQgPSByYW5nZXN0YXJ0ICsgdmlld3BvcnQgKyBlZGdlUGFkZGluZyAqIDI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdXRvV2lkdGgpIHtcbiAgICAgICAgcmFuZ2VzdGFydCA9IHNsaWRlUG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgcmFuZ2VlbmQgPSByYW5nZXN0YXJ0ICsgdmlld3BvcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0YXJ0LCBlbmRcbiAgICAvLyAtIGNoZWNrIGF1dG8gd2lkdGhcbiAgICBpZiAoYXV0b1dpZHRoKSB7XG4gICAgICBzbGlkZVBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50LCBpKSB7XG4gICAgICAgIGlmIChpIDwgc2xpZGVDb3VudE5ldykge1xuICAgICAgICAgIGlmICgoY2VudGVyIHx8IGVkZ2VQYWRkaW5nKSAmJiBwb2ludCA8PSByYW5nZXN0YXJ0ICsgMC41KSB7IHN0YXJ0ID0gaTsgfVxuICAgICAgICAgIGlmIChyYW5nZWVuZCAtIHBvaW50ID49IDAuNSkgeyBlbmQgPSBpOyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gLSBjaGVjayBwZXJjZW50YWdlIHdpZHRoLCBmaXhlZCB3aWR0aFxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICAgIHZhciBjZWxsID0gZml4ZWRXaWR0aCArIGd1dHRlcjtcbiAgICAgICAgaWYgKGNlbnRlciB8fCBlZGdlUGFkZGluZykge1xuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihyYW5nZXN0YXJ0L2NlbGwpO1xuICAgICAgICAgIGVuZCA9IE1hdGguY2VpbChyYW5nZWVuZC9jZWxsIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBNYXRoLmNlaWwodmlld3BvcnQvY2VsbCkgLSAxO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjZW50ZXIgfHwgZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICB2YXIgYSA9IGl0ZW1zIC0gMTtcbiAgICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICBzdGFydCAtPSBhIC8gMjtcbiAgICAgICAgICAgIGVuZCA9IGluZGV4ICsgYSAvIDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCA9IGluZGV4ICsgYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICAgIHZhciBiID0gZWRnZVBhZGRpbmcgKiBpdGVtcyAvIHZpZXdwb3J0O1xuICAgICAgICAgICAgc3RhcnQgLT0gYjtcbiAgICAgICAgICAgIGVuZCArPSBiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihzdGFydCk7XG4gICAgICAgICAgZW5kID0gTWF0aC5jZWlsKGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBpdGVtcyAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBNYXRoLm1heChzdGFydCwgMCk7XG4gICAgICBlbmQgPSBNYXRoLm1pbihlbmQsIHNsaWRlQ291bnROZXcgLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9MYXp5TG9hZCAoKSB7XG4gICAgaWYgKGxhenlsb2FkICYmICFkaXNhYmxlKSB7XG4gICAgICBnZXRJbWFnZUFycmF5LmFwcGx5KG51bGwsIGdldFZpc2libGVTbGlkZVJhbmdlKCkpLmZvckVhY2goZnVuY3Rpb24gKGltZykge1xuICAgICAgICBpZiAoIWhhc0NsYXNzKGltZywgaW1nQ29tcGxldGVDbGFzcykpIHtcbiAgICAgICAgICAvLyBzdG9wIHByb3BhZ2F0aW9uIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gY29udGFpbmVyXG4gICAgICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IGZ1bmN0aW9uIChlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH07XG4gICAgICAgICAgYWRkRXZlbnRzKGltZywgZXZlKTtcblxuICAgICAgICAgIGFkZEV2ZW50cyhpbWcsIGltZ0V2ZW50cyk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgc3JjXG4gICAgICAgICAgaW1nLnNyYyA9IGdldEF0dHIoaW1nLCAnZGF0YS1zcmMnKTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBzcmNzZXRcbiAgICAgICAgICB2YXIgc3Jjc2V0ID0gZ2V0QXR0cihpbWcsICdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgIGlmIChzcmNzZXQpIHsgaW1nLnNyY3NldCA9IHNyY3NldDsgfVxuXG4gICAgICAgICAgYWRkQ2xhc3MoaW1nLCAnbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkltZ0xvYWRlZCAoZSkge1xuICAgIGltZ0xvYWRlZChnZXRUYXJnZXQoZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25JbWdGYWlsZWQgKGUpIHtcbiAgICBpbWdGYWlsZWQoZ2V0VGFyZ2V0KGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0xvYWRlZCAoaW1nKSB7XG4gICAgYWRkQ2xhc3MoaW1nLCAnbG9hZGVkJyk7XG4gICAgaW1nQ29tcGxldGVkKGltZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWdGYWlsZWQgKGltZykge1xuICAgIGFkZENsYXNzKGltZywgJ2ZhaWxlZCcpO1xuICAgIGltZ0NvbXBsZXRlZChpbWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1nQ29tcGxldGVkIChpbWcpIHtcbiAgICBhZGRDbGFzcyhpbWcsICd0bnMtY29tcGxldGUnKTtcbiAgICByZW1vdmVDbGFzcyhpbWcsICdsb2FkaW5nJyk7XG4gICAgcmVtb3ZlRXZlbnRzKGltZywgaW1nRXZlbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEltYWdlQXJyYXkgKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgaW1ncyA9IFtdO1xuICAgIHdoaWxlIChzdGFydCA8PSBlbmQpIHtcbiAgICAgIGZvckVhY2goc2xpZGVJdGVtc1tzdGFydF0ucXVlcnlTZWxlY3RvckFsbCgnaW1nJyksIGZ1bmN0aW9uIChpbWcpIHsgaW1ncy5wdXNoKGltZyk7IH0pO1xuICAgICAgc3RhcnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaW1ncztcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIGFsbCB2aXNpYmxlIGltYWdlcyBhcmUgbG9hZGVkXG4gIC8vIGFuZCB1cGRhdGUgY29udGFpbmVyIGhlaWdodCBpZiBpdCdzIGRvbmVcbiAgZnVuY3Rpb24gZG9BdXRvSGVpZ2h0ICgpIHtcbiAgICB2YXIgaW1ncyA9IGdldEltYWdlQXJyYXkuYXBwbHkobnVsbCwgZ2V0VmlzaWJsZVNsaWRlUmFuZ2UoKSk7XG4gICAgcmFmKGZ1bmN0aW9uKCl7IGltZ3NMb2FkZWRDaGVjayhpbWdzLCB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ3NMb2FkZWRDaGVjayAoaW1ncywgY2IpIHtcbiAgICAvLyBkaXJlY3RseSBleGVjdXRlIGNhbGxiYWNrIGZ1bmN0aW9uIGlmIGFsbCBpbWFnZXMgYXJlIGNvbXBsZXRlXG4gICAgaWYgKGltZ3NDb21wbGV0ZSkgeyByZXR1cm4gY2IoKTsgfVxuXG4gICAgLy8gY2hlY2sgc2VsZWN0ZWQgaW1hZ2UgY2xhc3NlcyBvdGhlcndpc2VcbiAgICBpbWdzLmZvckVhY2goZnVuY3Rpb24gKGltZywgaW5kZXgpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhpbWcsIGltZ0NvbXBsZXRlQ2xhc3MpKSB7IGltZ3Muc3BsaWNlKGluZGV4LCAxKTsgfVxuICAgIH0pO1xuXG4gICAgLy8gZXhlY3V0ZSBjYWxsYmFjayBmdW5jdGlvbiBpZiBzZWxlY3RlZCBpbWFnZXMgYXJlIGFsbCBjb21wbGV0ZVxuICAgIGlmICghaW1ncy5sZW5ndGgpIHsgcmV0dXJuIGNiKCk7IH1cblxuICAgIC8vIG90aGVyd2lzZSBleGVjdXRlIHRoaXMgZnVuY3Rpb25hIGFnYWluXG4gICAgcmFmKGZ1bmN0aW9uKCl7IGltZ3NMb2FkZWRDaGVjayhpbWdzLCBjYik7IH0pO1xuICB9IFxuXG4gIGZ1bmN0aW9uIGFkZGl0aW9uYWxVcGRhdGVzICgpIHtcbiAgICBkb0xhenlMb2FkKCk7IFxuICAgIHVwZGF0ZVNsaWRlU3RhdHVzKCk7XG4gICAgdXBkYXRlTGl2ZVJlZ2lvbigpO1xuICAgIHVwZGF0ZUNvbnRyb2xzU3RhdHVzKCk7XG4gICAgdXBkYXRlTmF2U3RhdHVzKCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZV9jYXJvdXNlbF90cmFuc2l0aW9uX2R1cmF0aW9uICgpIHtcbiAgICBpZiAoY2Fyb3VzZWwgJiYgYXV0b0hlaWdodCkge1xuICAgICAgbWlkZGxlV3JhcHBlci5zdHlsZVtUUkFOU0lUSU9ORFVSQVRJT05dID0gc3BlZWQgLyAxMDAwICsgJ3MnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1heFNsaWRlSGVpZ2h0IChzbGlkZVN0YXJ0LCBzbGlkZVJhbmdlKSB7XG4gICAgdmFyIGhlaWdodHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gc2xpZGVTdGFydCwgbCA9IE1hdGgubWluKHNsaWRlU3RhcnQgKyBzbGlkZVJhbmdlLCBzbGlkZUNvdW50TmV3KTsgaSA8IGw7IGkrKykge1xuICAgICAgaGVpZ2h0cy5wdXNoKHNsaWRlSXRlbXNbaV0ub2Zmc2V0SGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XG4gIH1cblxuICAvLyB1cGRhdGUgaW5uZXIgd3JhcHBlciBoZWlnaHRcbiAgLy8gMS4gZ2V0IHRoZSBtYXgtaGVpZ2h0IG9mIHRoZSB2aXNpYmxlIHNsaWRlc1xuICAvLyAyLiBzZXQgdHJhbnNpdGlvbkR1cmF0aW9uIHRvIHNwZWVkXG4gIC8vIDMuIHVwZGF0ZSBpbm5lciB3cmFwcGVyIGhlaWdodCB0byBtYXgtaGVpZ2h0XG4gIC8vIDQuIHNldCB0cmFuc2l0aW9uRHVyYXRpb24gdG8gMHMgYWZ0ZXIgdHJhbnNpdGlvbiBkb25lXG4gIGZ1bmN0aW9uIHVwZGF0ZUlubmVyV3JhcHBlckhlaWdodCAoKSB7XG4gICAgdmFyIG1heEhlaWdodCA9IGF1dG9IZWlnaHQgPyBnZXRNYXhTbGlkZUhlaWdodChpbmRleCwgaXRlbXMpIDogZ2V0TWF4U2xpZGVIZWlnaHQoY2xvbmVDb3VudCwgc2xpZGVDb3VudCksXG4gICAgICAgIHdwID0gbWlkZGxlV3JhcHBlciA/IG1pZGRsZVdyYXBwZXIgOiBpbm5lcldyYXBwZXI7XG5cbiAgICBpZiAod3Auc3R5bGUuaGVpZ2h0ICE9PSBtYXhIZWlnaHQpIHsgd3Auc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0ICsgJ3B4JzsgfVxuICB9XG5cbiAgLy8gZ2V0IHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3AgZWRnZSBvZiB0aGUgZmlyc3Qgc2xpZGUgdG8gZWFjaCBzbGlkZVxuICAvLyAoaW5pdCkgPT4gc2xpZGVQb3NpdGlvbnNcbiAgZnVuY3Rpb24gc2V0U2xpZGVQb3NpdGlvbnMgKCkge1xuICAgIHNsaWRlUG9zaXRpb25zID0gWzBdO1xuICAgIHZhciBhdHRyID0gaG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnLFxuICAgICAgICBhdHRyMiA9IGhvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbScsXG4gICAgICAgIGJhc2UgPSBzbGlkZUl0ZW1zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2F0dHJdO1xuXG4gICAgZm9yRWFjaChzbGlkZUl0ZW1zLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAvLyBza2lwIHRoZSBmaXJzdCBzbGlkZVxuICAgICAgaWYgKGkpIHsgc2xpZGVQb3NpdGlvbnMucHVzaChpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2F0dHJdIC0gYmFzZSk7IH1cbiAgICAgIC8vIGFkZCB0aGUgZW5kIGVkZ2VcbiAgICAgIGlmIChpID09PSBzbGlkZUNvdW50TmV3IC0gMSkgeyBzbGlkZVBvc2l0aW9ucy5wdXNoKGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbYXR0cjJdIC0gYmFzZSk7IH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBzbGlkZVxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZVN0YXR1cyAoKSB7XG4gICAgdmFyIHJhbmdlID0gZ2V0VmlzaWJsZVNsaWRlUmFuZ2UoKSxcbiAgICAgICAgc3RhcnQgPSByYW5nZVswXSxcbiAgICAgICAgZW5kID0gcmFuZ2VbMV07XG5cbiAgICBmb3JFYWNoKHNsaWRlSXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgIC8vIHNob3cgc2xpZGVzXG4gICAgICBpZiAoaSA+PSBzdGFydCAmJiBpIDw9IGVuZCkge1xuICAgICAgICBpZiAoaGFzQXR0cihpdGVtLCAnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIHJlbW92ZUF0dHJzKGl0ZW0sIFsnYXJpYS1oaWRkZW4nLCAndGFiaW5kZXgnXSk7XG4gICAgICAgICAgYWRkQ2xhc3MoaXRlbSwgc2xpZGVBY3RpdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIC8vIGhpZGUgc2xpZGVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc0F0dHIoaXRlbSwgJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICBzZXRBdHRycyhpdGVtLCB7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgc2xpZGVBY3RpdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGdhbGxlcnk6IHVwZGF0ZSBzbGlkZSBwb3NpdGlvblxuICBmdW5jdGlvbiB1cGRhdGVHYWxsZXJ5U2xpZGVQb3NpdGlvbnMgKCkge1xuICAgIHZhciBsID0gaW5kZXggKyBNYXRoLm1pbihzbGlkZUNvdW50LCBpdGVtcyk7XG4gICAgZm9yICh2YXIgaSA9IHNsaWRlQ291bnROZXc7IGktLTspIHtcbiAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcblxuICAgICAgaWYgKGkgPj0gaW5kZXggJiYgaSA8IGwpIHtcbiAgICAgICAgLy8gYWRkIHRyYW5zaXRpb25zIHRvIHZpc2libGUgc2xpZGVzIHdoZW4gYWRqdXN0aW5nIHRoZWlyIHBvc2l0aW9uc1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCAndG5zLW1vdmluZycpO1xuXG4gICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVJbik7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN0eWxlLmxlZnQpIHtcbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlSW4pO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgb3V0bGV0IGFuaW1hdGlvblxuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU91dCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZpbmcgJy50bnMtbW92aW5nJ1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBmb3JFYWNoKHNsaWRlSXRlbXMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsLCAndG5zLW1vdmluZycpO1xuICAgICAgfSk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIC8vIHNldCB0YWJpbmRleCBvbiBOYXZcbiAgZnVuY3Rpb24gdXBkYXRlTmF2U3RhdHVzICgpIHtcbiAgICAvLyBnZXQgY3VycmVudCBuYXZcbiAgICBpZiAobmF2KSB7XG4gICAgICBuYXZDdXJyZW50SW5kZXggPSBuYXZDbGlja2VkID49IDAgPyBuYXZDbGlja2VkIDogZ2V0Q3VycmVudE5hdkluZGV4KCk7XG4gICAgICBuYXZDbGlja2VkID0gLTE7XG5cbiAgICAgIGlmIChuYXZDdXJyZW50SW5kZXggIT09IG5hdkN1cnJlbnRJbmRleENhY2hlZCkge1xuICAgICAgICB2YXIgbmF2UHJldiA9IG5hdkl0ZW1zW25hdkN1cnJlbnRJbmRleENhY2hlZF0sXG4gICAgICAgICAgICBuYXZDdXJyZW50ID0gbmF2SXRlbXNbbmF2Q3VycmVudEluZGV4XTtcblxuICAgICAgICBzZXRBdHRycyhuYXZQcmV2LCB7XG4gICAgICAgICAgJ3RhYmluZGV4JzogJy0xJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IG5hdlN0ciArIChuYXZDdXJyZW50SW5kZXhDYWNoZWQgKyAxKVxuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobmF2UHJldiwgbmF2QWN0aXZlQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgc2V0QXR0cnMobmF2Q3VycmVudCwgeydhcmlhLWxhYmVsJzogbmF2U3RyICsgKG5hdkN1cnJlbnRJbmRleCArIDEpICsgbmF2U3RyQ3VycmVudH0pO1xuICAgICAgICByZW1vdmVBdHRycyhuYXZDdXJyZW50LCAndGFiaW5kZXgnKTtcbiAgICAgICAgYWRkQ2xhc3MobmF2Q3VycmVudCwgbmF2QWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZCA9IG5hdkN1cnJlbnRJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMb3dlckNhc2VOb2RlTmFtZSAoZWwpIHtcbiAgICByZXR1cm4gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQnV0dG9uIChlbCkge1xuICAgIHJldHVybiBnZXRMb3dlckNhc2VOb2RlTmFtZShlbCkgPT09ICdidXR0b24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBcmlhRGlzYWJsZWQgKGVsKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNFbmFibGVFbGVtZW50IChpc0J1dHRvbiwgZWwsIHZhbCkge1xuICAgIGlmIChpc0J1dHRvbikge1xuICAgICAgZWwuZGlzYWJsZWQgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHZhbC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgJ2Rpc2FibGVkJyB0byB0cnVlIG9uIGNvbnRyb2xzIHdoZW4gcmVhY2ggdGhlIGVkZ2VzXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2xzU3RhdHVzICgpIHtcbiAgICBpZiAoIWNvbnRyb2xzIHx8IHJld2luZCB8fCBsb29wKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIHByZXZEaXNhYmxlZCA9IChwcmV2SXNCdXR0b24pID8gcHJldkJ1dHRvbi5kaXNhYmxlZCA6IGlzQXJpYURpc2FibGVkKHByZXZCdXR0b24pLFxuICAgICAgICBuZXh0RGlzYWJsZWQgPSAobmV4dElzQnV0dG9uKSA/IG5leHRCdXR0b24uZGlzYWJsZWQgOiBpc0FyaWFEaXNhYmxlZChuZXh0QnV0dG9uKSxcbiAgICAgICAgZGlzYWJsZVByZXYgPSAoaW5kZXggPD0gaW5kZXhNaW4pID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlTmV4dCA9ICghcmV3aW5kICYmIGluZGV4ID49IGluZGV4TWF4KSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChkaXNhYmxlUHJldiAmJiAhcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghZGlzYWJsZVByZXYgJiYgcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZU5leHQgJiYgIW5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIWRpc2FibGVOZXh0ICYmIG5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZHVyYXRpb25cbiAgZnVuY3Rpb24gcmVzZXREdXJhdGlvbiAoZWwsIHN0cikge1xuICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgZWwuc3R5bGVbVFJBTlNJVElPTkRVUkFUSU9OXSA9IHN0cjsgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVyV2lkdGggKCkge1xuICAgIHJldHVybiBmaXhlZFdpZHRoID8gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogc2xpZGVDb3VudE5ldyA6IHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnROZXddO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2VudGVyR2FwIChudW0pIHtcbiAgICBpZiAobnVtID09IG51bGwpIHsgbnVtID0gaW5kZXg7IH1cblxuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGd1dHRlciA6IDA7XG4gICAgcmV0dXJuIGF1dG9XaWR0aCA/ICgodmlld3BvcnQgLSBnYXApIC0gKHNsaWRlUG9zaXRpb25zW251bSArIDFdIC0gc2xpZGVQb3NpdGlvbnNbbnVtXSAtIGd1dHRlcikpLzIgOlxuICAgICAgZml4ZWRXaWR0aCA/ICh2aWV3cG9ydCAtIGZpeGVkV2lkdGgpIC8gMiA6XG4gICAgICAgIChpdGVtcyAtIDEpIC8gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJpZ2h0Qm91bmRhcnkgKCkge1xuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGd1dHRlciA6IDAsXG4gICAgICAgIHJlc3VsdCA9ICh2aWV3cG9ydCArIGdhcCkgLSBnZXRTbGlkZXJXaWR0aCgpO1xuXG4gICAgaWYgKGNlbnRlciAmJiAhbG9vcCkge1xuICAgICAgcmVzdWx0ID0gZml4ZWRXaWR0aCA/IC0gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogKHNsaWRlQ291bnROZXcgLSAxKSAtIGdldENlbnRlckdhcCgpIDpcbiAgICAgICAgZ2V0Q2VudGVyR2FwKHNsaWRlQ291bnROZXcgLSAxKSAtIHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnROZXcgLSAxXTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCA+IDApIHsgcmVzdWx0ID0gMDsgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlIChudW0pIHtcbiAgICBpZiAobnVtID09IG51bGwpIHsgbnVtID0gaW5kZXg7IH1cblxuICAgIHZhciB2YWw7XG4gICAgaWYgKGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCkge1xuICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgdmFsID0gLSAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBudW07XG4gICAgICAgIGlmIChjZW50ZXIpIHsgdmFsICs9IGdldENlbnRlckdhcCgpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGVub21pbmF0b3IgPSBUUkFOU0ZPUk0gPyBzbGlkZUNvdW50TmV3IDogaXRlbXM7XG4gICAgICAgIGlmIChjZW50ZXIpIHsgbnVtIC09IGdldENlbnRlckdhcCgpOyB9XG4gICAgICAgIHZhbCA9IC0gbnVtICogMTAwIC8gZGVub21pbmF0b3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IC0gc2xpZGVQb3NpdGlvbnNbbnVtXTtcbiAgICAgIGlmIChjZW50ZXIgJiYgYXV0b1dpZHRoKSB7XG4gICAgICAgIHZhbCArPSBnZXRDZW50ZXJHYXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzUmlnaHREZWFkWm9uZSkgeyB2YWwgPSBNYXRoLm1heCh2YWwsIHJpZ2h0Qm91bmRhcnkpOyB9XG5cbiAgICB2YWwgKz0gKGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCAmJiAhZml4ZWRXaWR0aCkgPyAnJScgOiAncHgnO1xuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50ICh2YWwpIHtcbiAgICByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJzBzJyk7XG4gICAgZG9Db250YWluZXJUcmFuc2Zvcm0odmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ29udGFpbmVyVHJhbnNmb3JtICh2YWwpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHsgdmFsID0gZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUoKTsgfVxuICAgIGNvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1BdHRyXSA9IHRyYW5zZm9ybVByZWZpeCArIHZhbCArIHRyYW5zZm9ybVBvc3RmaXg7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlU2xpZGUgKG51bWJlciwgY2xhc3NPdXQsIGNsYXNzSW4sIGlzT3V0KSB7XG4gICAgdmFyIGwgPSBudW1iZXIgKyBpdGVtcztcbiAgICBpZiAoIWxvb3ApIHsgbCA9IE1hdGgubWluKGwsIHNsaWRlQ291bnROZXcpOyB9XG5cbiAgICBmb3IgKHZhciBpID0gbnVtYmVyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcblxuICAgICAgLy8gc2V0IGl0ZW0gcG9zaXRpb25zXG4gICAgICBpZiAoIWlzT3V0KSB7IGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7IH1cblxuICAgICAgaWYgKGFuaW1hdGVEZWxheSAmJiBUUkFOU0lUSU9OREVMQVkpIHtcbiAgICAgICAgaXRlbS5zdHlsZVtUUkFOU0lUSU9OREVMQVldID0gaXRlbS5zdHlsZVtBTklNQVRJT05ERUxBWV0gPSBhbmltYXRlRGVsYXkgKiAoaSAtIG51bWJlcikgLyAxMDAwICsgJ3MnO1xuICAgICAgfVxuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgY2xhc3NPdXQpO1xuICAgICAgYWRkQ2xhc3MoaXRlbSwgY2xhc3NJbik7XG4gICAgICBcbiAgICAgIGlmIChpc091dCkgeyBzbGlkZUl0ZW1zT3V0LnB1c2goaXRlbSk7IH1cbiAgICB9XG4gIH1cblxuICAvLyBtYWtlIHRyYW5zZmVyIGFmdGVyIGNsaWNrL2RyYWc6XG4gIC8vIDEuIGNoYW5nZSAndHJhbnNmb3JtJyBwcm9wZXJ0eSBmb3IgbW9yZGVybiBicm93c2Vyc1xuICAvLyAyLiBjaGFuZ2UgJ2xlZnQnIHByb3BlcnR5IGZvciBsZWdhY3kgYnJvd3NlcnNcbiAgdmFyIHRyYW5zZm9ybUNvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYXJvdXNlbCA/XG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0RHVyYXRpb24oY29udGFpbmVyLCAnJyk7XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04gfHwgIXNwZWVkKSB7XG4gICAgICAgICAgLy8gZm9yIG1vcmRlbiBicm93c2VycyB3aXRoIG5vbi16ZXJvIGR1cmF0aW9uIG9yIFxuICAgICAgICAgIC8vIHplcm8gZHVyYXRpb24gZm9yIGFsbCBicm93c2Vyc1xuICAgICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtKCk7XG4gICAgICAgICAgLy8gcnVuIGZhbGxiYWNrIGZ1bmN0aW9uIG1hbnVhbGx5IFxuICAgICAgICAgIC8vIHdoZW4gZHVyYXRpb24gaXMgMCAvIGNvbnRhaW5lciBpcyBoaWRkZW5cbiAgICAgICAgICBpZiAoIXNwZWVkIHx8ICFpc1Zpc2libGUoY29udGFpbmVyKSkgeyBvblRyYW5zaXRpb25FbmQoKTsgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZm9yIG9sZCBicm93c2VyIHdpdGggbm9uLXplcm8gZHVyYXRpb25cbiAgICAgICAgICBqc1RyYW5zZm9ybShjb250YWluZXIsIHRyYW5zZm9ybUF0dHIsIHRyYW5zZm9ybVByZWZpeCwgdHJhbnNmb3JtUG9zdGZpeCwgZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUoKSwgc3BlZWQsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhvcml6b250YWwpIHsgdXBkYXRlQ29udGVudFdyYXBwZXJIZWlnaHQoKTsgfVxuICAgICAgfSA6XG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlSXRlbXNPdXQgPSBbXTtcblxuICAgICAgICB2YXIgZXZlID0ge307XG4gICAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IGV2ZVtBTklNQVRJT05FTkRdID0gb25UcmFuc2l0aW9uRW5kO1xuICAgICAgICByZW1vdmVFdmVudHMoc2xpZGVJdGVtc1tpbmRleENhY2hlZF0sIGV2ZSk7XG4gICAgICAgIGFkZEV2ZW50cyhzbGlkZUl0ZW1zW2luZGV4XSwgZXZlKTtcblxuICAgICAgICBhbmltYXRlU2xpZGUoaW5kZXhDYWNoZWQsIGFuaW1hdGVJbiwgYW5pbWF0ZU91dCwgdHJ1ZSk7XG4gICAgICAgIGFuaW1hdGVTbGlkZShpbmRleCwgYW5pbWF0ZU5vcm1hbCwgYW5pbWF0ZUluKTtcblxuICAgICAgICAvLyBydW4gZmFsbGJhY2sgZnVuY3Rpb24gbWFudWFsbHkgXG4gICAgICAgIC8vIHdoZW4gdHJhbnNpdGlvbiBvciBhbmltYXRpb24gbm90IHN1cHBvcnRlZCAvIGR1cmF0aW9uIGlzIDBcbiAgICAgICAgaWYgKCFUUkFOU0lUSU9ORU5EIHx8ICFBTklNQVRJT05FTkQgfHwgIXNwZWVkIHx8ICFpc1Zpc2libGUoY29udGFpbmVyKSkgeyBvblRyYW5zaXRpb25FbmQoKTsgfVxuICAgICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiByZW5kZXIgKGUsIHNsaWRlck1vdmVkKSB7XG4gICAgaWYgKHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtKSB7IHVwZGF0ZUluZGV4KCk7IH1cblxuICAgIC8vIHJlbmRlciB3aGVuIHNsaWRlciB3YXMgbW92ZWQgKHRvdWNoIG9yIGRyYWcpIGV2ZW4gdGhvdWdoIGluZGV4IG1heSBub3QgY2hhbmdlXG4gICAgaWYgKGluZGV4ICE9PSBpbmRleENhY2hlZCB8fCBzbGlkZXJNb3ZlZCkge1xuICAgICAgLy8gZXZlbnRzXG4gICAgICBldmVudHMuZW1pdCgnaW5kZXhDaGFuZ2VkJywgaW5mbygpKTtcbiAgICAgIGV2ZW50cy5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnLCBpbmZvKCkpO1xuICAgICAgaWYgKGF1dG9IZWlnaHQpIHsgZG9BdXRvSGVpZ2h0KCk7IH1cblxuICAgICAgLy8gcGF1c2UgYXV0b3BsYXkgd2hlbiBjbGljayBvciBrZXlkb3duIGZyb20gdXNlclxuICAgICAgaWYgKGFuaW1hdGluZyAmJiBlICYmIFsnY2xpY2snLCAna2V5ZG93biddLmluZGV4T2YoZS50eXBlKSA+PSAwKSB7IHN0b3BBdXRvcGxheSgpOyB9XG5cbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdHJhbnNmb3JtQ29yZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFRyYW5zZmVyIHByZWZpeGVkIHByb3BlcnRpZXMgdG8gdGhlIHNhbWUgZm9ybWF0XG4gICAqIENTUzogLVdlYmtpdC1UcmFuc2Zvcm0gPT4gd2Via2l0dHJhbnNmb3JtXG4gICAqIEpTOiBXZWJraXRUcmFuc2Zvcm0gPT4gd2Via2l0dHJhbnNmb3JtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBwcm9wZXJ0eVxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gc3RyVHJhbnMgKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tL2csICcnKTtcbiAgfVxuXG4gIC8vIEFGVEVSIFRSQU5TRk9STVxuICAvLyBUaGluZ3MgbmVlZCB0byBiZSBkb25lIGFmdGVyIGEgdHJhbnNmZXI6XG4gIC8vIDEuIGNoZWNrIGluZGV4XG4gIC8vIDIuIGFkZCBjbGFzc2VzIHRvIHZpc2libGUgc2xpZGVcbiAgLy8gMy4gZGlzYWJsZSBjb250cm9scyBidXR0b25zIHdoZW4gcmVhY2ggdGhlIGZpcnN0L2xhc3Qgc2xpZGUgaW4gbm9uLWxvb3Agc2xpZGVyXG4gIC8vIDQuIHVwZGF0ZSBuYXYgc3RhdHVzXG4gIC8vIDUuIGxhenlsb2FkIGltYWdlc1xuICAvLyA2LiB1cGRhdGUgY29udGFpbmVyIGhlaWdodFxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQgKGV2ZW50KSB7XG4gICAgLy8gY2hlY2sgcnVubmluZyBvbiBnYWxsZXJ5IG1vZGVcbiAgICAvLyBtYWtlIHN1cmUgdHJhbnRpb25lbmQvYW5pbWF0aW9uZW5kIGV2ZW50cyBydW4gb25seSBvbmNlXG4gICAgaWYgKGNhcm91c2VsIHx8IHJ1bm5pbmcpIHtcbiAgICAgIGV2ZW50cy5lbWl0KCd0cmFuc2l0aW9uRW5kJywgaW5mbyhldmVudCkpO1xuXG4gICAgICBpZiAoIWNhcm91c2VsICYmIHNsaWRlSXRlbXNPdXQubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlSXRlbXNPdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNPdXRbaV07XG4gICAgICAgICAgLy8gc2V0IGl0ZW0gcG9zaXRpb25zXG4gICAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gJyc7XG5cbiAgICAgICAgICBpZiAoQU5JTUFUSU9OREVMQVkgJiYgVFJBTlNJVElPTkRFTEFZKSB7IFxuICAgICAgICAgICAgaXRlbS5zdHlsZVtBTklNQVRJT05ERUxBWV0gPSAnJztcbiAgICAgICAgICAgIGl0ZW0uc3R5bGVbVFJBTlNJVElPTkRFTEFZXSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlT3V0KTtcbiAgICAgICAgICBhZGRDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiB1cGRhdGUgc2xpZGVzLCBuYXYsIGNvbnRyb2xzIGFmdGVyIGNoZWNraW5nIC4uLlxuICAgICAgICogPT4gbGVnYWN5IGJyb3dzZXJzIHdobyBkb24ndCBzdXBwb3J0ICdldmVudCcgXG4gICAgICAgKiAgICBoYXZlIHRvIGNoZWNrIGV2ZW50IGZpcnN0LCBvdGhlcndpc2UgZXZlbnQudGFyZ2V0IHdpbGwgY2F1c2UgYW4gZXJyb3IgXG4gICAgICAgKiA9PiBvciAnZ2FsbGVyeScgbW9kZTogXG4gICAgICAgKiAgICsgZXZlbnQgdGFyZ2V0IGlzIHNsaWRlIGl0ZW1cbiAgICAgICAqID0+IG9yICdjYXJvdXNlbCcgbW9kZTogXG4gICAgICAgKiAgICsgZXZlbnQgdGFyZ2V0IGlzIGNvbnRhaW5lciwgXG4gICAgICAgKiAgICsgZXZlbnQucHJvcGVydHkgaXMgdGhlIHNhbWUgd2l0aCB0cmFuc2Zvcm0gYXR0cmlidXRlXG4gICAgICAgKi9cbiAgICAgIGlmICghZXZlbnQgfHwgXG4gICAgICAgICAgIWNhcm91c2VsICYmIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlID09PSBjb250YWluZXIgfHwgXG4gICAgICAgICAgZXZlbnQudGFyZ2V0ID09PSBjb250YWluZXIgJiYgc3RyVHJhbnMoZXZlbnQucHJvcGVydHlOYW1lKSA9PT0gc3RyVHJhbnModHJhbnNmb3JtQXR0cikpIHtcblxuICAgICAgICBpZiAoIXVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtKSB7IFxuICAgICAgICAgIHZhciBpbmRleFRlbSA9IGluZGV4O1xuICAgICAgICAgIHVwZGF0ZUluZGV4KCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSBpbmRleFRlbSkgeyBcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KCdpbmRleENoYW5nZWQnLCBpbmZvKCkpO1xuXG4gICAgICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybVNpbGVudCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBpZiAobmVzdGVkID09PSAnaW5uZXInKSB7IGV2ZW50cy5lbWl0KCdpbm5lckxvYWRlZCcsIGluZm8oKSk7IH1cbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICBpbmRleENhY2hlZCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLy8gIyBBQ1RJT05TXG4gIGZ1bmN0aW9uIGdvVG8gKHRhcmdldEluZGV4LCBlKSB7XG4gICAgaWYgKGZyZWV6ZSkgeyByZXR1cm47IH1cblxuICAgIC8vIHByZXYgc2xpZGVCeVxuICAgIGlmICh0YXJnZXRJbmRleCA9PT0gJ3ByZXYnKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgLTEpO1xuXG4gICAgLy8gbmV4dCBzbGlkZUJ5XG4gICAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gJ25leHQnKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgMSk7XG5cbiAgICAvLyBnbyB0byBleGFjdCBzbGlkZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICBpZiAocHJldmVudEFjdGlvbldoZW5SdW5uaW5nKSB7IHJldHVybjsgfSBlbHNlIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cbiAgICAgIH1cblxuICAgICAgdmFyIGFic0luZGV4ID0gZ2V0QWJzSW5kZXgoKSwgXG4gICAgICAgICAgaW5kZXhHYXAgPSAwO1xuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09ICdmaXJzdCcpIHtcbiAgICAgICAgaW5kZXhHYXAgPSAtIGFic0luZGV4O1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4R2FwID0gY2Fyb3VzZWwgPyBzbGlkZUNvdW50IC0gaXRlbXMgLSBhYnNJbmRleCA6IHNsaWRlQ291bnQgLSAxIC0gYWJzSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldEluZGV4ICE9PSAnbnVtYmVyJykgeyB0YXJnZXRJbmRleCA9IHBhcnNlSW50KHRhcmdldEluZGV4KTsgfVxuXG4gICAgICAgIGlmICghaXNOYU4odGFyZ2V0SW5kZXgpKSB7XG4gICAgICAgICAgLy8gZnJvbSBkaXJlY3RseSBjYWxsZWQgZ29UbyBmdW5jdGlvblxuICAgICAgICAgIGlmICghZSkgeyB0YXJnZXRJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNsaWRlQ291bnQgLSAxLCB0YXJnZXRJbmRleCkpOyB9XG5cbiAgICAgICAgICBpbmRleEdhcCA9IHRhcmdldEluZGV4IC0gYWJzSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZ2FsbGVyeTogbWFrZSBzdXJlIG5ldyBwYWdlIHdvbid0IG92ZXJsYXAgd2l0aCBjdXJyZW50IHBhZ2VcbiAgICAgIGlmICghY2Fyb3VzZWwgJiYgaW5kZXhHYXAgJiYgTWF0aC5hYnMoaW5kZXhHYXApIDwgaXRlbXMpIHtcbiAgICAgICAgdmFyIGZhY3RvciA9IGluZGV4R2FwID4gMCA/IDEgOiAtMTtcbiAgICAgICAgaW5kZXhHYXAgKz0gKGluZGV4ICsgaW5kZXhHYXAgLSBzbGlkZUNvdW50KSA+PSBpbmRleE1pbiA/IHNsaWRlQ291bnQgKiBmYWN0b3IgOiBzbGlkZUNvdW50ICogMiAqIGZhY3RvciAqIC0xO1xuICAgICAgfVxuXG4gICAgICBpbmRleCArPSBpbmRleEdhcDtcblxuICAgICAgLy8gbWFrZSBzdXJlIGluZGV4IGlzIGluIHJhbmdlXG4gICAgICBpZiAoY2Fyb3VzZWwgJiYgbG9vcCkge1xuICAgICAgICBpZiAoaW5kZXggPCBpbmRleE1pbikgeyBpbmRleCArPSBzbGlkZUNvdW50OyB9XG4gICAgICAgIGlmIChpbmRleCA+IGluZGV4TWF4KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYgaW5kZXggaXMgY2hhbmdlZCwgc3RhcnQgcmVuZGVyaW5nXG4gICAgICBpZiAoZ2V0QWJzSW5kZXgoaW5kZXgpICE9PSBnZXRBYnNJbmRleChpbmRleENhY2hlZCkpIHtcbiAgICAgICAgcmVuZGVyKGUpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLy8gb24gY29udHJvbHMgY2xpY2tcbiAgZnVuY3Rpb24gb25Db250cm9sc0NsaWNrIChlLCBkaXIpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuICAgIHZhciBwYXNzRXZlbnRPYmplY3Q7XG5cbiAgICBpZiAoIWRpcikge1xuICAgICAgZSA9IGdldEV2ZW50KGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChlKTtcblxuICAgICAgd2hpbGUgKHRhcmdldCAhPT0gY29udHJvbHNDb250YWluZXIgJiYgW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KSA8IDApIHsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7IH1cblxuICAgICAgdmFyIHRhcmdldEluID0gW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXRJbiA+PSAwKSB7XG4gICAgICAgIHBhc3NFdmVudE9iamVjdCA9IHRydWU7XG4gICAgICAgIGRpciA9IHRhcmdldEluID09PSAwID8gLTEgOiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXdpbmQpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gaW5kZXhNaW4gJiYgZGlyID09PSAtMSkge1xuICAgICAgICBnb1RvKCdsYXN0JywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGluZGV4TWF4ICYmIGRpciA9PT0gMSkge1xuICAgICAgICBnb1RvKCdmaXJzdCcsIGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcikge1xuICAgICAgaW5kZXggKz0gc2xpZGVCeSAqIGRpcjtcbiAgICAgIGlmIChhdXRvV2lkdGgpIHsgaW5kZXggPSBNYXRoLmZsb29yKGluZGV4KTsgfVxuICAgICAgLy8gcGFzcyBlIHdoZW4gY2xpY2sgY29udHJvbCBidXR0b25zIG9yIGtleWRvd25cbiAgICAgIHJlbmRlcigocGFzc0V2ZW50T2JqZWN0IHx8IChlICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSkgPyBlIDogbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLy8gb24gbmF2IGNsaWNrXG4gIGZ1bmN0aW9uIG9uTmF2Q2xpY2sgKGUpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuICAgIFxuICAgIGUgPSBnZXRFdmVudChlKTtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGUpLCBuYXZJbmRleDtcblxuICAgIC8vIGZpbmQgdGhlIGNsaWNrZWQgbmF2IGl0ZW1cbiAgICB3aGlsZSAodGFyZ2V0ICE9PSBuYXZDb250YWluZXIgJiYgIWhhc0F0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSkgeyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTsgfVxuICAgIGlmIChoYXNBdHRyKHRhcmdldCwgJ2RhdGEtbmF2JykpIHtcbiAgICAgIHZhciBuYXZJbmRleCA9IG5hdkNsaWNrZWQgPSBOdW1iZXIoZ2V0QXR0cih0YXJnZXQsICdkYXRhLW5hdicpKSxcbiAgICAgICAgICB0YXJnZXRJbmRleEJhc2UgPSBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCA/IG5hdkluZGV4ICogc2xpZGVDb3VudCAvIHBhZ2VzIDogbmF2SW5kZXggKiBpdGVtcyxcbiAgICAgICAgICB0YXJnZXRJbmRleCA9IG5hdkFzVGh1bWJuYWlscyA/IG5hdkluZGV4IDogTWF0aC5taW4oTWF0aC5jZWlsKHRhcmdldEluZGV4QmFzZSksIHNsaWRlQ291bnQgLSAxKTtcbiAgICAgIGdvVG8odGFyZ2V0SW5kZXgsIGUpO1xuXG4gICAgICBpZiAobmF2Q3VycmVudEluZGV4ID09PSBuYXZJbmRleCkge1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSB7IHN0b3BBdXRvcGxheSgpOyB9XG4gICAgICAgIG5hdkNsaWNrZWQgPSAtMTsgLy8gcmVzZXQgbmF2Q2xpY2tlZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGF1dG9wbGF5IGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBzZXRBdXRvcGxheVRpbWVyICgpIHtcbiAgICBhdXRvcGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgb25Db250cm9sc0NsaWNrKG51bGwsIGF1dG9wbGF5RGlyZWN0aW9uKTtcbiAgICB9LCBhdXRvcGxheVRpbWVvdXQpO1xuXG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BBdXRvcGxheVRpbWVyICgpIHtcbiAgICBjbGVhckludGVydmFsKGF1dG9wbGF5VGltZXIpO1xuICAgIGFuaW1hdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQXV0b3BsYXlCdXR0b24gKGFjdGlvbiwgdHh0KSB7XG4gICAgc2V0QXR0cnMoYXV0b3BsYXlCdXR0b24sIHsnZGF0YS1hY3Rpb24nOiBhY3Rpb259KTtcbiAgICBhdXRvcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBhdXRvcGxheUh0bWxTdHJpbmdzWzBdICsgYWN0aW9uICsgYXV0b3BsYXlIdG1sU3RyaW5nc1sxXSArIHR4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0QXV0b3BsYXkgKCkge1xuICAgIHNldEF1dG9wbGF5VGltZXIoKTtcbiAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgdXBkYXRlQXV0b3BsYXlCdXR0b24oJ3N0b3AnLCBhdXRvcGxheVRleHRbMV0pOyB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wQXV0b3BsYXkgKCkge1xuICAgIHN0b3BBdXRvcGxheVRpbWVyKCk7XG4gICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7IHVwZGF0ZUF1dG9wbGF5QnV0dG9uKCdzdGFydCcsIGF1dG9wbGF5VGV4dFswXSk7IH1cbiAgfVxuXG4gIC8vIHByb2dyYW1haXRjYWxseSBwbGF5L3BhdXNlIHRoZSBzbGlkZXJcbiAgZnVuY3Rpb24gcGxheSAoKSB7XG4gICAgaWYgKGF1dG9wbGF5ICYmICFhbmltYXRpbmcpIHtcbiAgICAgIHN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgIGF1dG9wbGF5VXNlclBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICBhdXRvcGxheVVzZXJQYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUF1dG9wbGF5ICgpIHtcbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgIGF1dG9wbGF5VXNlclBhdXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgIGF1dG9wbGF5VXNlclBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSAoKSB7XG4gICAgaWYgKGRvYy5oaWRkZW4pIHtcbiAgICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgICAgc3RvcEF1dG9wbGF5VGltZXIoKTtcbiAgICAgICAgYXV0b3BsYXlWaXNpYmlsaXR5UGF1c2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCkge1xuICAgICAgc2V0QXV0b3BsYXlUaW1lcigpO1xuICAgICAgYXV0b3BsYXlWaXNpYmlsaXR5UGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VvdmVyUGF1c2UgKCkge1xuICAgIGlmIChhbmltYXRpbmcpIHsgXG4gICAgICBzdG9wQXV0b3BsYXlUaW1lcigpO1xuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VvdXRSZXN0YXJ0ICgpIHtcbiAgICBpZiAoYXV0b3BsYXlIb3ZlclBhdXNlZCkgeyBcbiAgICAgIHNldEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBrZXlkb3duIGV2ZW50cyBvbiBkb2N1bWVudCBcbiAgZnVuY3Rpb24gb25Eb2N1bWVudEtleWRvd24gKGUpIHtcbiAgICBlID0gZ2V0RXZlbnQoZSk7XG4gICAgdmFyIGtleUluZGV4ID0gW0tFWVMuTEVGVCwgS0VZUy5SSUdIVF0uaW5kZXhPZihlLmtleUNvZGUpO1xuXG4gICAgaWYgKGtleUluZGV4ID49IDApIHtcbiAgICAgIG9uQ29udHJvbHNDbGljayhlLCBrZXlJbmRleCA9PT0gMCA/IC0xIDogMSk7XG4gICAgfVxuICB9XG5cbiAgLy8gb24ga2V5IGNvbnRyb2xcbiAgZnVuY3Rpb24gb25Db250cm9sc0tleWRvd24gKGUpIHtcbiAgICBlID0gZ2V0RXZlbnQoZSk7XG4gICAgdmFyIGtleUluZGV4ID0gW0tFWVMuTEVGVCwgS0VZUy5SSUdIVF0uaW5kZXhPZihlLmtleUNvZGUpO1xuXG4gICAgaWYgKGtleUluZGV4ID49IDApIHtcbiAgICAgIGlmIChrZXlJbmRleCA9PT0gMCkge1xuICAgICAgICBpZiAoIXByZXZCdXR0b24uZGlzYWJsZWQpIHsgb25Db250cm9sc0NsaWNrKGUsIC0xKTsgfVxuICAgICAgfSBlbHNlIGlmICghbmV4dEJ1dHRvbi5kaXNhYmxlZCkge1xuICAgICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IGZvY3VzXG4gIGZ1bmN0aW9uIHNldEZvY3VzIChlbCkge1xuICAgIGVsLmZvY3VzKCk7XG4gIH1cblxuICAvLyBvbiBrZXkgbmF2XG4gIGZ1bmN0aW9uIG9uTmF2S2V5ZG93biAoZSkge1xuICAgIGUgPSBnZXRFdmVudChlKTtcbiAgICB2YXIgY3VyRWxlbWVudCA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgIGlmICghaGFzQXR0cihjdXJFbGVtZW50LCAnZGF0YS1uYXYnKSkgeyByZXR1cm47IH1cblxuICAgIC8vIHZhciBjb2RlID0gZS5rZXlDb2RlLFxuICAgIHZhciBrZXlJbmRleCA9IFtLRVlTLkxFRlQsIEtFWVMuUklHSFQsIEtFWVMuRU5URVIsIEtFWVMuU1BBQ0VdLmluZGV4T2YoZS5rZXlDb2RlKSxcbiAgICAgICAgbmF2SW5kZXggPSBOdW1iZXIoZ2V0QXR0cihjdXJFbGVtZW50LCAnZGF0YS1uYXYnKSk7XG5cbiAgICBpZiAoa2V5SW5kZXggPj0gMCkge1xuICAgICAgaWYgKGtleUluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmIChuYXZJbmRleCA+IDApIHsgc2V0Rm9jdXMobmF2SXRlbXNbbmF2SW5kZXggLSAxXSk7IH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5SW5kZXggPT09IDEpIHtcbiAgICAgICAgaWYgKG5hdkluZGV4IDwgcGFnZXMgLSAxKSB7IHNldEZvY3VzKG5hdkl0ZW1zW25hdkluZGV4ICsgMV0pOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZDbGlja2VkID0gbmF2SW5kZXg7XG4gICAgICAgIGdvVG8obmF2SW5kZXgsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV2ZW50IChlKSB7XG4gICAgZSA9IGUgfHwgd2luLmV2ZW50O1xuICAgIHJldHVybiBpc1RvdWNoRXZlbnQoZSkgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZTtcbiAgfVxuICBmdW5jdGlvbiBnZXRUYXJnZXQgKGUpIHtcbiAgICByZXR1cm4gZS50YXJnZXQgfHwgd2luLmV2ZW50LnNyY0VsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RvdWNoRXZlbnQgKGUpIHtcbiAgICByZXR1cm4gZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPj0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0QmVoYXZpb3IgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TW92ZURpcmVjdGlvbkV4cGVjdGVkICgpIHtcbiAgICByZXR1cm4gZ2V0VG91Y2hEaXJlY3Rpb24odG9EZWdyZWUobGFzdFBvc2l0aW9uLnkgLSBpbml0UG9zaXRpb24ueSwgbGFzdFBvc2l0aW9uLnggLSBpbml0UG9zaXRpb24ueCksIHN3aXBlQW5nbGUpID09PSBvcHRpb25zLmF4aXM7XG4gIH1cblxuICBmdW5jdGlvbiBvblBhblN0YXJ0IChlKSB7XG4gICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgIGlmIChwcmV2ZW50QWN0aW9uV2hlblJ1bm5pbmcpIHsgcmV0dXJuOyB9IGVsc2UgeyBvblRyYW5zaXRpb25FbmQoKTsgfVxuICAgIH1cblxuICAgIGlmIChhdXRvcGxheSAmJiBhbmltYXRpbmcpIHsgc3RvcEF1dG9wbGF5VGltZXIoKTsgfVxuICAgIFxuICAgIHBhblN0YXJ0ID0gdHJ1ZTtcbiAgICBpZiAocmFmSW5kZXgpIHtcbiAgICAgIGNhZihyYWZJbmRleCk7XG4gICAgICByYWZJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyICQgPSBnZXRFdmVudChlKTtcbiAgICBldmVudHMuZW1pdChpc1RvdWNoRXZlbnQoZSkgPyAndG91Y2hTdGFydCcgOiAnZHJhZ1N0YXJ0JywgaW5mbyhlKSk7XG5cbiAgICBpZiAoIWlzVG91Y2hFdmVudChlKSAmJiBbJ2ltZycsICdhJ10uaW5kZXhPZihnZXRMb3dlckNhc2VOb2RlTmFtZShnZXRUYXJnZXQoZSkpKSA+PSAwKSB7XG4gICAgICBwcmV2ZW50RGVmYXVsdEJlaGF2aW9yKGUpO1xuICAgIH1cblxuICAgIGxhc3RQb3NpdGlvbi54ID0gaW5pdFBvc2l0aW9uLnggPSAkLmNsaWVudFg7XG4gICAgbGFzdFBvc2l0aW9uLnkgPSBpbml0UG9zaXRpb24ueSA9ICQuY2xpZW50WTtcbiAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgIHRyYW5zbGF0ZUluaXQgPSBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1BdHRyXS5yZXBsYWNlKHRyYW5zZm9ybVByZWZpeCwgJycpKTtcbiAgICAgIHJlc2V0RHVyYXRpb24oY29udGFpbmVyLCAnMHMnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBhbk1vdmUgKGUpIHtcbiAgICBpZiAocGFuU3RhcnQpIHtcbiAgICAgIHZhciAkID0gZ2V0RXZlbnQoZSk7XG4gICAgICBsYXN0UG9zaXRpb24ueCA9ICQuY2xpZW50WDtcbiAgICAgIGxhc3RQb3NpdGlvbi55ID0gJC5jbGllbnRZO1xuXG4gICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgaWYgKCFyYWZJbmRleCkgeyByYWZJbmRleCA9IHJhZihmdW5jdGlvbigpeyBwYW5VcGRhdGUoZSk7IH0pOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobW92ZURpcmVjdGlvbkV4cGVjdGVkID09PSAnPycpIHsgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gZ2V0TW92ZURpcmVjdGlvbkV4cGVjdGVkKCk7IH1cbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCkgeyBwcmV2ZW50U2Nyb2xsID0gdHJ1ZTsgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJldmVudFNjcm9sbCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYW5VcGRhdGUgKGUpIHtcbiAgICBpZiAoIW1vdmVEaXJlY3Rpb25FeHBlY3RlZCkge1xuICAgICAgcGFuU3RhcnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FmKHJhZkluZGV4KTtcbiAgICBpZiAocGFuU3RhcnQpIHsgcmFmSW5kZXggPSByYWYoZnVuY3Rpb24oKXsgcGFuVXBkYXRlKGUpOyB9KTsgfVxuXG4gICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9PT0gJz8nKSB7IG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9IGdldE1vdmVEaXJlY3Rpb25FeHBlY3RlZCgpOyB9XG4gICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCkge1xuICAgICAgaWYgKCFwcmV2ZW50U2Nyb2xsICYmIGlzVG91Y2hFdmVudChlKSkgeyBwcmV2ZW50U2Nyb2xsID0gdHJ1ZTsgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZS50eXBlKSB7IGV2ZW50cy5lbWl0KGlzVG91Y2hFdmVudChlKSA/ICd0b3VjaE1vdmUnIDogJ2RyYWdNb3ZlJywgaW5mbyhlKSk7IH1cbiAgICAgIH0gY2F0Y2goZXJyKSB7fVxuXG4gICAgICB2YXIgeCA9IHRyYW5zbGF0ZUluaXQsXG4gICAgICAgICAgZGlzdCA9IGdldERpc3QobGFzdFBvc2l0aW9uLCBpbml0UG9zaXRpb24pO1xuICAgICAgaWYgKCFob3Jpem9udGFsIHx8IGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSB7XG4gICAgICAgIHggKz0gZGlzdDtcbiAgICAgICAgeCArPSAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBlcmNlbnRhZ2VYID0gVFJBTlNGT1JNID8gZGlzdCAqIGl0ZW1zICogMTAwIC8gKCh2aWV3cG9ydCArIGd1dHRlcikgKiBzbGlkZUNvdW50TmV3KTogZGlzdCAqIDEwMCAvICh2aWV3cG9ydCArIGd1dHRlcik7XG4gICAgICAgIHggKz0gcGVyY2VudGFnZVg7XG4gICAgICAgIHggKz0gJyUnO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0gPSB0cmFuc2Zvcm1QcmVmaXggKyB4ICsgdHJhbnNmb3JtUG9zdGZpeDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBhbkVuZCAoZSkge1xuICAgIGlmIChwYW5TdGFydCkge1xuICAgICAgaWYgKHJhZkluZGV4KSB7XG4gICAgICAgIGNhZihyYWZJbmRleCk7XG4gICAgICAgIHJhZkluZGV4ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChjYXJvdXNlbCkgeyByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJycpOyB9XG4gICAgICBwYW5TdGFydCA9IGZhbHNlO1xuXG4gICAgICB2YXIgJCA9IGdldEV2ZW50KGUpO1xuICAgICAgbGFzdFBvc2l0aW9uLnggPSAkLmNsaWVudFg7XG4gICAgICBsYXN0UG9zaXRpb24ueSA9ICQuY2xpZW50WTtcbiAgICAgIHZhciBkaXN0ID0gZ2V0RGlzdChsYXN0UG9zaXRpb24sIGluaXRQb3NpdGlvbik7XG5cbiAgICAgIGlmIChNYXRoLmFicyhkaXN0KSkge1xuICAgICAgICAvLyBkcmFnIHZzIGNsaWNrXG4gICAgICAgIGlmICghaXNUb3VjaEV2ZW50KGUpKSB7XG4gICAgICAgICAgLy8gcHJldmVudCBcImNsaWNrXCJcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGUpO1xuICAgICAgICAgIGFkZEV2ZW50cyh0YXJnZXQsIHsnY2xpY2snOiBmdW5jdGlvbiBwcmV2ZW50Q2xpY2sgKGUpIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0QmVoYXZpb3IoZSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudHModGFyZ2V0LCB7J2NsaWNrJzogcHJldmVudENsaWNrfSk7XG4gICAgICAgICAgfX0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgICAgIHJhZkluZGV4ID0gcmFmKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCkge1xuICAgICAgICAgICAgICB2YXIgaW5kZXhNb3ZlZCA9IC0gZGlzdCAqIGl0ZW1zIC8gKHZpZXdwb3J0ICsgZ3V0dGVyKTtcbiAgICAgICAgICAgICAgaW5kZXhNb3ZlZCA9IGRpc3QgPiAwID8gTWF0aC5mbG9vcihpbmRleE1vdmVkKSA6IE1hdGguY2VpbChpbmRleE1vdmVkKTtcbiAgICAgICAgICAgICAgaW5kZXggKz0gaW5kZXhNb3ZlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBtb3ZlZCA9IC0gKHRyYW5zbGF0ZUluaXQgKyBkaXN0KTtcbiAgICAgICAgICAgICAgaWYgKG1vdmVkIDw9IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGluZGV4TWluO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVkID49IHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnROZXcgLSAxXSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaW5kZXhNYXg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc2xpZGVDb3VudE5ldyAmJiBtb3ZlZCA+PSBzbGlkZVBvc2l0aW9uc1tpXSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1vdmVkID4gc2xpZGVQb3NpdGlvbnNbaV0gJiYgZGlzdCA8IDApIHsgaW5kZXggKz0gMTsgfVxuICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXIoZSwgZGlzdCk7XG4gICAgICAgICAgICBldmVudHMuZW1pdChpc1RvdWNoRXZlbnQoZSkgPyAndG91Y2hFbmQnIDogJ2RyYWdFbmQnLCBpbmZvKGUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobW92ZURpcmVjdGlvbkV4cGVjdGVkKSB7XG4gICAgICAgICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgZGlzdCA+IDAgPyAtMSA6IDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0XG4gICAgaWYgKG9wdGlvbnMucHJldmVudFNjcm9sbE9uVG91Y2ggPT09ICdhdXRvJykgeyBwcmV2ZW50U2Nyb2xsID0gZmFsc2U7IH1cbiAgICBpZiAoc3dpcGVBbmdsZSkgeyBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgPSAnPyc7IH0gXG4gICAgaWYgKGF1dG9wbGF5ICYmICFhbmltYXRpbmcpIHsgc2V0QXV0b3BsYXlUaW1lcigpOyB9XG4gIH1cblxuICAvLyA9PT0gUkVTSVpFIEZVTkNUSU9OUyA9PT0gLy9cbiAgLy8gKHNsaWRlUG9zaXRpb25zLCBpbmRleCwgaXRlbXMpID0+IHZlcnRpY2FsX2NvbmVudFdyYXBwZXIuaGVpZ2h0XG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0ICgpIHtcbiAgICB2YXIgd3AgPSBtaWRkbGVXcmFwcGVyID8gbWlkZGxlV3JhcHBlciA6IGlubmVyV3JhcHBlcjtcbiAgICB3cC5zdHlsZS5oZWlnaHQgPSBzbGlkZVBvc2l0aW9uc1tpbmRleCArIGl0ZW1zXSAtIHNsaWRlUG9zaXRpb25zW2luZGV4XSArICdweCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYWdlcyAoKSB7XG4gICAgdmFyIHJvdWdoID0gZml4ZWRXaWR0aCA/IChmaXhlZFdpZHRoICsgZ3V0dGVyKSAqIHNsaWRlQ291bnQgLyB2aWV3cG9ydCA6IHNsaWRlQ291bnQgLyBpdGVtcztcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5jZWlsKHJvdWdoKSwgc2xpZGVDb3VudCk7XG4gIH1cblxuICAvKlxuICAgKiAxLiB1cGRhdGUgdmlzaWJsZSBuYXYgaXRlbXMgbGlzdFxuICAgKiAyLiBhZGQgXCJoaWRkZW5cIiBhdHRyaWJ1dGVzIHRvIHByZXZpb3VzIHZpc2libGUgbmF2IGl0ZW1zXG4gICAqIDMuIHJlbW92ZSBcImhpZGRlblwiIGF0dHJ1YnV0ZXMgdG8gbmV3IHZpc2libGUgbmF2IGl0ZW1zXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVOYXZWaXNpYmlsaXR5ICgpIHtcbiAgICBpZiAoIW5hdiB8fCBuYXZBc1RodW1ibmFpbHMpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAocGFnZXMgIT09IHBhZ2VzQ2FjaGVkKSB7XG4gICAgICB2YXIgbWluID0gcGFnZXNDYWNoZWQsXG4gICAgICAgICAgbWF4ID0gcGFnZXMsXG4gICAgICAgICAgZm4gPSBzaG93RWxlbWVudDtcblxuICAgICAgaWYgKHBhZ2VzQ2FjaGVkID4gcGFnZXMpIHtcbiAgICAgICAgbWluID0gcGFnZXM7XG4gICAgICAgIG1heCA9IHBhZ2VzQ2FjaGVkO1xuICAgICAgICBmbiA9IGhpZGVFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAobWluIDwgbWF4KSB7XG4gICAgICAgIGZuKG5hdkl0ZW1zW21pbl0pO1xuICAgICAgICBtaW4rKztcbiAgICAgIH1cblxuICAgICAgLy8gY2FjaGUgcGFnZXNcbiAgICAgIHBhZ2VzQ2FjaGVkID0gcGFnZXM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5mbyAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHNsaWRlSXRlbXM6IHNsaWRlSXRlbXMsXG4gICAgICBuYXZDb250YWluZXI6IG5hdkNvbnRhaW5lcixcbiAgICAgIG5hdkl0ZW1zOiBuYXZJdGVtcyxcbiAgICAgIGNvbnRyb2xzQ29udGFpbmVyOiBjb250cm9sc0NvbnRhaW5lcixcbiAgICAgIGhhc0NvbnRyb2xzOiBoYXNDb250cm9scyxcbiAgICAgIHByZXZCdXR0b246IHByZXZCdXR0b24sXG4gICAgICBuZXh0QnV0dG9uOiBuZXh0QnV0dG9uLFxuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgc2xpZGVCeTogc2xpZGVCeSxcbiAgICAgIGNsb25lQ291bnQ6IGNsb25lQ291bnQsXG4gICAgICBzbGlkZUNvdW50OiBzbGlkZUNvdW50LFxuICAgICAgc2xpZGVDb3VudE5ldzogc2xpZGVDb3VudE5ldyxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGluZGV4Q2FjaGVkOiBpbmRleENhY2hlZCxcbiAgICAgIGRpc3BsYXlJbmRleDogZ2V0Q3VycmVudFNsaWRlKCksXG4gICAgICBuYXZDdXJyZW50SW5kZXg6IG5hdkN1cnJlbnRJbmRleCxcbiAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZDogbmF2Q3VycmVudEluZGV4Q2FjaGVkLFxuICAgICAgcGFnZXM6IHBhZ2VzLFxuICAgICAgcGFnZXNDYWNoZWQ6IHBhZ2VzQ2FjaGVkLFxuICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgaXNPbjogaXNPbixcbiAgICAgIGV2ZW50OiBlIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICcyLjkuMicsXG4gICAgZ2V0SW5mbzogaW5mbyxcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBnb1RvOiBnb1RvLFxuICAgIHBsYXk6IHBsYXksXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGlzT246IGlzT24sXG4gICAgdXBkYXRlU2xpZGVySGVpZ2h0OiB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQsXG4gICAgcmVmcmVzaDogaW5pdFNsaWRlclRyYW5zZm9ybSxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHJlYnVpbGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRucyhleHRlbmQob3B0aW9ucywgb3B0aW9uc0VsZW1lbnRzKSk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL2hlbGxvJ1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zaWRlYmFyJ1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21vZGFsJ1xyXG4iLCJjb25zb2xlLmxvZygnaGVsbG8nKSIsIlxyXG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJzsgXHJcblxyXG5jb25zdCB5b3V0dWJlRnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJhbWUnKVxyXG5jb25zdCB5b3V0dWJlU3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1NPZ29lanh6RjhjP2NvbnRyb2xzPTAnXHJcblxyXG5NaWNyb01vZGFsLmluaXQoe1xyXG4gIG9uQ2xvc2U6ICgpID0+IHsgICAgXHJcbiAgICB5b3V0dWJlRnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCAnJylcclxuICAgIGNvbnNvbGUubG9nKCdjbG9zZScpXHJcbiAgfSxcclxuICBvblNob3c6ICgpID0+IHsgICAgXHJcbiAgICB5b3V0dWJlRnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB5b3V0dWJlU3JjKVxyXG4gIH0sXHJcbiAgb3BlblRyaWdnZXI6ICdkYXRhLXZpZGVvLW9wZW4nLFxyXG4gIGNsb3NlVHJpZ2dlcjogJ2RhdGEtdmlkZW8tY2xvc2UnLFxyXG59KTtcclxuXHJcblxyXG5NaWNyb01vZGFsLmluaXQoe1xyXG4gIG9wZW5UcmlnZ2VyOiAnZGF0YS1tb2RhbC1vcGVuJyxcclxuICBjbG9zZVRyaWdnZXI6ICdkYXRhLW1vZGFsLWNsb3NlJyxcclxufSk7XHJcblxyXG4iLCIvLyAkKFwiI21lbnVfdG9nZ2xlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAkKFwiI3NpZGViYXJfbmF2LCAjb3ZlcmxheV9iZ1wiKS50b2dnbGVDbGFzcyhcInNob3dcIik7XHJcbi8vICAgfSk7XHJcbi8vICAgJChcIiNvdmVybGF5X2JnXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAkKFwiI3NpZGViYXJfbmF2LCAjb3ZlcmxheV9iZ1wiKS50b2dnbGVDbGFzcyhcInNob3dcIik7XHJcbi8vICAgfSk7XHJcblxyXG5cclxuY29uc3QgbWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGVyJylcclxuY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2JylcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWJrZycpXHJcblxyXG5tZW51VG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgc2lkZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93JylcclxuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKVxyXG59KSBcclxuXHJcbnNpZGVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuIGlmKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpKXtcclxuICBzaWRlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKVxyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXHJcbiB9IFxyXG59KVxyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgc2lkZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93JylcclxuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKVxyXG59KSAiLCJcclxuaW1wb3J0IHsgdG5zIH0gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy90aW55LXNsaWRlcidcclxuXHJcblxyXG4vKlxyXG5cclxuU0xJREVSIElOSVRcclxuXHJcbiovXHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIikpIHtcclxuICB2YXIgc2xpZGVyID0gdG5zKHtcclxuICAgIG5hdkNvbnRhaW5lcjogXCIuc2xpZGVyLWNvbnRyb2xzXCIsXHJcbiAgICBuYXZBc1RodW1ibmFpbHM6IHRydWUsXHJcbiAgICBjb250cm9sczogZmFsc2UsXHJcbiAgICB0b3VjaDogZmFsc2VcclxuICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=