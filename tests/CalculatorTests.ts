
import * as chai from 'chai';
import { Calculator } from '../src/Calculator';

var expect = chai.expect;


describe("Calculator tests", () => {
    let calc: Calculator;

    beforeEach(function() {
        calc = new Calculator(1, 2);
    });
    
    it ("Should be 3", () => {
        expect(calc.AddTwoNumbers()).to.equal(3);
    });

    it ('Should not be 4', ()=> {
        expect(calc.AddTwoNumbers()).to.not.equal(4);
    });
});

// this is only a test
