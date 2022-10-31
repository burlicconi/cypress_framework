describe('Custom Comands', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });
    
    it('Success login scenario', () => {
        // cy.get("#userName").type("test");
        // cy.get("#password").type("Test1234*");
        // cy.get("#login").click();
        cy.login("test", "Test1234")
    });

    it('Wrong user login scenario', () => {
        cy.login("invalid", "invalid")
    });

});