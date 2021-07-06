/// <reference types="cypress" />

import HomePage from '../pages/HomePage'

context('STORE HOME PAGE', function () {
    const url = Cypress.env('baseUrl')
    const loginpage = new HomePage()

    describe('Back-end', function () {
        beforeEach(function () {
            cy.visit(url)
        })

        it('Log in backend', () => {
            cy.setCookie('tokenp_', 'YWRtaW4xNjI1NDMx')

            cy.get('#logout2').should('be.visible')
        })

        it('Not log in backend', () => {
            cy.get('#logout2').should('not.be.visible')

            cy.get('#login2').should('be.visible')
        })
    })

    describe('Front End', () => {
        it('Log in Backend', () => {
            loginpage.header.getLogInBtn().click()
            loginpage.modal.getModalClass().should('be.visible')
            cy.wait(1000)
            loginpage.modal.getUser().type('admin')
            loginpage.modal.getPass().type('admin')
            cy.wait(1000)
            loginpage.modal.getModalLoginBtn().eq(2).click()
            cy.on('window:confirm', () => true)
            cy.wait(2000)
            loginpage.header.getLogOutBtn().should('have.text', 'Log out')
        })
    })
})
