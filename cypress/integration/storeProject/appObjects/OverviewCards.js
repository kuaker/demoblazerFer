class OverviewCards {
    getOverviewCards = () => {
        return cy.get('.col-lg-4.col-md-6.mb-4').children('div').should('have.attr','class','card h-100')
    }
}

export default OverviewCards