webpackJsonp([1],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var ScrollPanel = function (_React$Component) {
    _inherits(ScrollPanel, _React$Component);

    function ScrollPanel(props) {
        _classCallCheck(this, ScrollPanel);

        return _possibleConstructorReturn(this, (ScrollPanel.__proto__ || Object.getPrototypeOf(ScrollPanel)).call(this, props));
    }

    _createClass(ScrollPanel, [{
        key: "render",
        value: function render() {
            var _props$className = this.props.className,
                className = _props$className === undefined ? "" : _props$className;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, ref: this.props.registerRef || function () {} }, this.props.content);
        }
    }]);

    return ScrollPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dummyText; });
var dummyText = "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces\nDummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.\n\nThe usefulness of nonsensical content\nDummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.\n\nIncomprehensibility or readability? That is the question.\nThe most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.\n\nOne disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.\n\nThere is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.\n\nOrigin and meaning of the Lorem Ipsum text\nAccording to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find and eventually recognized it as a passage from 'De finibus bonorum et malorum' (On the extremes of Good and Evil) by Cicero, a book that was very popular in the Middle Ages: \"Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit... \" (Approximately: \"Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain...\"). A typical Lorem Ipsum text goes like this: \"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim ...\".\n\nIt seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.\n\nIn the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.\n\nAutomatic recognition of Lorem Ipsum during the pre-press workflow\nThe spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.\n\nThe phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence \"Lorem ipsum\". Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.\n\nCertain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.";

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(29);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */], null), document.getElementById("root"));

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(30);


var App = function App() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "appcontainer" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "toolcontainer" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Synchronize Scroll in React Components")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components__["a" /* ScrollContainer */], { className: "scrollcontainer" }));
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollContainer__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__scrollContainer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrollPanel__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__(16);
/* unused harmony reexport dummyText */




