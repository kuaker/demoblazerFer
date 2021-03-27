import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import TasksSellPage from "../../../storeProject/tasks/TasksSellPage";
import TasksHomePage from "../../../storeProject/tasks/TasksHomePage";
import GooglePage from "../../../storeProject/pages/GooglePage";
import ProductPage from "../../../storeProject/pages/ProductPage";
import SellPage from "../../../storeProject/pages/SellPage";

const url = Cypress.env("baseUrl");
const tasksellpage = new TasksSellPage();
const taskhomepage = new TasksHomePage();
const gooUrl = Cypress.env("google");
const googlepage = new GooglePage();
const productpage = new ProductPage();
const sellpage = new SellPage();

let title;

Given("I open ecommerce", function () {
	cy.visit(url);
	cy.task("log", "Abro el ecommerce");
});
When("I select the products", function () {
	taskhomepage.taskSelectAProduct();
	cy.task("log", "Selecciono los productos");
});

And("I add the products", function () {
	tasksellpage.taskAddAProduct();
	cy.task("log", "Agrego un producto al carrito");
});

And("I confirm the product", function () {
	sellpage.sellings.getConfirm();
	cy.task("log", "Confirmo el producto");
});

Then("I check the product", function () {
	productpage
		.getH2()
		.contains("Samsung galaxy s6")
		.and("have.text", "Samsung galaxy s6");
	cy.task("log", "Chequeo que el producto sea el correcto");
});

And("I get the title and i save it", function () {
	productpage.getH2().then((e) => {
		title = e.text();
	});
	cy.task("log", "Me agarro el titulo y lo guardo");
});

Given("I open Google", function () {
	cy.document().then((doc) => {
		doc.location.replace(gooUrl);
	});
	cy.task("log", "Abro Google");
});

And("I google the product saved", function () {
	googlepage.getSearchBar().type(title).type("{enter}");
	cy.task("log", "Google el producto");
});

Then("I see the name of the product in the search bar", function () {
	googlepage.getSearchBar().should("have.value", "Samsung galaxy s6");
});
