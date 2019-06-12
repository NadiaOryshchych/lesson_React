"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.rus = exports.eu = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

var calcCash = function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  for (var _len = arguments.length, arr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arr[_key - 1] = arguments[_key];
  }

  var _arr = arr;

  var _arr2 = _slicedToArray(_arr, 1);

  arr = _arr2[0];
  var res = arr.reduce(function (total, current) {
    return total + current;
  }) + own;
  return res;
};

var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;
exports.rus = rus;
exports.eu = eu;
var money = calcCash(null, cash);
var _default = money;
exports.default = _default;