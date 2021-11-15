describe('My app', () => {
  beforeEach((() => {
    cy.visit('http://localhost:3000/todo-react')
  }))

  it('should look good', () => {
    cy.percySnapshot('Initial render of application')
  });
});