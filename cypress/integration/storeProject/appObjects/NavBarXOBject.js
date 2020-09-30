class NavBarXObject {
    getnavBarBrandLogo = () => {
        return cy.get('#nava').should('have.text', '\n      PRODUCT STORE')
    }

    getImg = () => {
        return this.getnavBarBrandLogo().children('img').should('have.attr', 'src', 'bm.png')
    }

}

export default NavBarXObject