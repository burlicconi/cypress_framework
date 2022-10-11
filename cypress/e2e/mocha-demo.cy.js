describe('empty spec', () => {
  before(()=>{
    cy.log("Hello form before hook")
  })
  after(()=>{
    cy.log("Hello form after hook")
  })
  beforeEach(()=>{
    cy.log("Hello form before each hook")
  })
  afterEach(()=>{
    cy.log("Hello form after each hook")
  })

  it('testcase #1', () => {
    cy.log("Hello world");
  })
  it('testcase #2', () => {
    cy.log("Hello world");
  })
  it.only('testcase #3', () => {
    cy.log("Hello world");
  })
  it('testcase #4', () => {
    cy.log("Hello world");
  })
})