class SearchPageComponent {
    private static APP_URL = "https://duckduckgo.com/";
    private static SEARCH_INPUT = "[id=searchbox_input]";

    static open() {
        cy.visit(this.APP_URL);
    }

    static searchFor(element: string) {
        cy.get(this.SEARCH_INPUT).type(element).type('{enter}');
    }

    static validateTitleContains(title: string) {
        cy.title().should('include', title);
    }
}

export default SearchPageComponent;
