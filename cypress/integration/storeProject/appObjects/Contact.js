/// <reference types="cypress" />

class Contact {
  getModalContact = () => {
    return cy.get(".modal-content");
  };

  getModalHeader = () => {
    return cy.get(".modal-header");
  };

  getModalBody = () => {
    return cy.get(".modal-body");
  };

  getModalFooter = () => {
    return cy.get(".modal-footer");
  };

  getCloseModal = () => {
    return this.getModalHeader().children('button');
  };

  getModalTitle = () => {
    return cy.get("#exampleModalLabel");
  };

  getForm = () => {
    return this.getModalBody().children("form");
  };

  getContactEmailLabel = () => {
    return this.getForm().children("div").eq(0);
  };

  getContactNameLabel = () => {
    return this.getForm().children("div").eq(1);
  };

  getMessageLabel = () => {
    return this.getForm().children("div").eq(2);
  };

  getFooterCloseBtn = () => {
    return this.getModalFooter().children("button").eq(0);
  };

  getFooterSendBtn = () => {
    return this.getModalFooter().children("button").eq(1);
  };
}

export default Contact;
