describe('Envoirment Variables Demo', () => {
    it('Demo', () => {
        cy.log(`Printing Env Variable Value: ${Cypress.env("demoVar")}`)
    });
});