/// <reference types="cypress" />

import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

class TasksContactPage {
  constructor() {
    this.contactpage = new ContactPage();
    this.homepage = new HomePage();
  }

  validateElementsPresent = () => {
    // Objetos del Header
    this.contactpage.contact.getModalContact().should("have.length", 4);
    this.contactpage.contact.getModalHeader().should("be.visible");
    this.contactpage.contact.getModalTitle().should("have.text", "New message");
    this.contactpage.contact
      .getCloseModal()
      .should("be.visible")
      .and("have.attr", "type", "button")
      .and("have.attr", "class", "close");

    // Objetos del Body
    this.contactpage.contact.getModalBody().should("be.visible");
    this.contactpage.contact
      .getContactEmailLabel()
      .should("be.visible")
      .children("label")
      .then((e) => {
        expect(e.text()).to.be.equals("Contact Email:");
      });
    this.contactpage.contact
      .getContactNameLabel()
      .should("be.visible")
      .children("label")
      .then((e) => {
        expect(e.text()).to.be.equals("Contact Name:");
      });
    this.contactpage.contact
      .getMessageLabel()
      .should("be.visible")
      .children("label")
      .then((e) => {
        expect(e.text()).to.be.equals("Message:");
      });

    // Objetos del footer
    this.contactpage.contact.getModalFooter().should("be.visible");
    this.contactpage.contact
      .getFooterCloseBtn()
      .should("be.visible")
      .and("have.text", "Close")
      .and("have.attr", "type", "button");
    this.contactpage.contact
      .getFooterSendBtn()
      .should("be.visible")
      .and("have.text", "Send message")
      .and("have.attr", "onclick", "send()");
    cy.task("log", "===== Validación de los todos elementos del Contact =====");
  };

  taskTestFieldBehaviour = () => {
    // Label Email
    this.contactpage.contact
      .getContactEmailLabel()
      .children("input")
      .type("fahnte09@gmail.com");
    this.contactpage.contact
      .getContactEmailLabel()
      .children("input")
      .clear({ multiple: true });
    this.contactpage.contact
      .getContactEmailLabel()
      .children("input")
      .type("1231321548949");
    this.contactpage.contact
      .getContactEmailLabel()
      .children("input")
      .clear({ multiple: true });

    // Label Name
    this.contactpage.contact
      .getContactNameLabel()
      .children("input")
      .type("Fernando");
    this.contactpage.contact
      .getContactNameLabel()
      .children("input")
      .clear({ multiple: true });
    this.contactpage.contact
      .getContactNameLabel()
      .children("input")
      .type("7963241");
    this.contactpage.contact
      .getContactNameLabel()
      .children("input")
      .clear({ multiple: true });
    cy.log("===== Valida los 4 campos. =====");
    cy.task("log", "===== Validación de los 4 campos. =====");
  };

  taskCloseContactModal = () => {
    this.contactpage.contact.getCloseModal().eq(0).click();
    cy.task(
      "log",
      "===== Validación de cierre de la ventana modal desde la cruz. ====="
    );
  };

  taskSendMessage = () => {
    this.contactpage.contact.getFooterSendBtn().click();
    cy.task("log", "===== Validación del botón de mandar un mensaje. =====");
  };

  taskCloseButton = () => {
    this.contactpage.contact.getFooterCloseBtn().click()
    cy.task("log", "===== Validación de cierre desde el botón close. =====");
  }

  taskValidateAlertMessage = () => {
    cy.on("window:alert", (txt) => {
      expect(txt).to.be.eq("Thanks for the message!!");
    });
    cy.task("log", "===== Validación de aparición del mensaje de Alert. =====");
  };
}

export default TasksContactPage;
