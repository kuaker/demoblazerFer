import { createYield } from "typescript"
/// <reference types="cypress" />

class Contact {

    getModalContact = () => {
        return cy.get('.modal-content')
    }

    getCloseModal = () => {
        return cy.get('button[data-dismiss="modal"]')
    }

    getModalBody = () => {
        return cy.get('.modal-body')
    }

}

export default Contact