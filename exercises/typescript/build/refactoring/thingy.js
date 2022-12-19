"use strict";
var datatypeConverter = require('./util-datatype-converter');
var foo = 0, bar = 0;
var foobar = [0, 0, 0, 0, 0].length;
function doTheThing() {
    var s = "";
    for (; foo < 100; foo++)
        s += b(foo) + " ";
    return s.substring(0, s.length - 1);
}
function fooo() {
    foobar = [0, 0, 0, 0, 0].length;
    var result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("42757a7a"));
    return result;
}
function barr() {
    bar = 0;
    var result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("46697a7a"));
    return result;
}
function b(foo) {
    bar++;
    foobar--;
    var s = bar == 3 || foobar == 0 ? "" : foo + 1;
    if (bar == 3)
        s += barr();
    if (foobar == 0)
        s += fooo();
    return s;
}
module.exports.doTheThing = doTheThing;
