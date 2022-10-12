describe("Locators",()=>{
    beforeEach(()=>{
       cy.visit("/dynamicid")
    });

    it("cy.contains exemple",()=>{
        cy.contains("Button with Dynamic ID").should("have.text","Button with Dynamic ID")
     });

     it("cy.get + cy.find example",()=>{
        cy.get("div").find("button")
        .should("have.text","Button with Dynamic ID");
     });

     it("css selectors using attribute",()=>{
        cy.get("button[class='btn btn-primary']")
        .should("have.text","Button with Dynamic ID");
     });

     it("css selectors using a class",()=>{
        cy.get(".btn-primary")
        .should("have.text","Button with Dynamic ID");
     });

    
})