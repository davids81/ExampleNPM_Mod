
import * as chai from 'chai';
import { Calculator } from '../src/Calculator';

var expect = chai.expect;



describe("Calculator tests", () => {
    var calc: Calculator;

    beforeEach(function() {
        calc = new Calculator(1, 2);
    });
    
    it ("Should be 3", () => {
        expect(calc.AddTwoNumbers()).to.equal(3);
    });
});

