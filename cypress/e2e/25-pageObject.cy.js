import {LoginPage} from "../../cypress/pages/Login";
import {ProfilePage} from "../../cypress/pages/Profile"

Cypress.session.clearAllSavedSessions();

describe('Basics', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });
    
    it('Success login scenario', () => {
        // cy.get("#userName").type("test");
        // cy.get("#password").type("Test1234*");
        // cy.get("#login").click();
        LoginPage.submitForm("test", "Test1234*")
        cy.url().should("contain","profile");
        ProfilePage.headerElement.should("have.text", "Profile");
        ProfilePage.userElement.should("have.text","test")
    });

    it('Wrong user login scenario', () => {
        LoginPage.submitForm("testt", "Test1234*")
        cy.url().should("not.contain","profile");
        LoginPage.invalidMsgElement.should("have.text", "Invalid username or password!");
        LoginPage.headerElement.should("have.text", "Login");
    });

});