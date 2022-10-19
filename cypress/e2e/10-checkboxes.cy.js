describe('Demo qa', () => {
    
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/checkbox`)
    });
    
    it('Checkbox scenario', () => {
        cy.get('input[type="checkbox"]').click({force:true});
        cy.get('#result').should('have.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    });
});

describe.only('InternetHero QA', () => {
    
    beforeEach(() => {
        cy.visit(`${Cypress.env("internetHero")}/checkboxes`)
    });
    
    it('Checkbox scenario', () => {
        cy.get('form#checkboxes input').eq(0).click().should('be.checked')
        cy.get('form#checkboxes input').eq(1).click().should('not.be.checked')
    });
});