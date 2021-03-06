/// <reference types="cypress" />

import ApiRequest from '../apis/ApiRequest'
import TasksHomePage from '../tasks/TasksHomePage'

context('ML HOME PAGE', function () {
    const url = Cypress.env('baseUrl')
    const taskshomepage = new TasksHomePage()

    const apiUrl = Cypress.env('apiUrl')
    const api = new ApiRequest()

    describe('Home', function () {
        beforeEach(function () {
            cy.visit(url)
        })

        it('1 - Validar elementos del HOME', function () {
            cy.wait(2000)
            taskshomepage.validateNavBarXElems()
            taskshomepage.validateCorouselElems()
            taskshomepage.validateListItemsElements()
            taskshomepage.validateOverviewCards()
            taskshomepage.validateFooterParagraph()
            taskshomepage.validateFooterH4()
            taskshomepage.validateCopyRight()
        })
    })
})
