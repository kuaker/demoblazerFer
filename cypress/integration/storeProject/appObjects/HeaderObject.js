import Utils from "../utils/Utils"

const header = require('../../../fixtures/propertiesHome.json')

class HeaderObject {

    constructor() {
        this.utils = new Utils();
    }

    getSearchBar = () => {
        return this.utils.getElement('input', 'id', header.searchBar)
    }

    getSearchButton = () => {
        return this.utils.getElement('button', 'type', header.searchButton)
    }

    getNavBar = () => {
        return this.utils.getElement('div','id',header.navBar)
    }

    getNavBarLis = () => {
        return this.getNavBar().children('ul').children('li')
    }
}

export default HeaderObject