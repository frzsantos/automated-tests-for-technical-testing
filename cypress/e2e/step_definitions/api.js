/// <reference types="cypress" />

// Steps for the Cypress Cucumber Preprocessor
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("eu enviar uma requisição GET para o endpoint {string}", (endpoint) => {
    cy.api({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}${endpoint}`,
        failOnStatusCode: false
    }).then((response) => {
        cy.wrap(response).as('apiResponse');
    });
})

Then("o status code da resposta deve ser {string}", (statusCode) => {
    cy.get('@apiResponse').then((response) => {
        expect(response.status).to.eq(parseInt(statusCode));
    });
})

Then("o campo name deve estar presente na estrutura list", () => {
    cy.get('@apiResponse').then((response) => {
        expect(response.body.data.list.name).to.be.a('string').and.not.to.be.empty;
    });
})