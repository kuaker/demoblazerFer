import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import TasksSellPage from "../../storeProject/tasks/TasksSellPage";
import TasksHomePage from "../../storeProject/tasks/TasksHomePage";
import GooglePage from "../../storeProject/pages/GooglePage";
import ProductPage from "../../storeProject/pages/ProductPage";

const url = Cypress.env("baseUrl");
const tasksellpage = new TasksSellPage();
const taskhomepage = new TasksHomePage();
const gooUrl = Cypress.env("google");
const googlepage = new GooglePage();
const productpage = new ProductPage();

let title;

Given("I open ecommerce", function () {
	cy.visit(url);
});
When("I select the products", function () {
	taskhomepage.taskSelectAProduct();
});

And("I add the products", function () {
	tasksellpage.taskAddAProduct();
});

Then("Verifico el producto", function () {
	productpage.getH2().contains("Samsung galaxy s6");
});

And("Tomo el titulo y lo guardo", function () {
	productpage.getH2().then((e) => {
		title = e.text();
	});
});

Given("Abro Google", function () {
	cy.document().then((doc) => {
		doc.location.replace(gooUrl);
	});
});

And("Realizo una búsqueda", function () {
	googlepage.getSearchBar().type(title).type("{enter}");
});