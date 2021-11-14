Cypress.Commands.add('getEntries', (__uri) => {
    const entries = cy.request({
        url: __uri + 'entries',
        method: 'GET',
    })
    return entries
})