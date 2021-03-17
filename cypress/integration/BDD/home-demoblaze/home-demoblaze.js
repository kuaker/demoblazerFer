import { Given,When, Then } from "cypress-cucumber-preprocessor/steps";
import TasksSellPage from "../../storeProject/tasks/TasksSellPage";
import TasksHomePage from "../../storeProject/tasks/TasksHomePage";

const url = Cypress.env("baseUrl");
const tasksellpage = new TasksSellPage();
const taskhomepage = new TasksHomePage();

Given("I open ecommerce", function () {
	cy.visit(url);
});
When("I select the products", function () {
	taskhomepage.taskSelectAProduct();
});
Then("I add the products", function () {
	tasksellpage.taskAddAProduct();
});
