# rainbow-colors
Evenly spaced non random color generator

Whilst several very good random color module exists, sometimes they randomly pick colors which are too close, and each time they run they pick a different set of colors.
Sometimes it is useful to have a predictable set of colors. This module picks n evenly space colors from the color hue wheel.

usage 

npm install rainbow-colors

rainbowColor = require('rainbow-colors');

let n=7;
let config = { 
    lum:0.5,
    sat:0.5
    };
let colorArray = rainbowColor.generate(n,config);


