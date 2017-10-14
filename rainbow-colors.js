(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RainbowColor = (function () {
        function RainbowColor() {
        }
        RainbowColor.prototype.generate = function (num, config) {
            var _config = config ? config : {
                lum: 50,
                sat: 50
            };
            var _lum = isNaN(_config.lum) ? 50 : _config.lum;
            var _sat = isNaN(_config.sat) ? 50 : _config.sat;
            var _num = isNaN(num) ? 3 : num;
            var retarr = [];
            for (var i = 0; i < _num; i++) {
                retarr.push('HSL(' + 360 * i / _num + ',' + _sat + '%,' + _lum + '%)');
            }
            return (retarr);
        };
        return RainbowColor;
    }());
    exports.RainbowColor = RainbowColor;
});
