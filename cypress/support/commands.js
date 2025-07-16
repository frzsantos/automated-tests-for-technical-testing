/// <reference types="cypress" />

Cypress.Commands.add('clickButton', (element) => {
    cy.get(element).should('be.visible').click();
})

Cypress.Commands.add('clickFirstButton', (element) => {
    cy.get(element).first().should('be.visible').click();
})

Cypress.Commands.add('getAndType', (element, text) => {
    cy.get(element).should('be.visible').type(text);
})