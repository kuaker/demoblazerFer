/// <reference types="cypress" />

const prods = require('../../../fixtures/products.json')

class ApiRequest {
    getEntries = (uri) => {
        const entries = cy.request({
            url: uri + 'entries',
            method: 'GET',
        })
        return entries
    }

    getPosts = (uri) => {
        const posts = cy.request({
            url: uri + 'posts',
            method: 'GET',
        })
        return posts
    }

    getMockEntries = () => {
        const mEntries = cy
            .route({
                method: 'GET',
                // you can also setup base url in cypress config
                // it can be used as Cypress.env('BASE_API_URL')
                url: 'https://api.demoblaze.com/entries',
                response: prods,
            })
            .its('response')
        return mEntries
    }
}

export default ApiRequest
