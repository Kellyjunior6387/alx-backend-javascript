const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')
const { expect } = require('chai')


describe('Test Utils', () => {
    let spy
    beforeEach(() => {
        if (!spy) {
            spy = sinon.spy(console)
        }
    })
    afterEach(() => {
        spy.log.resetHistory()
    })
    it('Test to assert sendPaymentRequestToApi logs The total is: 20', () => {
        sendPaymentRequestToApi(100, 20)
        expect(spy.log.calledWith('The total is: 120')).to.be.true;
        expect(spy.log.callCount).to.be.equal(1);
    })
    it('Test to assert sendPaymentRequestToApi logs The total is: 120', () => {
        sendPaymentRequestToApi(10, 10)
        expect(spy.log.calledWith('The total is: 20')).to.be.true;
        expect(spy.log.callCount).to.be.equal(1);
    })
})

