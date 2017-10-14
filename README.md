# rainbow-colors
Evenly spaced non random color generator

Whilst several very good random color module exists, sometimes they randomly pick colors which are too close, and each time they run they pick a different set of colors.
Sometimes it is useful to have a predictable set of colors. This module picks n evenly space colors from the color hue wheel.

usage 

npm install rainbow-colors

rainbowColors = require('rainbow-colors'); 
// or for angular2 / typescript: import * as rainbowColors from 'rainbow-colors';

let n=6;
let config = { 
      lum:50,
      sat:50
    };
let colorArray = rainbowColors.generate(n,config);  

// returns ["HSL(0,50%,50%)", "HSL(60,50%,50%)", "HSL(120,50%,50%)", "HSL(180,50%,50%)", "HSL(240,50%,50%)", "HSL(300,50%,50%)"]

Module sponsored by AI employee support platform https://knowyourday.ai/
