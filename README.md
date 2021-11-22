# todo-react with visual regression testing

todo app written with React, forked from [here](https://github.com/mdn/todo-react).

This fork includes visual regression testing using [Cypress](https://www.cypress.io/)
and integrations with [Percy](https://percy.io/) and [Applitools](https://applitools.com) which are visual regression tools.

Creating a pull request in GitHub will run jobs to test and push to these tools.
Requires both an `APPLITOOLS_API_KEY` and `PERCY_TOKEN` otherwise the build will fail.

## Available Scripts

### Run local server

In the project directory, you can run:

`npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Running the visual regression tests locally

Run the local server, then you can run (with the environment variables set)

`npm run percy`

`npm run applitools`