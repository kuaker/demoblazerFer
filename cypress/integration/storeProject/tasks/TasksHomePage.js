/// <reference types="cypress" />

const objs = require('../../../fixtures/objects.json')
const prods = require('../../../fixtures/products.json')

import HomePage from "../pages/HomePage";

class TasksHomePage {
    constructor() {
        this.homepage = new HomePage()
    }

    validateNavBarXElems = () => {
        this.homepage.navbarx.getnavBarBrandLogo().should('be.visible')
        this.homepage.navbarx.getImg()
    }

    validateCorouselElems = () => {
        this.homepage.corouselObjs.getCarouselExampleIndicator().should('be.visible')
        this.homepage.corouselObjs.getPrevElemButton().should('be.visible')
        this.homepage.corouselObjs.getNextElemButton().should('be.visible')
    }

    validateListItemsElements = () => {
        this.homepage.categories.getListElemsCat().each(($el, index) => {
            expect($el).to.be.visible
            expect($el.text()).to.be.eq(objs.categ[index])
        })
    }

    // Integrar contra api.
    validateOverviewCards = () => {
        return this.homepage.overviewcards.getOverviewCards().each(($el, index) => {
            expect($el.text()).to.be.eq(objs.txt[index])
            expect($el.children('div').children('h4').children('a').text()).to.be.eq(prods.Items[index].title)
            expect($el.children('div').children('h5').text()).to.be.eq('$' + prods.Items[index].price)
            //expect($el.children('div').children('p').text()).to.be.eq(prods.Items[index].desc)
        })
    }

    validateFooterParagraph= () => {
        return this.homepage.footer.getCaption().children('p').each(($el, i) => {
            expect($el.text()).to.be.eq(objs.footer.p[i])
        })
    }

    validateFooterH4 = () => {
        return this.homepage.footer.getCaption().children('h4').each(($el, i) => {
            expect($el.text()).to.be.eq(objs.footer.h4[i])
        })
    }

    validateCopyRight = () => {
        return this.homepage.footer.getCopyRight().then(e => {
            expect(e.text()).to.be.eq('\n    Copyright © Product Store 2017\n  ')
        })
    }

}

export default TasksHomePage