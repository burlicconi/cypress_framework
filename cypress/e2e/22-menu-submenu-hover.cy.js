describe('Menu and submenu hover', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/menu`)    
    });
    
    it('Hover the submenu', () => {
        cy.get('a').contains("Main Item 2").realHover();
        cy.contains("a","SUB SUB LIST »").realHover();

    });

});