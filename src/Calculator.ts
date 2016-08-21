

export class Calculator {

    _left: number;
    _right: number;

    constructor(left: number, right: number)
    {
        this._left = left;
        this._right = right;
    }

    public AddTwoNumbers(): number {
        return this._left + this._right;
    }
}
    
