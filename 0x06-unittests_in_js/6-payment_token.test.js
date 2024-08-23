const { expect } = require('chai')
const getPaymentTokenFromApi = require('./6-payment_token')

describe('Testing asychronous functon', () => {
    it('getPaymentTokenFromApi', (done) => {
        getPaymentTokenFromApi(true)
            .then((res) => {
                expect(res).to.deep.equal({ data: 'Successful response from the API' })
                done()
            })
    })
})
