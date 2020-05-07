"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function () {
    return _Color.default;
  }
});
Object.defineProperty(exports, "Palette", {
  enumerable: true,
  get: function () {
    return _Palette.default;
  }
});
Object.defineProperty(exports, "getColor", {
  enumerable: true,
  get: function () {
    return _getColor.default;
  }
});
Object.defineProperty(exports, "getPalette", {
  enumerable: true,
  get: function () {
    return _getPalette.default;
  }
});
Object.defineProperty(exports, "usePalette", {
  enumerable: true,
  get: function () {
    return _usePalette.default;
  }
});
Object.defineProperty(exports, "useColor", {
  enumerable: true,
  get: function () {
    return _useColor.default;
  }
});
exports.default = void 0;

var _Color = _interopRequireDefault(require("./Color"));

var _Palette = _interopRequireDefault(require("./Palette"));

var _getColor = _interopRequireDefault(require("./Color/getColor"));

var _getPalette = _interopRequireDefault(require("./Palette/getPalette"));

var _usePalette = _interopRequireDefault(require("./Palette/usePalette"));

var _useColor = _interopRequireDefault(require("./Color/useColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Color.default;
exports.default = _default;