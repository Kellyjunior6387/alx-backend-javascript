const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')
const { expect } = require('chai')


describe('Test Utils', () => {
    it('Test that sendPaymentRequestToApi uses calculate number', () => {
        const spy = sinon.spy(Utils, 'calculateNumber')
        sendPaymentRequestToApi(100, 20)
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.callCount).to.be.equal(1);
        spy.restore()
    })
})

