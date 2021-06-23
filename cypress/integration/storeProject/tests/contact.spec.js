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

        it('1 - Validar elementos del modal Contact', function () {
            cy.wait(2000)
            taskshomepage.selectModalLink('Contact')
            taskscontactpage.validateElementsPresent()
        })

        it('2 - Validar funcionabilidad de los campos del form Contact', function () {
            cy.wait(2000)
            taskshomepage.selectModalLink('Contact')
            taskscontactpage.taskTestFieldBehaviour()
        })

        it('3 - Validar funcionabilidad de los botones del form Contact', function () {
            cy.wait(2000)
            taskshomepage.selectModalLink('Contact')
            cy.wait(2000)
            taskscontactpage.taskCloseContactModal()
            taskshomepage.selectModalLink('Contact')
            cy.wait(2000)
            taskscontactpage.taskCloseButton()
            taskshomepage.selectModalLink('Contact')
            cy.wait(2000)
            taskscontactpage.taskSendMessage()
            taskscontactpage.taskValidateAlertMessage()
        })
    })
})
