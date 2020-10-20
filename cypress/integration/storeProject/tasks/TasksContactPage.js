import ContactPage from "../pages/ContactPage"
import HomePage from "../pages/HomePage";
/// <reference types="cypress" />

import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

class TasksContactPage {

    constructor() {
        this.contactpage = new ContactPage();
        this.homepage = new HomePage();
    }
    
    validateElementsPresent = () => {

    }
}

export default TasksContactPage