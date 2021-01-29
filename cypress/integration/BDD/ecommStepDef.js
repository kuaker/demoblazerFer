import {Given, When, Then} from "cypress-cucumber-preprocessor"
import TasksSellPage from '../tasks/TasksSellPage'
import TasksHomePage from '../storeProject/tasks/TasksHomePage'


const url = Cypress.env('baseUrl')
const tasksellpage = new TasksSellPage()
const taskhomepage = new TasksHomePage();

Given('I open demoBlazer', ()=> {
    cy.visit(url)
})
When('I select the products', ()=> {
  taskhomepage.taskSelectAProduct()
})
Then('I add the products', ()=> {
    tasksellpage.taskAddAProduct()
})
