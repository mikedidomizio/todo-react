describe('My app', () => {
    beforeEach((() => {
        cy.visit('http://localhost:3000/todo-react')
    }))

    // eslint-disable-next-line no-undef
    after(() => {
        cy.eyesClose()
    })

    // eslint-disable-next-line no-undef
    before(() => {
        cy.eyesOpen({
            appName: 'todo React',
            testName: 'tasks',
        })
    })

    it('should show all tasks', () => {
        cy.eyesCheckWindow({
            tag: "all tasks",
            target: 'window',
            fully: true
        });
    });

    it('should only show active tasks', () => {
        cy.get('.btn').contains('Active').click();
        cy.eyesCheckWindow({
            tag: "active tasks",
            target: 'window',
            fully: true
        });
    });

    it('should only show completed tasks', () => {
        cy.get('.btn').contains('Completed').click();
        cy.eyesCheckWindow({
            tag: "completed tasks",
            target: 'window',
            fully: true
        });
    });
});