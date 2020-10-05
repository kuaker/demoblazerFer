const objs = require('../../../fixtures/objects.json')

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

    validateOverviewCards = () => {
        this.homepage.overviewcards.getOverviewCards().each(($el) => {
            expect($el.text()).to.be.eq('The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420↵ processor and it comes with 3GB of RAM. The phone packs 32GB of ↵internal storage cannot be expanded. ')
        });
    }

}

export default TasksHomePage