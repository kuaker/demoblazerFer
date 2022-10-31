/// <reference types="cypress" />

context("ML HOME PAGE", function () {
  const url = Cypress.env("baseUrl");

  describe("Home", function () {
    beforeEach(function () {
      cy.visit('/');
    });

    it("1 - See the page", function () {
      cy.wait(2000);
    });
  });
});
