const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('should return 4 when inputs are 1 and 3', function () {
        assert(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', function () {
        assert(calculateNumber(1, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', function () {
        assert(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 0 when inputs are 1 and 0', function () {
        assert(calculateNumber(1, 0), 1);
    });

    it('should return -2 when inputs are -1 and -1', function () {
        assert(calculateNumber(-1, -1), -2);
    });

    it('should return -3 when inputs are -1.5 and -1.4', function () {
        assert(calculateNumber(-1.5, -1.4), -2);
    });
});
