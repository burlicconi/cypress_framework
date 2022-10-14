describe.skip('Click Challenge', () => {
    beforeEach(() => {
        cy.visit("/click")
    });
    it('class assert', () => {
        cy.get('#badButton').click().should('have.class','btn-success');

    });
    it('background assert', () => {
        cy.get('#badButton').click().should('have.css','background-color','rgb(40, 167, 69)');
    });
});

describe('Hover challenge', () => {
    beforeEach(() => {
        cy.visit("/mouseover")
    });
    it('Hover with cypress workaround', () => {
        cy.get('.text-primary').trigger('mouseover')
    });

    it('Hover with real events', () => {
        cy.get('.text-primary').realHover();
    });
});