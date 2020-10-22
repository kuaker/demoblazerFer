class ContCar {
    getConCarDiv = () => {
        return cy.get('#contcar')
    }
    getCarouselExampleIndicator = () => {
        return cy.get('#carouselExampleIndicators')
            .should('have.attr', 'data-ride', 'carousel')
    }

    getPrevElemButton = () => {
        return cy.get('.carousel-control-prev').should('have.attr', 'data-slide', 'prev')
    }

    getNextElemButton = () => {
        return cy.get('.carousel-control-next').should('have.attr', 'data-slide', 'next')
    }
}

export default ContCar

