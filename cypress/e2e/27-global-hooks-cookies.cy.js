describe('', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });
    
    it('Success login preserved', () => {
        cy.get("#userName").type("test");
    });

    it('Success login preserved', () => {
        cy.get("#userName").type("test");
    });

    it('Count the cookies', () => {
        cy.getCookies().then((cookies)=>{
            cy.log("Cookies: ", cookies)
            expect(cookies).to.have.length(5)
        })

    });
});