describe('Download file in QA Demo site', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`)
    });
    it('Download the file', () => {
        cy.get("#downloadButton").click();
        cy.verifyDownload("sampleFile.jpeg")
    });
});