// Cypress.config("defaultCommandTimeout",16000)
describe('Retry ability demo', () => {
    it('Visit without delay', () => {
        cy.visit("/loaddelay",{timeout:0})
    });

    it('Visit with delay', () => {
        cy.visit("/loaddelay")
    });

    it('Visit client delay', () => {
        cy.visit("/clientdelay");
        cy.get('#ajaxButton').click();
        cy.get('.bg-success').should("have.text", "Data calculated on the client side.")
    });

    it('Progress bar scenario', () => {
        cy.visit("/progressbar");
        cy.get('#startButton').click();
        cy.get('#progressBar',{timeout:30000}).should("have.text","100%")
    });
});