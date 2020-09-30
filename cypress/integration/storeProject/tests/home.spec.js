/// <reference types="cypress" />

import ApiRequest from '../apis/ApiRequest'
import TasksHomePage from '../tasks/TasksHomePage'

context('ML HOME PAGE', function () {

  const url = Cypress.env('baseUrl')
  const apiUrl = Cypress.env('apiUrl')
  const local = Cypress.env('local')
  const taskshomepage = new TasksHomePage()
  const api = new ApiRequest();

  describe('Home', function () {
    beforeEach(function () {
    //  cy.visit(url)
      api.getEntries(apiUrl).as('entries')
      api.getPosts(local).as('posts')
    })
/*
    it('Validar elementos del HOME', function () {
      cy.wait(2000)
      taskshomepage.validateNavBarXElems()
      taskshomepage.validateCorouselElems()
    })
*/
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