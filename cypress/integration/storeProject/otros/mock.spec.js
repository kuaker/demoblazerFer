/// <reference types="cypress" />

    describe('Home', function () {

        const pactum = require('pactum');

        beforeEach(function () {
            ngApimock.run()
        })

        it('should fail when no configuration has been provided in the configuration', function () {
     
            cy.request('http://localhost:3000/')
        })

    })

