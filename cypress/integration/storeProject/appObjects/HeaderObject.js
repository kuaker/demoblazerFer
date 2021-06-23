import Utils from '../utils/Utils'

const header = require('../../../fixtures/propertiesHome.json')
const LOGIN_2 = '#login2'
const LOGOUT_2 = '#logout2'

class HeaderObject {
    constructor() {
        this.utils = new Utils()
    }

    getSearchBar = () => this.utils.getElement('input', 'id', header.searchBar)

    getSearchButton = () =>
        this.utils.getElement('button', 'type', header.searchButton)

    getNavBar = () => this.utils.getElement('div', 'id', header.navBar)

    getNavBarLis = () => this.getNavBar().children('ul').children('li')

    getLogInBtn = () => cy.get(LOGIN_2)

    getLogOutBtn = () => cy.get(LOGOUT_2)
}

export default HeaderObject
