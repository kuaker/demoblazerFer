/// <reference types="cypress" />
const prods = require('../../../fixtures/products.json')

import ApiRequest from '../apis/ApiRequest'

context('ML HOME PAGE', function () {
    const apiUrl = Cypress.env('apiUrl')
    const url = Cypress.env('baseUrl')
    //const local = Cypress.env('local')
    const api = new ApiRequest()

    describe('Home', function () {
        beforeEach(function () {
            api.getEntries(apiUrl).as('entries')
        })

        it('API ENTRIES', function () {
            cy.get('@entries')
                .its('body')
                .then((body) => {
                    expect(body.Items[0].cat).to.be.eq('phone')
                })
        })

        it('INTERCEPT', function () {
            cy.intercept('GET', 'https://api.demoblaze.com/entries', (req) => {
                req.reply((res) => {
                    // 'res' represents the real destination response
                    // you can manipulate 'res' before it's sent to the browser
                    res.send({ fixture: 'fer.json' })
                })
            }).as('mock')
            cy.visit(url)
            cy.get('@entries').then((r) => {
                cy.log(JSON.stringify(r))
            })
        })
    })
})
