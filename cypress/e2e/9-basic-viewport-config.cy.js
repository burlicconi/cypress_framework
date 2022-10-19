describe('cy.viewport() demo', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("angular")}/angularjs-protractor-practice-site`)
    });
    it('device name', () => {
        cy.viewport('iphone-6')
        cy.get('#mobile_menu_toggler').should('be.visible')
    });

    it('specific viewport', () => {
        cy.viewport(1400,1000)
        cy.get('#mobile_menu_toggler').should('be.visible')
    });
});