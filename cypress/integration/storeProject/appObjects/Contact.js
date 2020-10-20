import { createYield } from "typescript"
/// <reference types="cypress" />

class Contact {

    getModalContact = () => {
        return cy.get('.modal-content')
    }

}

export default Contact