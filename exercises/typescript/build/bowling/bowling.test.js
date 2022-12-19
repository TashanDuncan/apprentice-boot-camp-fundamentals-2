"use strict";
/* eslint-disable no-undef */
describe('Bowling tests', function () {
    test('all rolls are 0', function () {
        var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
        expect(bowl(rolls)).toBe(0);
    });
});
