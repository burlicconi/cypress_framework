describe('basics', () => {
    
    beforeEach(()=>{
        cy.visit("/textinput");
    })
    
    it('visit explaination text input', () => {
      cy.log("Hello from the it")
    });
    
    it('visit explain', () => {
        cy.url().then((url)=>{
            cy.log(`This is our current url: ${url}`)
            expect(url).contains("/textinput")
        })
    });

    it('title validation', ()=>{
        cy.title().then((title)=>{
            cy.log(title)
            expect(title).to.be.eql("Text Input")
        })
    })

    it('Input chalenge', ()=>{
        cy.get('input#newButtonName').type('hello form input ');
        cy.get('*#updatingButton').click().should('have.text', 'hello form input '); 
    })
    
  })