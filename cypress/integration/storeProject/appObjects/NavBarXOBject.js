const NAVA = "#nava";
const IMG = "img";

class NavBarXObject {
	getnavBarBrandLogo = () =>
		cy.get(NAVA).should("have.text", "\n      PRODUCT STORE");

	getImg = () =>
		this.getnavBarBrandLogo()
			.children(IMG)
			.should("have.attr", "src", "bm.png");
}

export default NavBarXObject;
