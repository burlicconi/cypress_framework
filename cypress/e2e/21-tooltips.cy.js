describe('Tooltips', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/tool-tips`)    
    });
    
    it.skip('Hover the button tooltip', () => {
        cy.get("#toolTipButton").realHover();
        cy.get(".tooltip-inner").should("have.text", "You hovered over the button")

    });

    it.skip('Hover the A tag tooltip', () => {
        cy.contains("a","#Contrary").realHover();
        cy.get(".tooltip-inner").should("have.text", "You hovered over the Contrary")

    });

    
});