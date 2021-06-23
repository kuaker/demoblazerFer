const H2 = 'h2'
const PRICE_CONTAINER = '.price-container'
const COLUMN = '.col-sm-12.col-md-6.col-lg-6'

class Sellings {
    getSellTitleProduct = () => cy.get(H2)

    getSellPriceProduct = () => cy.get(PRICE_CONTAINER)

    getAddToCartBtn = () => cy.get(COLUMN).children('a')

    getConfirm = () => cy.on('window:confirm', () => true)
}

export default Sellings
