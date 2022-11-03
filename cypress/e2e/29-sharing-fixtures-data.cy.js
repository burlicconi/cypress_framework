Cypress.session.clearAllSavedSessions();
describe('Sharing a fixture data', () => {
    beforeEach(() => {
        cy.fixture("jsonExample").as("testData")
    });
    it('Sharing data #1', () => {
        cy.get("@testData").then((data)=>{
            cy.log(data.property1)
        })
    });
    it('Sharing data #2', () => {
        cy.get("@testData").then((data)=>{
            cy.log(data.property2)
        })
    });
    it('Sharing data #3', () => {
        cy.get("@testData").then((data)=>{
            cy.log(data)
        })
    });
});