/// <reference types="cypress" />

class Contact {

    getModalContact = () => {
        return cy.get('.modal-content')
    }

    getModalHeader = () => {
        return cy.get('.modal-header')
    }

    getModalBody = () => {
        return cy.get('.modal-body')
    }

    getModalFooter = () => {
        return cy.get('.modal-footer')
    }

    getCloseModal = () => {
        return this.getModalHeader()
    }

    getModalTitle = () => {
        return cy.get('#exampleModalLabel')
    }
}

export default Contact