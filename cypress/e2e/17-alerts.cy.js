describe('Alerts', () => {
    
    beforeEach(() => {
        cy.visit(`${Cypress.env("internetHero")}//javascript_alerts`)
    });
    
    it('JS Alert', () => {
        cy.contains("button","Click for JS Alert").click();
        cy.on("window:alert", (msg) => {
            expect(msg).to.be.equal("I am a JS Alert")
        })
        cy.on("window:confirm",()=>true);
        cy.get('#result').should("have.text", "You successfully clicked an alert")
    });

    it('JS Confirm ( accept )', () => {
        cy.contains("button","Click for JS Confirm").click();
        cy.on("window:confirm", (msg) => {
            expect(msg).to.be.equal("I am a JS Confirm")
        })
        cy.on("window:confirm",()=>true);
        cy.get('#result').should("have.text", "You clicked: Ok")
    });

    it('JS Confirm ( cancel )', () => {
        cy.contains("button","Click for JS Confirm").click();
        cy.on("window:confirm", (msg) => {
            expect(msg).to.be.equal("I am a JS Confirm")
        })
        cy.on("window:confirm",()=>false);
        cy.get('#result').should("have.text", "You clicked: Cancel")
    });

    it.only('JS Prompt', () => {
        cy.window().then((window) => {
            cy.stub(window, "prompt").returns("Hello form prompt");
            cy.contains("button", "Click for JS Prompt").click();
        });
        cy.get("#result").should("have.text", "You entered: Hello form prompt")
    });
});