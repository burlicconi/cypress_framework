describe("Locators",()=>{
    beforeEach(()=>{
       cy.visit("/classattr")
    });

    it("How to find an element by its text",()=>{
        cy.xpath("//*[text()='Correct variant is']")
        .should("contain.text","Correct v")
     });

     it("Find by class",()=>{
        cy.xpath("//*[contains(@class, 'btn-primary')]")
        .should("have.css","background-color","rgb(0, 123, 255)")
        
     });
});