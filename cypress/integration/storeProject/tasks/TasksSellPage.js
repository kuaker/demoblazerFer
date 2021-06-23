import SellPage from '../pages/SellPage'

class TasksSellPage {
    constructor() {
        this.sellpage = new SellPage()
    }

    taskAddAProduct = () => {
        this.sellpage.sellings.getAddToCartBtn().click()
    }
}

export default TasksSellPage
