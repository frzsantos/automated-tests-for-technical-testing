// Import commands.js using ES2015 syntax:
import './commands'
import './api/commands.user'
import './ui/commands.checks'

// Import plugin dependencies
import 'cypress-plugin-api'

// Ignore uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => { return false });

// Defines the data for the tests
beforeEach(() => {
    cy.fixture(`${Cypress.env('environment').toLowerCase()}.json`).as('data')
})