"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generate(num, config) {
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
}
exports.generate = generate;
