import ContCar from '../appObjects/ContCar'
import HeaderObject from '../appObjects/HeaderObject';
import NavBarXObject from '../appObjects/NavBarXOBject';

class HomePage {

    constructor() {
        this.header = new HeaderObject();
        this.navbarx = new NavBarXObject();
        this.corouselObjs = new ContCar();
    }


}

export default HomePage