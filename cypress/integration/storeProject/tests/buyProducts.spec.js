/// <reference types="cypress" />

import ApiRequest from '../apis/ApiRequest'
import TasksSellPage from '../tasks/TasksSellPage'
import TasksHomePage from '../tasks/TasksHomePage'

context('ML SELL PAGE', function () {
    const url = Cypress.env('baseUrl')
    const tasksellpage = new TasksSellPage()
    const taskhomepage = new TasksHomePage()

    const apiUrl = Cypress.env('apiUrl')
    const api = new ApiRequest()

    describe('Home', function () {
        beforeEach(function () {
            cy.visit(url)
        })

        it('1 - Comprar un producto', function () {
            cy.wait(2000)
            taskhomepage.taskSelectAProduct()
            tasksellpage.taskAddAProduct()
        })
    })
})
