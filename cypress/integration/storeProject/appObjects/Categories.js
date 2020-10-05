class Categories {
    getListElemsCat = () => {
        return cy.get('.list-group-item')
            .should('have.attr', 'class', 'list-group-item')
    }
}

export default Categories