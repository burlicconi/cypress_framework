describe('Iframe example', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`)
    });
    it('Nested iframe', () => {
        cy.get("#frame1").then(function($iframe){
            const $body = $iframe.contents().find("body");
            cy.wrap($body).should("have.text", "Parent frame")
            cy.wrap($body).find("iframe").then(function($childFrame){
                const $childBody = $childFrame.contents().find("body");
                cy.wrap($childBody).find("p").should("have.text", "Child Iframe");
            })
        })
    });
});

describe.only('Typing on an ifreme using IntnetApp', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("internetHero")}/iframe`)
    });
    it('Iframe Demo', () => {
        cy.get("#mce_0_ifr").then(function($iframe){
            const $body = $iframe.contents().find("body");
            cy.wrap($body).find("p").type("{selectAll}{del}Hello world")
        })

        cy.get("#mce_0_ifr").then(function($iframe){
            const $body = $iframe.contents().find("body");
            cy.wrap($body).find("p").should("have.text", "Hello world")
        })
    });
});