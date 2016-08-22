"use strict";
var chai = require('chai');
var Calculator_1 = require('../src/Calculator');
var expect = chai.expect;
describe("Calculator tests", function () {
    var calc;
    beforeEach(function () {
        calc = new Calculator_1.Calculator(1, 2);
    });
    it("Should be 3", function () {
        expect(calc.AddTwoNumbers()).to.equal(3);
    });
    it('Should not be 4', function () {
        expect(calc.AddTwoNumbers()).to.not.equal(4);
    });
});
// this is only a test
