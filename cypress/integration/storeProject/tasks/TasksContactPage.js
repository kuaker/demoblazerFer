/// <reference types="cypress" />

import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

class TasksContactPage {
  constructor() {
    this.contactpage = new ContactPage();
    this.homepage = new HomePage();
  }

  validateElementsPresent = () => {
    this.contactpage.contact.getModalContact().should("have.length", 4);
    this.contactpage.contact.getModalHeader().should("be.visible");
    this.contactpage.contact.getModalTitle().should("have.text", "New message");
    this.contactpage.contact.getCloseModal().should("be.visible");

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
  };
}

export default TasksContactPage;
