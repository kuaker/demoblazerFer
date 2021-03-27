const LIST_GROUP_ITEM = ".list-group-item";

class Categories {
	getListElemsCat = () =>
		cy.get(LIST_GROUP_ITEM).should("have.attr", "class", "list-group-item");
}
export default Categories;
