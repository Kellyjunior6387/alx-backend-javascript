import Car from './10-car';

const mySymbol = Symbol('cloneCar');
export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    [mySymbol]() {
        return new Car();
    }

    cloneCar() {
        return this[mySymbol]();
    }
}
