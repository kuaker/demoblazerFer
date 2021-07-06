import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import TasksSellPage from '../../../storeProject/tasks/TasksSellPage'
import TasksHomePage from '../../../storeProject/tasks/TasksHomePage'
import GooglePage from '../../../storeProject/pages/GooglePage'
import ProductPage from '../../../storeProject/pages/ProductPage'
import SellPage from '../../../storeProject/pages/SellPage'

const url = Cypress.env('baseUrl')
const tasksellpage = new TasksSellPage()
const taskhomepage = new TasksHomePage()
const gooUrl = Cypress.env('google')
const googlepage = new GooglePage()
const productpage = new ProductPage()
const sellpage = new SellPage()

let title

Given('Abro el ecommerce', function () {
    cy.visit(url)
    cy.task('log', 'Abro el ecommerce')
})
When('Selecciono los productos', function () {
    taskhomepage.taskSelectAProduct()
    cy.task('log', 'Selecciono los productos')
})

And('Agrego un producto al carrito', function () {
    tasksellpage.taskAddAProduct()
    cy.task('log', 'Agrego un producto al carrito')
})

And('Confirmo el producto', function () {
    sellpage.sellings.getConfirm()
    cy.task('log', 'Confirmo el producto')
})

Then('Chequeo que el producto sea el correcto', function () {
    productpage
        .getH2()
        .contains('Samsung galaxy s6')
        .and('have.text', 'Samsung galaxy s6')
    cy.task('log', 'Chequeo que el producto sea el correcto')
})

And('Me agarro el titulo y lo guardo', function () {
    productpage.getH2().then((e) => {
        title = e.text()
    })
    cy.task('log', 'Me agarro el titulo y lo guardo')
})

Given('Abro Google', function () {
    cy.document().then((doc) => {
        doc.location.replace(gooUrl)
    })
    cy.task('log', 'Abro Google')
})

And('Googleo el producto', function () {
    googlepage.getSearchBar().type(title).type('{enter}')
    cy.task('log', 'Googleo el producto')
})

Then('Chequeo que el producto sea el mismo', function () {
    googlepage.getSearchBar().should('have.value', 'Samsung galaxy s6')
    cy.task('log', 'Chequeo que el producto sea el mismo')
})
