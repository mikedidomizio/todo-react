describe('My app', () => {
  beforeEach((() => {
    cy.visit('http://localhost:3000/todo-react')
  }))

  it('should show all tasks', () => {
    cy.percySnapshot('all tasks')
  });

  it('should only show active tasks', () => {
    cy.get('.btn').contains('Active').click();
    cy.percySnapshot('active tasks')
  });

  it('should only show completed tasks', () => {
    cy.get('.btn').contains('Completed').click();
    cy.percySnapshot('completed tasks')
  });
});