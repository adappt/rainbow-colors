export class RainbowColors {
  public generate(num, config) {
    let _config = config ? config : {
      lum: 50,
      sat: 50
    };
    let _lum = isNaN(_config.lum) ? 50 : _config.lum;
    let _sat = isNaN(_config.sat) ? 50 : _config.sat;
    let _num = isNaN(num) ? 3 : num;
    let retarr = [];
    for (let i = 0; i < _num; i++) {
      retarr.push('HSL(' + 360 * i / _num + ',' + _sat + '%,' + _lum + '%)');
    }
    return (retarr);
  }
}