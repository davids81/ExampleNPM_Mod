"use strict";
var Calculator = (function () {
    function Calculator(left, right) {
        this._left = left;
        this._right = right;
    }
    Calculator.prototype.AddTwoNumbers = function () {
        return this._left + this._right;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=Calculator.js.map