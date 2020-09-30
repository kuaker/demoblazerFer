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
}

export default TasksHomePage