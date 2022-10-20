describe('Broken imgs', () => {
    
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/broken`)
    });

    it('Not broken img', () => {
        cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]').should("be.visible").and(($img) => {
            expect($img[0].naturalWidth).greaterThan(0)
        })
    });

    it('Broken img', () => {
        cy.get('[src="/images/Toolsqa_1.jpg"]').should("be.visible").and(($img) => {
            expect($img[0].naturalWidth).greaterThan(0)
        })
    });
});