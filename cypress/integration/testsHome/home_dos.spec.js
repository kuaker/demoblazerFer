/// <reference types="cypress" />

const prods = require("../../../fixtures/products.json");

import ApiRequest from "../apis/ApiRequest";
import TasksHomePage from "../tasks/TasksHomePage";

context("ML HOME PAGE", function () {
  const url = Cypress.env("baseUrl");
  const taskshomepage = new TasksHomePage();

  const apiUrl = Cypress.env("apiUrl");
  const api = new ApiRequest();

  describe("Home", function () {
    beforeEach(function () {
      cy.visit(url);
      cy.server();
    });

    it("1 - Validar elementos del HOME", function () {
      cy.wait(2000);
      taskshomepage.validateNavBarXElems();
      taskshomepage.validateCorouselElems();
      taskshomepage.validateListItemsElements();
      taskshomepage.validateOverviewCards();
    });

    it("2 - should fetch and render foo", () => {
      // load fixture and mock response
      cy.fixture("products").then((response) => {
        cy.route({
          method: "GET",
          // you can also setup base url in cypress config
          // it can be used as Cypress.env('BASE_API_URL')
          url: "https://api.demoblaze.com/entries",
          response: response,
        }).then((r) => {
          cy.log(JSON.stringify(r.response.Items[0].cat));
        });
      });
    });

    it("3 - should fetch and render foo", () => {
      cy.route({
        method: "GET",
        // you can also setup base url in cypress config
        // it can be used as Cypress.env('BASE_API_URL')
        url: "https://api.demoblaze.com/entries",
        response: prods,
      }).then((r) => {
        cy.log(JSON.stringify(r.response.Items[0].cat));
      });
    });

    it("4 - should fetch and render foo", () => {
      //cy.server()
      api.getMockEntries().then((r) => {
        cy.log(JSON.stringify(r));
      });
    });
  });

  describe("FOO", () => {
    it("should fetch and render foo", () => {
      cy.server();
      // load fixture and mock response
      cy.fixture("products").then((response) => {
        cy.route({
          method: "GET",
          // you can also setup base url in cypress config
          // it can be used as Cypress.env('BASE_API_URL')
          url: "https://api.demoblaze.com/entries",
          response: response,
        });
      });
    });
  });
});
