class Modal {
	getModalClass = () => {
		return cy.get(".modal-dialog");
	};

	getUser = () => {
		return cy.get("#loginusername");
	};

	getPass = () => {
		return cy.get("#loginpassword");
	};

	getModalLoginBtn = () => {
		return cy.get(".btn.btn-primary");
	};

	getModalCloseBtn = () => {
		return cy.get(".btn.btn-secondary");
	};
}

export default Modal;
