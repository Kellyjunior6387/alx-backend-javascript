const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 3.0, 2.0), 5);
        });

        it('equal positive numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUM', 3.3, 1.8), 5);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -3.0, -2.0), -5);
        });

        it('equal negative numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUM', -3.3, -1.8), -5);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -3.0, 2.0), -1);
        });

        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 3.0, -2.0), 1);
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
        });
    });

    describe('type == "SUBTRACT"', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 2.0), 1);
        });

        it('equal positive numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.3, 1.8), 1);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.0, -2.0), -1);
        });

        it('equal negative numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.3, -1.8), -1);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.0, 2.0), -5.0);
        });

        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.0, -2.0), 5.0);
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
        });
    });

    describe('type == "DIVIDE"', () => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 3.0), 2.6666666666666665);
        });

        it('numbers with different signs', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, 3.0), -2.3333333333333335);
        });

        it('numbers with different signs (alternate)', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 7.0, -3.0), -2.3333333333333335);
        });

        it('negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, -3.0), 2.3333333333333335);
        });

        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 3.0, 2.0), 1.5);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -3.0, -2.0), 1.5);
        });

        it('equal rounded up numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
        });

        it('equal rounded down numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
        });

        it('0 and positive number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
        });

        it('0 and negative number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
        });

        it('positive number and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
        });

        it('positive number and number rounded down to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
        });

        it('positive number and number rounded up to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
        });

        it('negative number and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
        });

        it('negative number and number rounded down to zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
        });

        it('negative number and number rounded up to zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
        });
    });
});
