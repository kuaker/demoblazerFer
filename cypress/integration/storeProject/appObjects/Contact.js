/// <reference types="cypress" />

const MODAL_CONTENT = ".modal-content";
const MODAL_HEADER = ".modal-header";
const MODAL_BODY = ".modal-body";
const MODAL_FOOTER = ".modal-footer";
const BUTTON = "button";
const EX_MODAL_LABEL = "#exampleModalLabel";
const FORM = "form";
const DIV = "div";

class Contact {
	getModalContact = () => cy.get(MODAL_CONTENT);

	getModalHeader = () => cy.get(MODAL_HEADER);

	getModalBody = () => cy.get(MODAL_BODY);

	getModalFooter = () => cy.get(MODAL_FOOTER);

	getCloseModal = () => this.getModalHeader().children(BUTTON);

	getModalTitle = () => cy.get(EX_MODAL_LABEL);

	getForm = () => this.getModalBody().children(FORM);

	getContactEmailLabel = () => this.getForm().children(DIV).eq(0);

	getContactNameLabel = () => this.getForm().children(DIV).eq(1);

	getMessageLabel = () => this.getForm().children(DIV).eq(2);

	getFooterCloseBtn = () => this.getModalFooter().children(BUTTON).eq(0);

	getFooterSendBtn = () => this.getModalFooter().children(BUTTON).eq(1);
}

export default Contact;
