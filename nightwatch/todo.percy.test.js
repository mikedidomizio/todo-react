describe('My app', () => {
    beforeEach(((browser) => {
        browser.url('http://localhost:3000/todo-react')
    }))

    it('should show all tasks', (browser) => {
        browser.percySnapshot('all tasks');
    });

    it('should only show active tasks', (browser) => {
        browser.useXpath().click("//*[contains(text(),'Active')]")
        browser.percySnapshot('active tasks')
    });

    it('should only show completed tasks', (browser) => {
        browser.useXpath().click("//*[contains(text(),'Completed')]")
        browser.percySnapshot('completed tasks')
    });
});
