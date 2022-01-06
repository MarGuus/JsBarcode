
var JsBarcode = require('../../bin/JsBarcode.js');
var Canvas = require("canvas");

// CODE128B = JsBarcode.getModule("CODE128B");

// var enc = new CODE128B("ö", {});
    
CODE128 = JsBarcode.getModule("CODE128B");

var enc = new CODE128("ö", {});
    
// console.log("HELLO")
var test = enc.encode()

console.log(test);
   