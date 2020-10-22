/// <reference types="cypress" />

import TasksContactPage from '../tasks/TasksContactPage'
import TasksHomePage from '../tasks/TasksHomePage'

context('ML HOME PAGE', function () {

  const url = Cypress.env('baseUrl')
  const taskshomepage = new TasksHomePage()
  const taskscontactpage = new TasksContactPage()

  describe('Home', function () {
    beforeEach(function () {
      cy.visit(url)
    })

    it('1 - Validar elementos del HOME', function () {
      cy.wait(2000)

      taskshomepage.selectModalLink('Contact')
      taskscontactpage.validateElementsPresent()

    })
  })
})