"use strict";
var Receipt = require('./receipt.js').Receipt;
var Checkout = /** @class */ (function () {
    function Checkout() {
        this.total = 0;
        this.numberOfA = 0;
        this.numberOfB = 0;
        this.receipt = new Receipt();
    }
    Checkout.prototype.scan = function (sku) {
        if ('A' === sku) {
            this.total += 50;
            if (++this.numberOfA % 3 === 0) {
                this.total -= 20;
            }
            this.receipt.scannedA();
        }
        else if ('B' === sku) {
            this.total += 30;
            if (++this.numberOfB % 2 === 0) {
                this.total -= 15;
            }
            this.receipt.scannedB();
        }
        else if ('C' === sku) {
            this.total += 20;
            this.receipt.scannedC();
        }
        else if ('D' === sku) {
            this.total += 15;
            this.receipt.scannedD();
        }
    };
    Checkout.prototype.getTotal = function () {
        return this.total;
    };
    Checkout.prototype.getReceipt = function () {
        return this.receipt.getText();
    };
    return Checkout;
}());
module.exports = {
    Checkout: Checkout
};
