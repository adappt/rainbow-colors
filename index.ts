function hslToRgb(h, s, l){
  var r, g, b;

  if(s == 0){
    r = g = b = l; // achromatic
  }else{
    var hue2rgb = function hue2rgb(p, q, t){
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function generate(num, config) {

  let _config = config ? config : {
    lum: 50,
    sat: 50
  };
  let _lum = isNaN(_config.lum) ? 50 : _config.lum;
  let _sat = isNaN(_config.sat) ? 50 : _config.sat;
  let _num = isNaN(num) ? 3 : num;
  let retarr = [];
  for (let i = 0; i < _num; i++) {
    if (config.rgb) {
      retarr.push('rgb('+hslToRgb( i / _num,_sat/100,_lum/100).toString()+')');
    } else {
      retarr.push('HSL(' + 360 * i / _num + ',' + _sat + '%,' + _lum + '%)');
    }
  }
  return (retarr);
}
