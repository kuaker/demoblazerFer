/// <reference types="cypress" />

import ApiRequest from '../apis/ApiRequest'

context('ML HOME PAGE', function () {


  const apiUrl = Cypress.env('apiUrl')
  const local = Cypress.env('local')
  const api = new ApiRequest();

  describe('Home', function () {
    beforeEach(function () {
      api.getEntries(apiUrl).as('entries')
      api.getPosts(local).as('posts')
    })

    it('API ENTRIES', function () {
      cy.get('@entries').its('body').then(body => {
        expect(body.Items[0].cat).to.be.eq('phone')
      })
    })

    it('API POSTS', function () {
      cy.get('@posts').its('body').then(body => {
        expect(body[0].title).to.be.eq('json-server')
      })
    })

  })

})