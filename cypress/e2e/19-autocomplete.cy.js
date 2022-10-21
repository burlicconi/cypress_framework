describe('Autocomplete', () => {
     beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/auto-complete`)
     });

     it('Autocomplete example', () => {
        cy.get(".auto-complete__value-container").first().type("y");

        cy.get("#react-select-2-option-0").click();
        cy.get(".auto-complete__multi-value__label").should("have.text","Yellow")
     });
});