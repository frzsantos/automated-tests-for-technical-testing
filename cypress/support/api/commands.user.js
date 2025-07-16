/// <reference types="cypress" />

Cypress.Commands.add('createUser', () => {
    const userData = {
        name: 'User Automation',
        email: `test${Cypress._.random(11111, 99999)}@automated.com`,
        password: 'Test@123',
        firstname: 'User',
        lastname: 'Automation',
        address1: 'Street for automation',
        country: 'United States',
        zipcode: '123456',
        state: 'Kansas',
        city: 'Danville',
        mobile_number: '987654321'
    }

    const body = new URLSearchParams(userData).toString();

    cy.api({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/api/createAccount`,
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(userData).as('userCreated');
    });
});