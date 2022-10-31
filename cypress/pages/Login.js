import {Main} from "../../cypress/pages/Main"

class Login extends Main {

    username = "#userName";
    password = "#password";
    loginBtn = "#login";
    invalidMsg = "#name";

    get invalidMsgElement (){
        return cy.get(this.invalidMsg)
    }

    submitForm(username, password){
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginBtn).click();
    }
}

export const LoginPage = new Login();