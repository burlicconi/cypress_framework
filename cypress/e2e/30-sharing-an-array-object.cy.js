describe('Array of object - Users', () => {
    it('Getting user from my fixture', () => {
        cy.fixture("example")
        .its("users")
        .then((users)=>{
            // for(let i = 0; i<users.length; i++){
            //     cy.log(users[i])
            //     expect(users[i]).to.haveOwnProperty("valid")
            // }
            
            users.forEach((user)=>{
                cy.visit(`${Cypress.env("demoQA")}/login`);
                cy.login(user.username, user.password)
                if(user.valid){
                    cy.url().should("contain", "profile")
                }else{
                    cy.url().should("contain", "login")
                }
                cy.clearCookies();
                cy.clearLocalStorage();
            })
        })
    });
});