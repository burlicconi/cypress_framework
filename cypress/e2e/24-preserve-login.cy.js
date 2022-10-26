Cypress.session.clearAllSavedSessions();

describe('Preserve login', () => {

    beforeEach(() => {
        cy.session("mySesion", ()=>{
        cy.visit(`${Cypress.env("demoQA")}/login`);
        cy.get("#userName").type("test");
        cy.get("#password").type("Test1234*");
        cy.get("#login").click();
        cy.url().should("contain","profile"); 
        })      
    });
    
    it('Check if session was saved', () => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });

    it('Check if session was saved', () => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });

});