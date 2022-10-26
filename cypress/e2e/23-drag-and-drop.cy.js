describe('Drag and drop example', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/droppable`)    
    });
    
    it('Drag and drop demo', () => {
       cy.get("#draggable").drag("#droppable",{force:true});
    });

});