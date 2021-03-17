import Categories from "../appObjects/Categories";
import ContCar from "../appObjects/ContCar";
import Footer from "../appObjects/Footer";
import HeaderObject from "../appObjects/HeaderObject";
import Modal from "../appObjects/Modal";
import NavBarXObject from "../appObjects/NavBarXOBject";
import OverviewCards from "../appObjects/OverviewCards";

class HomePage {
	constructor() {
		this.header = new HeaderObject();
		this.navbarx = new NavBarXObject();
		this.corouselObjs = new ContCar();
		this.categories = new Categories();
		this.overviewcards = new OverviewCards();
		this.footer = new Footer();
		this.modal = new Modal();
	}
}

export default HomePage;
