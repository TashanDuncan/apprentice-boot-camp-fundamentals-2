"use strict";
var Checkout = require('./checkout.js').Checkout;
describe('Checkout', function () {
    test('scans one A', function () {
        var checkout = new Checkout();
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(50);
    });
    test('scans two As', function () {
        var checkout = new Checkout();
        checkout.scan('A');
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(100);
    });
    test('scans three As', function () {
        var checkout = new Checkout();
        checkout.scan('A');
        checkout.scan('A');
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(130);
    });
    test('scans six As', function () {
        var checkout = new Checkout();
        checkout.scan('A');
        checkout.scan('A');
        checkout.scan('A');
        checkout.scan('A');
        checkout.scan('A');
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(260);
    });
    test('scans one B', function () {
        var checkout = new Checkout();
        checkout.scan('B');
        expect(checkout.getTotal()).toBe(30);
    });
    test('scans two Bs', function () {
        var checkout = new Checkout();
        checkout.scan('B');
        checkout.scan('B');
        expect(checkout.getTotal()).toBe(45);
    });
    test('scans four Bs', function () {
        var checkout = new Checkout();
        checkout.scan('B');
        checkout.scan('B');
        checkout.scan('B');
        checkout.scan('B');
        expect(checkout.getTotal()).toBe(90);
    });
    test('simple, scans A, B, C, and D', function () {
        var checkout = new Checkout();
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(50);
        checkout.scan('B');
        expect(checkout.getTotal()).toBe(80);
        checkout.scan('C');
        expect(checkout.getTotal()).toBe(100);
        checkout.scan('D');
        expect(checkout.getTotal()).toBe(115);
    });
    test('incremental, scans A, B, A, A, B C, B, C, D, D, D, and C', function () {
        var checkout = new Checkout();
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(50);
        checkout.scan('B');
        expect(checkout.getTotal()).toBe(80);
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(130);
        checkout.scan('A');
        expect(checkout.getTotal()).toBe(160);
        checkout.scan('B');
        expect(checkout.getTotal()).toBe(175);
        checkout.scan('C');
        expect(checkout.getTotal()).toBe(195);
        checkout.scan('B');
        expect(checkout.getTotal()).toBe(225);
        checkout.scan('C');
        expect(checkout.getTotal()).toBe(245);
        checkout.scan('D');
        expect(checkout.getTotal()).toBe(260);
        checkout.scan('D');
        expect(checkout.getTotal()).toBe(275);
        checkout.scan('D');
        expect(checkout.getTotal()).toBe(290);
        checkout.scan('C');
        expect(checkout.getTotal()).toBe(310);
    });
});
