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

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Variant = exports.Experiment = undefined;\n\nvar _experiment = __webpack_require__(2);\n\nvar _experiment2 = _interopRequireDefault(_experiment);\n\nvar _variant = __webpack_require__(4);\n\nvar _variant2 = _interopRequireDefault(_variant);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Experiment = _experiment2.default;\nexports.Variant = _variant2.default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n}();\n\n;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ }
/******/ ])
});
;