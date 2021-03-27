const COLUMN = ".col-lg-4.col-md-6.mb-4";
const DIV = "div";

class OverviewCards {
	getOverviewCards = () =>
		cy.get(COLUMN).children(DIV).should("have.attr", "class", "card h-100");
}
export default OverviewCards;
