import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../integration/storeProject/pages/HomePage'

const url = Cypress.env('baseUrl')
const loginpage = new HomePage()

Given('Ingreso al Ecommerce', () => {
    cy.visit(url)
})
When('Hago click en el boton de Log in', () => {
    loginpage.header.getLogInBtn().click()
})

And('Espero que habra el modal', () => {
    cy.wait(2000)
    loginpage.modal.getModalClass().should('be.visible')
})

And('Ingreso el usuario', () => {
    loginpage.modal.getUser().type('admin')
})

And('Ingreso la password', () => {
    loginpage.modal.getPass().type('admin')
})

And('Hago click en el boton de Login', () => {
    loginpage.modal.getModalLoginBtn().eq(2).click()
})

Then('Compruebo que estoy logueado', function () {
    cy.on('window:confirm', () => true)
    cy.wait(2000)
    loginpage.header.getLogOutBtn().should('have.text', 'Log out')
})
