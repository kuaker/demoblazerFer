class GooglePage {
	getSearchBar = () => {
		return cy.get('input[name="q"]');
	};
}

export default GooglePage;
