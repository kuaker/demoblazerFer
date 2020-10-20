/// <reference types="cypress" />

class Footer {

    getFootc = () => {
        return cy.get('#footc')
    }

    getCaption = () => {
        return cy.get('.caption')
    }

    getCopyRight = () => {
        return cy.get('.py-5.bg-inverse')
    }

}

export default Footer