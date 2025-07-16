/// <reference types="cypress" />

// Import the elements
import { ELEMENTS as element } from "../../components/elements";

// Steps for the Cypress Cucumber Preprocessor
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("o usuário preencher credenciais válidas", () => {
    cy.get('@userCreated').then((user) => {
        cy.getAndType(element.login.email, user.email);
        cy.getAndType(element.login.password, user.password);
    });
});

When("o usuário preencher credenciais inválidas", () => {
    cy.get('@data').then((data) => {
        cy.getAndType(element.login.email, data.users.invalid.email);
        cy.getAndType(element.login.password, data.users.invalid.password);
    });
})

Then("deve exibir uma mensagem de erro informando que as credenciais são inválidas", () => {
    cy.get(element.login.form).within(() => {
        cy.get('p')
            .should('have.text', 'Your email or password is incorrect!')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
    })
})

Then("o login deve ser realizado com sucesso", () => {
    cy.get('@userCreated').then((user) => {
        cy.get(element.navbar.userLogged)
            .parent().within((element) => {
                cy.get(element).should('contain.text', `Logged in as ${user.name}`);
            })
    });
})