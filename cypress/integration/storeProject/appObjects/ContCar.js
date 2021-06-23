const CONTCAR = '#contcar'
const CAROUSEL_EXAMPLE = '#carouselExampleIndicators'
const CAROUSEL_CONTROL_PREV = '.carousel-control-prev'
const CAROUSEL_CONTROL_NEXT = '.carousel-control-next'

class ContCar {
    getConCarDiv = () => cy.get(CONTCAR)

    getCarouselExampleIndicator = () =>
        cy.get(CAROUSEL_EXAMPLE).should('have.attr', 'data-ride', 'carousel')

    getPrevElemButton = () =>
        cy.get(CAROUSEL_CONTROL_PREV).should('have.attr', 'data-slide', 'prev')

    getNextElemButton = () =>
        cy.get(CAROUSEL_CONTROL_NEXT).should('have.attr', 'data-slide', 'next')
}

export default ContCar
