
Cypress.session.clearAllSavedSessions();
describe('Using a fixture', () => {
    it('Load the data and printing data in console', () => {
        cy.fixture("jsonExample").then((testData)=>{
            cy.log(testData);
            cy.log(testData.property1);
            cy.log(testData.property2);

        })
    });
});