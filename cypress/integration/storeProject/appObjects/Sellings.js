
class Sellings {
    getSellTitleProduct = () => {
        return cy.get('h2')
    }

    getSellPriceProduct = () => {
        return cy.get('.price-container')
    }

    getAddToCartBtn = () => {
        return cy.get('.col-sm-12.col-md-6.col-lg-6').children('a')
    }
}

export default Sellings