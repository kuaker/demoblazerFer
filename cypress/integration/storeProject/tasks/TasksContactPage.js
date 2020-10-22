/// <reference types="cypress" />

import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

class TasksContactPage {

    constructor() {
        this.contactpage = new ContactPage();
        this.homepage = new HomePage();
    }

    validateElementsPresent = () => {
        this.contactpage.contact.getModalContact().should('have.length', 4)
        this.contactpage.contact.getModalHeader()
        this.contactpage.contact.getModalTitle().should('have.text', 'New message')
        this.contactpage.contact.getModalBody()
        this.contactpage.contact.getModalFooter()
    }
}

export default TasksContactPage