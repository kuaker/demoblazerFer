class ProductPage {
    getH2 = () => {
        return cy.get('h2[class="name"]')
    }
}

export default ProductPage