/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrollPanel__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ScrollContainer = function (_React$Component) {
    _inherits(ScrollContainer, _React$Component);

    function ScrollContainer(props) {
        _classCallCheck(this, ScrollContainer);

        var _this = _possibleConstructorReturn(this, (ScrollContainer.__proto__ || Object.getPrototypeOf(ScrollContainer)).call(this, props));

        _this.childs = [];
        _this.setChild = function (ref) {
            _this.childs.push({
                ref: ref,
                pauseScrollFunction: _this.debouncedPauseScrollEvent(ref)
            });
        };
        _this.handleChildScroll = function (callerRef) {
            return function () {
                window.requestAnimationFrame(function () {
                    _this.childs.filter(function (child) {
                        return child.ref !== callerRef;
                    }).forEach(function (child) {
                        child.pauseScrollFunction();
                        _this.doScrollOnChild(child.ref, _this.getRelativeScroll(callerRef));
                    });
                });
            };
        };
        _this.doScrollOnChild = function (ref, value) {
            ref.scrollTop = value * (ref.scrollHeight - ref.clientHeight);
        };
        _this.getRelativeScroll = function (ref) {
            return ref.scrollTop / (ref.scrollHeight - ref.clientHeight);
        };
        _this.debouncedPauseScrollEvent = function (ref) {
            return __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default()(function () {
                ref.onscroll = ref.onscroll ? null : _this.handleChildScroll(ref);
            }, 250, { leading: true, trailing: true });
        };
        return _this;
    }

    _createClass(ScrollContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.childs.forEach(function (child) {
                return child.ref.onscroll = _this2.handleChildScroll(child.ref);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props$className = this.props.className,
                className = _props$className === undefined ? "" : _props$className;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__scrollPanel__["a" /* ScrollPanel */], { className: "scrollpanel", content: __WEBPACK_IMPORTED_MODULE_2__content__["a" /* dummyText */] + __WEBPACK_IMPORTED_MODULE_2__content__["a" /* dummyText */], registerRef: this.setChild }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__scrollPanel__["a" /* ScrollPanel */], { className: "scrollpanel", content: __WEBPACK_IMPORTED_MODULE_2__content__["a" /* dummyText */], registerRef: this.setChild }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__scrollPanel__["a" /* ScrollPanel */], { className: "scrollpanel", content: __WEBPACK_IMPORTED_MODULE_2__content__["a" /* dummyText */] + __WEBPACK_IMPORTED_MODULE_2__content__["a" /* dummyText */] + __WEBPACK_IMPORTED_MODULE_2__content__["a" /* dummyText */], registerRef: this.setChild }));
        }
    }]);

    return ScrollContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

},[17]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njcm9sbFBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zY3JvbGxDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQVF6QixJQUFtQjs7O0FBQ3ZCLHlCQUFpQjtBQUNWOzt5SEFDUDtBQUVhOzs7OztBQUNMLG1DQUF1QixLQUFPO2dCQUFwQiw2Q0FBTTs7QUFDZixtQkFDTCw4REFBYyxXQUFXLFdBQUssS0FBTSxLQUFNLE1BQWdCLGVBQU0sWUFBRSxDQUFFLEtBQzdELEtBQU0sTUFHakI7QUFDRDs7OztFQWJxQyxnREFBcUIsRTs7Ozs7Ozs7O0FDUnBELElBeUJnWix3ekw7Ozs7Ozs7Ozs7Ozs7O0FDekJ4WDtBQUNPO0FBQ1Y7QUFFcEIsaURBQU8sQ0FDYixxREFBSSxtREFBRSxPQUNFLFNBQWUsZUFDdkIsUzs7Ozs7Ozs7Ozs7O0FDUDZCO0FBQ3dDO0FBRWpFLElBQVUsTUFBc0M7QUFDN0MsV0FDTCw4REFBYyxXQUFlLGtCQUMzQiw4REFBYyxXQUFnQixtQkFDNUIsaUVBQ0ksNENBQ04scURBQWdCLHdFQUFVLFdBR2hDO0FBQUUsQ0FUSyxDOzs7Ozs7Ozs7Ozs7OztBQ0gyQjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQztBQUNhO0FBQ047QUFDQztBQVdqQyxJQUF1Qjs7O0FBQzNCLDZCQUFpQjtBQUNWOztz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUN4WEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICByZWdpc3RlclJlZj86IChyZWYpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Y2xhc3NOYW1lID0gXCJcIn0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcmVmPXt0aGlzLnByb3BzLnJlZ2lzdGVyUmVmIHx8ICgoKSA9PiB7fSkgfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2Nyb2xsUGFuZWwudHN4IiwiZXhwb3J0IGNvbnN0IGR1bW15VGV4dCA9IGBEdW1teSB0ZXh0OiBJdHMgZnVuY3Rpb24gYXMgYSBmaWxsZXIgb3IgYXMgYSB0b29sIGZvciBjb21wYXJpbmcgdGhlIHZpc3VhbCBpbXByZXNzaW9uIG9mIGRpZmZlcmVudCB0eXBlZmFjZXNcclxuRHVtbXkgdGV4dCBpcyB0ZXh0IHRoYXQgaXMgdXNlZCBpbiB0aGUgcHVibGlzaGluZyBpbmR1c3RyeSBvciBieSB3ZWIgZGVzaWduZXJzIHRvIG9jY3VweSB0aGUgc3BhY2Ugd2hpY2ggd2lsbCBsYXRlciBiZSBmaWxsZWQgd2l0aCAncmVhbCcgY29udGVudC4gVGhpcyBpcyByZXF1aXJlZCB3aGVuLCBmb3IgZXhhbXBsZSwgdGhlIGZpbmFsIHRleHQgaXMgbm90IHlldCBhdmFpbGFibGUuIER1bW15IHRleHQgaXMgYWxzbyBrbm93biBhcyAnZmlsbCB0ZXh0Jy4gSXQgaXMgc2FpZCB0aGF0IHNvbmcgY29tcG9zZXJzIG9mIHRoZSBwYXN0IHVzZWQgZHVtbXkgdGV4dHMgYXMgbHlyaWNzIHdoZW4gd3JpdGluZyBtZWxvZGllcyBpbiBvcmRlciB0byBoYXZlIGEgJ3JlYWR5LW1hZGUnIHRleHQgdG8gc2luZyB3aXRoIHRoZSBtZWxvZHkuIER1bW15IHRleHRzIGhhdmUgYmVlbiBpbiB1c2UgYnkgdHlwZXNldHRlcnMgc2luY2UgdGhlIDE2dGggY2VudHVyeS5cclxuXHJcblRoZSB1c2VmdWxuZXNzIG9mIG5vbnNlbnNpY2FsIGNvbnRlbnRcclxuRHVtbXkgdGV4dCBpcyBhbHNvIHVzZWQgdG8gZGVtb25zdHJhdGUgdGhlIGFwcGVhcmFuY2Ugb2YgZGlmZmVyZW50IHR5cGVmYWNlcyBhbmQgbGF5b3V0cywgYW5kIGluIGdlbmVyYWwgdGhlIGNvbnRlbnQgb2YgZHVtbXkgdGV4dCBpcyBub25zZW5zaWNhbC4gRHVlIHRvIGl0cyB3aWRlc3ByZWFkIHVzZSBhcyBmaWxsZXIgdGV4dCBmb3IgbGF5b3V0cywgbm9uLXJlYWRhYmlsaXR5IGlzIG9mIGdyZWF0IGltcG9ydGFuY2U6IGh1bWFuIHBlcmNlcHRpb24gaXMgdHVuZWQgdG8gcmVjb2duaXplIGNlcnRhaW4gcGF0dGVybnMgYW5kIHJlcGV0aXRpb25zIGluIHRleHRzLiBJZiB0aGUgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMgYW5kICd3b3JkcycgaXMgcmFuZG9tLCB0aGUgcmVhZGVyIHdpbGwgbm90IGJlIGRpc3RyYWN0ZWQgZnJvbSBtYWtpbmcgYSBuZXV0cmFsIGp1ZGdlbWVudCBvbiB0aGUgdmlzdWFsIGltcGFjdCBhbmQgcmVhZGFiaWxpdHkgb2YgdGhlIHR5cGVmYWNlcyAodHlwb2dyYXBoeSksIG9yIHRoZSBkaXN0cmlidXRpb24gb2YgdGV4dCBvbiB0aGUgcGFnZSAobGF5b3V0IG9yIHR5cGUgYXJlYSkuIEZvciB0aGlzIHJlYXNvbiwgZHVtbXkgdGV4dCB1c3VhbGx5IGNvbnNpc3RzIG9mIGEgbW9yZSBvciBsZXNzIHJhbmRvbSBzZXJpZXMgb2Ygd29yZHMgb3Igc3lsbGFibGVzLiBUaGlzIHByZXZlbnRzIHJlcGV0aXRpdmUgcGF0dGVybnMgZnJvbSBpbXBhaXJpbmcgdGhlIG92ZXJhbGwgdmlzdWFsIGltcHJlc3Npb24gYW5kIGZhY2lsaXRhdGVzIHRoZSBjb21wYXJpc29uIG9mIGRpZmZlcmVudCB0eXBlZmFjZXMuIEZ1cnRoZXJtb3JlLCBpdCBpcyBhZHZhbnRhZ2VvdXMgd2hlbiB0aGUgZHVtbXkgdGV4dCBpcyByZWxhdGl2ZWx5IHJlYWxpc3RpYyBzbyB0aGF0IHRoZSBsYXlvdXQgaW1wcmVzc2lvbiBvZiB0aGUgZmluYWwgcHVibGljYXRpb24gaXMgbm90IGNvbXByb21pc2VkLlxyXG5cclxuSW5jb21wcmVoZW5zaWJpbGl0eSBvciByZWFkYWJpbGl0eT8gVGhhdCBpcyB0aGUgcXVlc3Rpb24uXHJcblRoZSBtb3N0IHdlbGwta25vd24gZHVtbXkgdGV4dCBpcyB0aGUgJ0xvcmVtIElwc3VtJywgd2hpY2ggaXMgc2FpZCB0byBoYXZlIG9yaWdpbmF0ZWQgaW4gdGhlIDE2dGggY2VudHVyeS4gTG9yZW0gSXBzdW0gaXMgY29tcG9zZWQgaW4gYSBwc2V1ZG8tTGF0aW4gbGFuZ3VhZ2Ugd2hpY2ggbW9yZSBvciBsZXNzIGNvcnJlc3BvbmRzIHRvICdwcm9wZXInIExhdGluLiBJdCBjb250YWlucyBhIHNlcmllcyBvZiByZWFsIExhdGluIHdvcmRzLiBUaGlzIGFuY2llbnQgZHVtbXkgdGV4dCBpcyBhbHNvIGluY29tcHJlaGVuc2libGUsIGJ1dCBpdCBpbWl0YXRlcyB0aGUgcmh5dGhtIG9mIG1vc3QgRXVyb3BlYW4gbGFuZ3VhZ2VzIGluIExhdGluIHNjcmlwdC4gVGhlIGFkdmFudGFnZSBvZiBpdHMgTGF0aW4gb3JpZ2luIGFuZCB0aGUgcmVsYXRpdmUgbWVhbmluZ2xlc3NuZXNzIG9mIExvcnVtIElwc3VtIGlzIHRoYXQgdGhlIHRleHQgZG9lcyBub3QgYXR0cmFjdCBhdHRlbnRpb24gdG8gaXRzZWxmIG9yIGRpc3RyYWN0IHRoZSB2aWV3ZXIncyBhdHRlbnRpb24gZnJvbSB0aGUgbGF5b3V0LlxyXG5cclxuT25lIGRpc2FkdmFudGFnZSBvZiBMb3J1bSBJcHN1bSBpcyB0aGF0IGluIExhdGluIGNlcnRhaW4gbGV0dGVycyBhcHBlYXIgbW9yZSBmcmVxdWVudGx5IHRoYW4gb3RoZXJzIC0gd2hpY2ggY3JlYXRlcyBhIGRpc3RpbmN0IHZpc3VhbCBpbXByZXNzaW9uLiBNb3Jlb3ZlciwgaW4gTGF0aW4gb25seSB3b3JkcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHNlbnRlbmNlcyBhcmUgY2FwaXRhbGl6ZWQ7IHRoaXMgbWVhbnMgdGhhdCBMb3JlbSBJcHN1bSBjYW5ub3QgYWNjdXJhdGVseSByZXByZXNlbnQsIGZvciBleGFtcGxlLCBHZXJtYW4sIGluIHdoaWNoIGFsbCBub3VucyBhcmUgY2FwaXRhbGl6ZWQuIFRodXMsIExvcmVtIElwc3VtIGhhcyBvbmx5IGxpbWl0ZWQgc3VpdGFiaWxpdHkgYXMgYSB2aXN1YWwgZmlsbGVyIGZvciBHZXJtYW4gdGV4dHMuIElmIHRoZSBmaWxsIHRleHQgaXMgaW50ZW5kZWQgdG8gaWxsdXN0cmF0ZSB0aGUgY2hhcmFjdGVyaXN0aWNzIG9mIGRpZmZlcmVudCB0eXBlZmFjZXMsIGl0IHNvbWV0aW1lcyBtYWtlcyBzZW5zZSB0byBzZWxlY3QgdGV4dHMgY29udGFpbmluZyB0aGUgdmFyaW91cyBsZXR0ZXJzIGFuZCBzeW1ib2xzIHNwZWNpZmljIHRvIHRoZSBvdXRwdXQgbGFuZ3VhZ2UuXHJcblxyXG5UaGVyZSBpcyBub3cgYW4gYWJ1bmRhbmNlIG9mIHJlYWRhYmxlIGR1bW15IHRleHRzLiBUaGVzZSBhcmUgdXN1YWxseSB1c2VkIHdoZW4gYSB0ZXh0IGlzIHJlcXVpcmVkIHB1cmVseSB0byBmaWxsIGEgc3BhY2UuIFRoZXNlIGFsdGVybmF0aXZlcyB0byB0aGUgY2xhc3NpYyBMb3JlbSBJcHN1bSB0ZXh0cyBhcmUgb2Z0ZW4gYW11c2luZyBhbmQgdGVsbCBzaG9ydCwgZnVubnkgb3Igbm9uc2Vuc2ljYWwgc3Rvcmllcy5cclxuXHJcbk9yaWdpbiBhbmQgbWVhbmluZyBvZiB0aGUgTG9yZW0gSXBzdW0gdGV4dFxyXG5BY2NvcmRpbmcgdG8gbW9zdCBzb3VyY2VzLCBMb3J1bSBJcHN1bSBjYW4gYmUgdHJhY2VkIGJhY2sgdG8gYSB0ZXh0IGNvbXBvc2VkIGJ5IENpY2VybyBpbiA0NSBCQy4gQWxsZWdlZGx5LCBhIExhdGluIHNjaG9sYXIgZXN0YWJsaXNoZWQgdGhlIG9yaWdpbiBvZiB0aGUgdGV4dCBieSBjb21waWxpbmcgYWxsIHRoZSBpbnN0YW5jZXMgb2YgdGhlIHVudXN1YWwgd29yZCAnY29uc2VjdGV0dXInIGhlIGNvdWxkIGZpbmQgYW5kIGV2ZW50dWFsbHkgcmVjb2duaXplZCBpdCBhcyBhIHBhc3NhZ2UgZnJvbSAnRGUgZmluaWJ1cyBib25vcnVtIGV0IG1hbG9ydW0nIChPbiB0aGUgZXh0cmVtZXMgb2YgR29vZCBhbmQgRXZpbCkgYnkgQ2ljZXJvLCBhIGJvb2sgdGhhdCB3YXMgdmVyeSBwb3B1bGFyIGluIHRoZSBNaWRkbGUgQWdlczogXCJOZXF1ZSBwb3JybyBxdWlzcXVhbSBlc3QsIHF1aSBkb2xvcmVtIGlwc3VtLCBxdWlhIGRvbG9yIHNpdCwgYW1ldCwgY29uc2VjdGV0dXIsIGFkaXBpc2NpIHZlbGl0Li4uIFwiIChBcHByb3hpbWF0ZWx5OiBcIk5vciBpcyB0aGVyZSBhbnlvbmUgd2hvIGxvdmVzIG9yIHB1cnN1ZXMgb3IgZGVzaXJlcyB0byBvYnRhaW4gcGFpbiBvZiBpdHNlbGYsIGJlY2F1c2UgaXQgaXMgcGFpbi4uLlwiKS4gQSB0eXBpY2FsIExvcmVtIElwc3VtIHRleHQgZ29lcyBsaWtlIHRoaXM6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaSBlbGl0LCBzZWQgZWl1c21vZCB0ZW1wb3IgaW5jaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gLi4uXCIuXHJcblxyXG5JdCBzZWVtcyB0aGF0IG9ubHkgZnJhZ21lbnRzIG9mIHRoZSBvcmlnaW5hbCB0ZXh0IHJlbWFpbiBpbiB0aGUgTG9yZW0gSXBzdW0gdGV4dHMgdXNlZCB0b2RheS4gT25lIG1heSBzcGVjdWxhdGUgdGhhdCBvdmVyIHRoZSBjb3Vyc2Ugb2YgdGltZSBjZXJ0YWluIGxldHRlcnMgd2VyZSBhZGRlZCBvciBkZWxldGVkIGF0IHZhcmlvdXMgcG9zaXRpb25zIHdpdGhpbiB0aGUgdGV4dC4gVGhpcyBtaWdodCBhbHNvIGV4cGxhaW4gd2h5IG9uZSBjYW4gbm93IGZpbmQgc2xpZ2h0bHkgZGlmZmVyZW50IHZlcnNpb25zLiBEdWUgdG8gdGhlIGFnZSBvZiB0aGUgTG9yZW0gSXBzdW0gdGV4dCB0aGVyZSBhcmUgbm8gY29weXJpZ2h0IGlzc3VlcyB0byBjb250ZW5kIHdpdGguXHJcblxyXG5JbiB0aGUgMTk2MHMsIHRoZSB0ZXh0IHN1ZGRlbmx5IGJlY2FtZSBrbm93biBiZXlvbmQgdGhlIHByb2Zlc3Npb25hbCBjaXJjbGUgb2YgdHlwZXNldHRlcnMgYW5kIGxheW91dCBkZXNpZ25lcnMgd2hlbiBpdCB3YXMgdXNlZCBmb3IgTGV0cmFzZXQgc2hlZXRzIChhZGhlc2l2ZSBsZXR0ZXJzIG9uIHRyYW5zcGFyZW50IGZpbG0sIHBvcHVsYXIgdW50aWwgdGhlIDE5ODBzKSBWZXJzaW9ucyBvZiB0aGUgdGV4dCB3ZXJlIHN1YnNlcXVlbnRseSBpbmNsdWRlZCBpbiBEVFAgcHJvZ3JhbW1lcyBzdWNoIGFzIFBhZ2VNYWtlciBldGMuXHJcblxyXG5BdXRvbWF0aWMgcmVjb2duaXRpb24gb2YgTG9yZW0gSXBzdW0gZHVyaW5nIHRoZSBwcmUtcHJlc3Mgd29ya2Zsb3dcclxuVGhlIHNwcmVhZCBvZiBjb21wdXRlcnMgYW5kIGxheW91dCBwcm9ncmFtbWVzIHRodXMgbWFkZSBkdW1teSB0ZXh0IGJldHRlciBrbm93bi4gV2hpbGUgaW4gZWFybGllciB0aW1lcyBzZXZlcmFsIGxpbmVzIG9mIHRoZSBMb3JlbSBJcHN1bSB0ZXh0IHdlcmUgcmVwZWF0ZWQgaW4gdGhlIGNyZWF0aW9uIG9mIGR1bW15IHRleHRzLCB0b2RheSB0aGUgZnVsbCB0ZXh0IG9mIENpY2VybydzICdEZSBmaW5pYnVzJyBzZXJ2ZXMgYXMgdGhlIGJhc2lzIGZvciBtYW55IGR1bW15IHRleHQgb3IgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycy4gQmFzZWQgb24gJ0RlIGZpbmlidXMnLCB0aGVzZSBnZW5lcmF0b3JzIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGxvbmdlciBzZWN0aW9ucyBvZiB0aGUgTG9yZW0gSXBzdW0gdGV4dCBvciB2YXJpb3VzIG90aGVyIGZpbGxlciB0ZXh0cy5cclxuXHJcblRoZSBwaHJhc2FsIHNlcXVlbmNlIG9mIHRoZSBMb3JlbSBJcHN1bSB0ZXh0IGlzIG5vdyBzbyB3aWRlc3ByZWFkIGFuZCBjb21tb25wbGFjZSB0aGF0IG1hbnkgRFRQIHByb2dyYW1tZXMgY2FuIGdlbmVyYXRlIGR1bW15IHRleHQgdXNpbmcgdGhlIHN0YXJ0aW5nIHNlcXVlbmNlIFwiTG9yZW0gaXBzdW1cIi4gRm9ydHVuYXRlbHksIHRoZSBwaHJhc2UgJ0xvcmVtIElwc3VtJyBpcyBub3cgcmVjb2duaXplZCBieSBlbGVjdHJvbmljIHByZS1wcmVzcyBzeXN0ZW1zIGFuZCwgd2hlbiBmb3VuZCwgYW4gYWxhcm0gY2FuIGJlIHJhaXNlZC4gVGhpcyBhdm9pZHMgYSBwdWJsaWNhdGlvbiBnb2luZyB0byBwcmludCB3aXRoIG92ZXJsb29rZWQgZHVtbXkgdGV4dC5cclxuXHJcbkNlcnRhaW4gaW50ZXJuZXQgcHJvdmlkZXJzIGV4cGxvaXQgdGhlIGZhY3QgdGhhdCBmaWxsIHRleHQgY2Fubm90IGJlIHJlY29nbml6ZWQgYnkgYXV0b21hdGljIHNlYXJjaCBlbmdpbmVzIC0gbWVhbmluZ2Z1bCBpbmZvcm1hdGlvbiBjYW5ub3QgYmUgZGlzdGluZ3Vpc2hlZCBmcm9tIG1lYW5pbmdsZXNzOiBUYXJnZXQtZ2VuZXJhdGVkIGR1bW15IHRleHQgbWl4ZWQgd2l0aCBhIGNlcnRhaW4gY29tYmluYXRpb24gb2Ygc2VhcmNoIHRlcm1zIGNhbiBsZWFkIHRvIGFuIGluY3JlYXNlZCBmcmVxdWVuY3kgb2YgdmlzaXRzIGJ5IHNlYXJjaCBtYWNoaW5lIHVzZXJzLiBBcyBhIGNvbnNlcXVlbmNlLCBhZHZlcnRpc2luZyByZXZlbnVlcywgd2hpY2ggcmVseSBvbiB3ZWJzaXRlICdoaXRzJywgYXJlIGluY3JlYXNlZC5gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxBcHAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIiksXHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxDb250YWluZXIsIFNjcm9sbFBhbmVsLCBkdW1teVRleHQgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcGNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xjb250YWluZXJcIj5cclxuICAgICAgICA8aDI+U3luY2hyb25pemUgU2Nyb2xsIGluIFJlYWN0IENvbXBvbmVudHM8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNjcm9sbENvbnRhaW5lciBjbGFzc05hbWU9XCJzY3JvbGxjb250YWluZXJcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLnRzeCIsImV4cG9ydCAqIGZyb20gJy4vc2Nyb2xsQ29udGFpbmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zY3JvbGxQYW5lbCc7XHJcbmV4cG9ydCB7IGR1bW15VGV4dCB9IGZyb20gJy4vY29udGVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxQYW5lbCB9IGZyb20gXCIuL3Njcm9sbFBhbmVsXCI7XHJcbmltcG9ydCB7IGR1bW15VGV4dCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hpbGRFbGVtZW50IHtcclxuICByZWY6IEhUTUxFbGVtZW50O1xyXG4gIHBhdXNlU2Nyb2xsRnVuY3Rpb246ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hpbGRzOiBDaGlsZEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHNldENoaWxkID0gKHJlZikgPT4ge1xyXG4gICAgdGhpcy5jaGlsZHMucHVzaCh7XHJcbiAgICAgIHJlZixcclxuICAgICAgcGF1c2VTY3JvbGxGdW5jdGlvbjogdGhpcy5kZWJvdW5jZWRQYXVzZVNjcm9sbEV2ZW50KHJlZiksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2hpbGRTY3JvbGwgPSAoY2FsbGVyUmVmOiBIVE1MRWxlbWVudCkgPT4gKCkgPT4ge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hpbGRzLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5yZWYgIT09IGNhbGxlclJlZikuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQucGF1c2VTY3JvbGxGdW5jdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZG9TY3JvbGxPbkNoaWxkKGNoaWxkLnJlZiwgdGhpcy5nZXRSZWxhdGl2ZVNjcm9sbChjYWxsZXJSZWYpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZG9TY3JvbGxPbkNoaWxkID0gKHJlZjogSFRNTEVsZW1lbnQsIHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHJlZi5zY3JvbGxUb3AgPSB2YWx1ZSAqIChyZWYuc2Nyb2xsSGVpZ2h0IC0gcmVmLmNsaWVudEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlbGF0aXZlU2Nyb2xsID0gKHJlZjogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIHJldHVybiByZWYuc2Nyb2xsVG9wIC8gKHJlZi5zY3JvbGxIZWlnaHQgLSByZWYuY2xpZW50SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVib3VuY2VkUGF1c2VTY3JvbGxFdmVudCA9IChyZWYpID0+IHtcclxuICAgIHJldHVybiBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIHJlZi5vbnNjcm9sbCA9IHJlZi5vbnNjcm9sbCA/IG51bGwgOiB0aGlzLmhhbmRsZUNoaWxkU2Nyb2xsKHJlZik7XHJcbiAgICB9LCAyNTAsIHtsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5jaGlsZHMuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5yZWYub25zY3JvbGwgPSB0aGlzLmhhbmRsZUNoaWxkU2Nyb2xsKGNoaWxkLnJlZikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjbGFzc05hbWUgPSBcIlwifSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8U2Nyb2xsUGFuZWxcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbHBhbmVsXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2R1bW15VGV4dCArIGR1bW15VGV4dH1cclxuICAgICAgICAgIHJlZ2lzdGVyUmVmPXt0aGlzLnNldENoaWxkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNjcm9sbFBhbmVsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGxwYW5lbFwiXHJcbiAgICAgICAgICBjb250ZW50PXtkdW1teVRleHR9XHJcbiAgICAgICAgICByZWdpc3RlclJlZj17dGhpcy5zZXRDaGlsZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTY3JvbGxQYW5lbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xscGFuZWxcIlxyXG4gICAgICAgICAgY29udGVudD17ZHVtbXlUZXh0ICsgZHVtbXlUZXh0ICsgZHVtbXlUZXh0fVxyXG4gICAgICAgICAgcmVnaXN0ZXJSZWY9e3RoaXMuc2V0Q2hpbGR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Njcm9sbENvbnRhaW5lci50c3giLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XG59IGNhdGNoKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcblx0XHRnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==