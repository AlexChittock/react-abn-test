(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["reactABNTest"] = factory(require("react"));
	else
		root["reactABNTest"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Persistence = exports.Variant = exports.Experiment = undefined;\n\nvar _experiment = __webpack_require__(2);\n\nvar _experiment2 = _interopRequireDefault(_experiment);\n\nvar _variant = __webpack_require__(4);\n\nvar _variant2 = _interopRequireDefault(_variant);\n\nvar _localStorage = __webpack_require__(10);\n\nvar _localStorage2 = _interopRequireDefault(_localStorage);\n\nvar _none = __webpack_require__(11);\n\nvar _none2 = _interopRequireDefault(_none);\n\nvar _cookie = __webpack_require__(12);\n\nvar _cookie2 = _interopRequireDefault(_cookie);\n\nvar _session = __webpack_require__(9);\n\nvar _session2 = _interopRequireDefault(_session);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Experiment = _experiment2.default;\nexports.Variant = _variant2.default;\nvar Persistence = exports.Persistence = {\n  LocalStoragePersistence: _localStorage2.default,\n  NoPersistence: _none2.default,\n  CookiePersistence: _cookie2.default,\n  SessionPersistence: _session2.default\n};\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Persistence, 'Persistence', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/index.js');\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _variant = __webpack_require__(4);\n\nvar _variant2 = _interopRequireDefault(_variant);\n\nvar _weightSelector = __webpack_require__(5);\n\nvar _weightSelector2 = _interopRequireDefault(_weightSelector);\n\nvar _nameSelector = __webpack_require__(8);\n\nvar _nameSelector2 = _interopRequireDefault(_nameSelector);\n\nvar _session = __webpack_require__(9);\n\nvar _session2 = _interopRequireDefault(_session);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Experiment = function Experiment(_ref) {\n  var name = _ref.name;\n  var _ref$selector = _ref.selector;\n  var selector = _ref$selector === undefined ? _weightSelector2.default : _ref$selector;\n  var onImpression = _ref.onImpression;\n  var _ref$persistence = _ref.persistence;\n  var persistence = _ref$persistence === undefined ? cookiePersistence : _ref$persistence;\n  var children = _ref.children;\n\n  var previous = persistence.load(name);\n  var selected = (0, _nameSelector2.default)(children, previous) || selector(children);\n  persistence.save(name, selected.props.name);\n  onImpression && onImpression(name, selected.props.name);\n  return selected;\n};\n\nExperiment.propTypes = {\n  name: _react.PropTypes.string.isRequired,\n  selector: _react.PropTypes.func,\n  onImpression: _react.PropTypes.func.isRequired,\n  children: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_variant2.default)),\n  persistence: _react.PropTypes.shape({\n    save: _react.PropTypes.func.isRequired,\n    load: _react.PropTypes.func.isRequired\n  })\n};\n\nvar _default = Experiment;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Experiment, 'Experiment', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/experiment.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/experiment.js');\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/experiment.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/experiment.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"commonjs\":\"react\",\"commonjs2\":\"react\",\"amd\":\"React\",\"root\":\"React\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22React%22,%22root%22:%22React%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Variant = function Variant(_ref) {\n  var name = _ref.name;\n  var _ref$weight = _ref.weight;\n  var weight = _ref$weight === undefined ? 1 : _ref$weight;\n  var children = _ref.children;\n\n  return children;\n};\n\nVariant.propTypes = {\n  name: _react.PropTypes.string.isRequired,\n  weight: _react.PropTypes.number,\n  children: _react.PropTypes.element.isRequired\n};\n\nvar _default = Variant;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Variant, 'Variant', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/variant.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/variant.js');\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/variant.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/variant.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3);\n\nvar _variantFilter = __webpack_require__(6);\n\nvar _variantFilter2 = _interopRequireDefault(_variantFilter);\n\nvar _variantIterator = __webpack_require__(7);\n\nvar _variantIterator2 = _interopRequireDefault(_variantIterator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar normaliseWeight = function normaliseWeight(weight) {\n  return 0 === weight ? 0 : weight || 1;\n};\n\nvar getWeightComparator = function getWeightComparator(target) {\n  return function (variant) {\n    var weight = normaliseWeight(variant.props.weight);\n    return weight < target ? null : getWeightComparator(weight + target);\n  };\n};\n\nvar weightSelector = function weightSelector(variants) {\n  var seed = function seed(variants) {\n    return Math.random() * _react.Children.toArray(variants).reduce(function (total, variant) {\n      return total + normaliseWeight(variant.props.weight);\n    }, 0);\n  };\n\n  return (0, _variantFilter2.default)((0, _variantIterator2.default)(variants), 0, getWeightComparator(seed(variants)));\n};\n\nvar _default = weightSelector;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(normaliseWeight, 'normaliseWeight', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/weight-selector.js');\n\n  __REACT_HOT_LOADER__.register(getWeightComparator, 'getWeightComparator', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/weight-selector.js');\n\n  __REACT_HOT_LOADER__.register(weightSelector, 'weightSelector', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/weight-selector.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/weight-selector.js');\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/selectors/weight-selector.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/selectors/weight-selector.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar filter = function filter(getVariant, index, comparator) {\n  var variant = getVariant(index);\n  if (undefined == variant) {\n    return null;\n  }\n\n  var nextComparator = comparator(variant);\n  if (!nextComparator) {\n    return variant;\n  }\n\n  return filter(getVariant, index + 1, nextComparator);\n};\n\nvar _default = filter;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(filter, \"filter\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/variant-filter.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/variant-filter.js\");\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/selectors/variant-filter.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/selectors/variant-filter.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getVariantIterator = function getVariantIterator(variants) {\n  return function (index) {\n    return variants[index];\n  };\n};\n\nvar _default = getVariantIterator;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(getVariantIterator, \"getVariantIterator\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/variant-iterator.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/variant-iterator.js\");\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/selectors/variant-iterator.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/selectors/variant-iterator.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _variantFilter = __webpack_require__(6);\n\nvar _variantFilter2 = _interopRequireDefault(_variantFilter);\n\nvar _variantIterator = __webpack_require__(7);\n\nvar _variantIterator2 = _interopRequireDefault(_variantIterator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getNameComparator = function getNameComparator(name) {\n  var nameComparator = function nameComparator(variant) {\n    return variant.props.name == name ? null : nameComparator;\n  };\n  return nameComparator;\n};\n\nvar nameSelector = function nameSelector(variants, name) {\n  return (0, _variantFilter2.default)((0, _variantIterator2.default)(variants), 0, getNameComparator(name));\n};\n\nvar _default = nameSelector;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(getNameComparator, 'getNameComparator', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/name-selector.js');\n\n  __REACT_HOT_LOADER__.register(nameSelector, 'nameSelector', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/name-selector.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/selectors/name-selector.js');\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/selectors/name-selector.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/selectors/name-selector.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar store = {};\n\nvar load = function load(experimentName) {\n  return store[experimentName];\n};\n\nvar save = function save(experimentName, variantName) {\n  return store[experimentName] = variantName;\n};\n\nvar _default = {\n  load: load,\n  save: save\n};\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(store, \"store\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/session.js\");\n\n  __REACT_HOT_LOADER__.register(load, \"load\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/session.js\");\n\n  __REACT_HOT_LOADER__.register(save, \"save\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/session.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/session.js\");\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/persistence/session.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/persistence/session.js?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nif (!window) throw 'Local Storage persistence must only be used in browser context';\n\nvar load = function load(experimentName) {\n  return window.localStorage.getItem(experimentName);\n};\n\nvar save = function save(experimentName, variantName) {\n  return window.localStorage.setItem(experimentName, variantName);\n};\n\nvar _default = {\n  load: load,\n  save: save\n};\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(load, 'load', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/local-storage.js');\n\n  __REACT_HOT_LOADER__.register(save, 'save', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/local-storage.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/local-storage.js');\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/persistence/local-storage.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/persistence/local-storage.js?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar noop = function noop() {\n  return null;\n};\n\nvar _default = {\n  load: noop,\n  save: noop\n};\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(noop, \"noop\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/none.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/none.js\");\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/persistence/none.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/persistence/none.js?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getCookiePersistence = undefined;\n\nvar _reactCookie = __webpack_require__(13);\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar load = function load(experimentName) {\n  return _reactCookie2.default.load(experimentName);\n};\n\nvar _save = function _save(experimentName, variantName) {\n  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  _reactCookie2.default.save(experimentName, variantName, Object.assign({\n    maxAge: 31536000\n  }, config));\n};\n\nvar getCookiePersistence = exports.getCookiePersistence = function getCookiePersistence(config) {\n  return {\n    load: load,\n    save: function save(experimentName, variantName) {\n      return _save(experimentName, variantName, config);\n    }\n  };\n};\n\nvar _default = {\n  load: load,\n  save: _save\n};\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(load, 'load', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/cookie.js');\n\n  __REACT_HOT_LOADER__.register(_save, 'save', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/cookie.js');\n\n  __REACT_HOT_LOADER__.register(getCookiePersistence, 'getCookiePersistence', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/cookie.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/alexchittock/Documents/Projects/LBG/react-ab-test/src/persistence/cookie.js');\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/persistence/cookie.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/persistence/cookie.js?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("var cookie = __webpack_require__(14);\n\nif (typeof Object.assign != 'function') {\n  Object.assign = function(target) {\n    'use strict';\n    if (target == null) {\n      throw new TypeError('Cannot convert undefined or null to object');\n    }\n\n    target = Object(target);\n    for (var index = 1; index < arguments.length; index++) {\n      var source = arguments[index];\n      if (source != null) {\n        for (var key in source) {\n          if (Object.prototype.hasOwnProperty.call(source, key)) {\n            target[key] = source[key];\n          }\n        }\n      }\n    }\n    return target;\n  };\n}\n\nvar _rawCookie = {};\nvar _res = undefined;\n\nfunction _isResWritable() {\n  if(!_res)\n    return false\n  if(_res.headersSent === true)\n    return false\n  return true\n}\n\nfunction load(name, doNotParse) {\n  var cookies = (typeof document === 'undefined') ? _rawCookie : cookie.parse(document.cookie);\n  var cookieVal = cookies && cookies[name];\n\n  if (!doNotParse) {\n    try {\n      cookieVal = JSON.parse(cookieVal);\n    } catch(e) {\n      // Not serialized object\n    }\n  }\n\n  return cookieVal;\n}\n\nfunction select(regex) {\n  var cookies = (typeof document === 'undefined') ? _rawCookie : cookie.parse(document.cookie);\n  if(!cookies)\n    return {}\n  if(!regex)\n    return cookies\n  return Object.keys(cookies)\n    .reduce(function(accumulator, name) {\n      if(!regex.test(name))\n        return accumulator\n      var newCookie = {}\n      newCookie[name] = cookies[name]\n      return Object.assign({}, accumulator, newCookie)\n    }, {})\n}\n\nfunction save(name, val, opt) {\n  _rawCookie[name] = val;\n\n  // allow you to work with cookies as objects.\n  if (typeof val === 'object') {\n    _rawCookie[name] = JSON.stringify(val);\n  }\n\n  // Cookies only work in the browser\n  if (typeof document !== 'undefined') {\n    document.cookie = cookie.serialize(name, _rawCookie[name], opt);\n  }\n\n  if (_isResWritable() && _res.cookie) {\n    _res.cookie(name, val, opt);\n  }\n}\n\nfunction remove(name, opt) {\n  delete _rawCookie[name];\n\n  if (typeof opt === 'undefined') {\n    opt = {};\n  } else if (typeof opt === 'string') {\n    // Will be deprecated in future versions\n    opt = { path: opt };\n  } else {\n    // Prevent mutation of opt below\n    opt = Object.assign({}, opt);\n  }\n\n  if (typeof document !== 'undefined') {\n    opt.expires = new Date(1970, 1, 1, 0, 0, 1);\n    document.cookie = cookie.serialize(name, '', opt);\n  }\n\n  if (_isResWritable() && _res.clearCookie) {\n    _res.clearCookie(name, opt);\n  }\n}\n\nfunction setRawCookie(rawCookie) {\n  if (rawCookie) {\n    _rawCookie = cookie.parse(rawCookie);\n  } else {\n    _rawCookie = {};\n  }\n}\n\nfunction plugToRequest(req, res) {\n  if (req.cookie) {\n    _rawCookie = req.cookie;\n  } else if (req.cookies) {\n    _rawCookie = req.cookies;\n  } else if (req.headers && req.headers.cookie) {\n    setRawCookie(req.headers.cookie);\n  } else {\n    _rawCookie = {};\n  }\n\n  _res = res;\n  return function unplug() {\n    _res = null;\n    _rawCookie = {};\n  }\n}\n\nvar reactCookie = {\n  load: load,\n  select: select,\n  save: save,\n  remove: remove,\n  setRawCookie: setRawCookie,\n  plugToRequest: plugToRequest\n};\n\nif (typeof window !== 'undefined') {\n  window['reactCookie'] = reactCookie;\n}\n\nmodule.exports = reactCookie;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-cookie/index.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-cookie/index.js?");

/***/ },
/* 14 */
/***/ function(module, exports) {

	eval("/*!\r\n * cookie\r\n * Copyright(c) 2012-2014 Roman Shtylman\r\n * Copyright(c) 2015 Douglas Christopher Wilson\r\n * MIT Licensed\r\n */\r\n\r\n/**\r\n * Module exports.\r\n * @public\r\n */\r\n\r\nexports.parse = parse;\r\nexports.serialize = serialize;\r\n\r\n/**\r\n * Module variables.\r\n * @private\r\n */\r\n\r\nvar decode = decodeURIComponent;\r\nvar encode = encodeURIComponent;\r\n\r\n/**\r\n * RegExp to match field-content in RFC 7230 sec 3.2\r\n *\r\n * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]\r\n * field-vchar   = VCHAR / obs-text\r\n * obs-text      = %x80-FF\r\n */\r\n\r\nvar fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\r\n\r\n/**\r\n * Parse a cookie header.\r\n *\r\n * Parse the given cookie header string into an object\r\n * The object has the various cookies as keys(names) => values\r\n *\r\n * @param {string} str\r\n * @param {object} [options]\r\n * @return {object}\r\n * @public\r\n */\r\n\r\nfunction parse(str, options) {\r\n  if (typeof str !== 'string') {\r\n    throw new TypeError('argument str must be a string');\r\n  }\r\n\r\n  var obj = {}\r\n  var opt = options || {};\r\n  var pairs = str.split(/; */);\r\n  var dec = opt.decode || decode;\r\n\r\n  pairs.forEach(function(pair) {\r\n    var eq_idx = pair.indexOf('=')\r\n\r\n    // skip things that don't look like key=value\r\n    if (eq_idx < 0) {\r\n      return;\r\n    }\r\n\r\n    var key = pair.substr(0, eq_idx).trim()\r\n    var val = pair.substr(++eq_idx, pair.length).trim();\r\n\r\n    // quoted values\r\n    if ('\"' == val[0]) {\r\n      val = val.slice(1, -1);\r\n    }\r\n\r\n    // only assign once\r\n    if (undefined == obj[key]) {\r\n      obj[key] = tryDecode(val, dec);\r\n    }\r\n  });\r\n\r\n  return obj;\r\n}\r\n\r\n/**\r\n * Serialize data into a cookie header.\r\n *\r\n * Serialize the a name value pair into a cookie string suitable for\r\n * http headers. An optional options object specified cookie parameters.\r\n *\r\n * serialize('foo', 'bar', { httpOnly: true })\r\n *   => \"foo=bar; httpOnly\"\r\n *\r\n * @param {string} name\r\n * @param {string} val\r\n * @param {object} [options]\r\n * @return {string}\r\n * @public\r\n */\r\n\r\nfunction serialize(name, val, options) {\r\n  var opt = options || {};\r\n  var enc = opt.encode || encode;\r\n\r\n  if (!fieldContentRegExp.test(name)) {\r\n    throw new TypeError('argument name is invalid');\r\n  }\r\n\r\n  var value = enc(val);\r\n\r\n  if (value && !fieldContentRegExp.test(value)) {\r\n    throw new TypeError('argument val is invalid');\r\n  }\r\n\r\n  var pairs = [name + '=' + value];\r\n\r\n  if (null != opt.maxAge) {\r\n    var maxAge = opt.maxAge - 0;\r\n    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');\r\n    pairs.push('Max-Age=' + maxAge);\r\n  }\r\n\r\n  if (opt.domain) {\r\n    if (!fieldContentRegExp.test(opt.domain)) {\r\n      throw new TypeError('option domain is invalid');\r\n    }\r\n\r\n    pairs.push('Domain=' + opt.domain);\r\n  }\r\n\r\n  if (opt.path) {\r\n    if (!fieldContentRegExp.test(opt.path)) {\r\n      throw new TypeError('option path is invalid');\r\n    }\r\n\r\n    pairs.push('Path=' + opt.path);\r\n  }\r\n\r\n  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());\r\n  if (opt.httpOnly) pairs.push('HttpOnly');\r\n  if (opt.secure) pairs.push('Secure');\r\n\r\n  return pairs.join('; ');\r\n}\r\n\r\n/**\r\n * Try decoding a string using a decoding function.\r\n *\r\n * @param {string} str\r\n * @param {function} decode\r\n * @private\r\n */\r\n\r\nfunction tryDecode(str, decode) {\r\n  try {\r\n    return decode(str);\r\n  } catch (e) {\r\n    return str;\r\n  }\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-cookie/~/cookie/index.js\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-cookie/~/cookie/index.js?");

/***/ }
/******/ ])
});
;