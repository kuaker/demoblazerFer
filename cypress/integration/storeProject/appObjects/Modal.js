const MODAL_DIALOG = '.modal-dialog'
const LOGIN_USERNAME = '#loginusername'
const LOGIN_PASSWORD = '#loginpassword'
const BTN_PRIMARY = '.btn.btn-primary'
const BTN_SECONDARY = '.btn.btn-secondary'

class Modal {
    getModalClass = () => cy.get(MODAL_DIALOG)

    getUser = () => cy.get(LOGIN_USERNAME)

    getPass = () => cy.get(LOGIN_PASSWORD)

    getModalLoginBtn = () => cy.get(BTN_PRIMARY)

    getModalCloseBtn = () => cy.get(BTN_SECONDARY)
}

export default Modal
