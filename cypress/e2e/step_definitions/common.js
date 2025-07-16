/// <reference types="cypress" />

// Import the elements
import { ELEMENTS as element } from "../../components/elements";

// Steps for the Cypress Cucumber Preprocessor
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa a página inicial", () => {
    cy.visit(Cypress.env('baseUrl'));
});

Given("que o usuário acessa a página de login", () => {
    cy.get('@data').then((data) => {
        cy.visit(Cypress.env('baseUrl'));
        cy.clickButton(element.navbar.login);
        cy.checkPathname(data.pathnames.login);

        cy.get(element.login.title)
            .should('be.visible')
            .and('have.text', 'Login to your account');
    })
});

Given("que o usuário acessa a página de produtos", () => {
    cy.get('@data').then((data) => {
        cy.visit(Cypress.env('baseUrl'));
        cy.clickButton(element.navbar.products);
        cy.checkPathname(data.pathnames.products);
    })
});

Given("que o usuário se autentique com sucesso", () => {
    cy.get('@data').then((data) => {
        cy.visit(Cypress.env('baseUrl'));
        cy.clickButton(element.navbar.login);
        cy.checkPathname(data.pathnames.login);

        cy.get(element.login.title)
            .should('be.visible')
            .and('have.text', 'Login to your account');

        cy.get('@userCreated').then((user) => {
            cy.getAndType(element.login.email, user.email);
            cy.getAndType(element.login.password, user.password);
            cy.clickButton(element.login.btnLogin);

            cy.get(element.navbar.userLogged)
                .parent().within((element) => {
                    cy.get(element).should('contain.text', `Logged in as ${user.name}`);
                })
        });
    })
})

Given("que existe um usuário cadastrado", () => {
    cy.createUser()
});

When("clicar no botão {string}", (buttonForClick) => {
    // Define the element button
    const buttons = {
        "Fazer pedido": element.checkout.btnProceedToPayment,
        "Login": element.login.btnLogin,
        "Ver carrinho": element.products.btnViewCart,
        "Pagar e confirmar pedido": element.payment.btnConfirmOrder,
        "Prosseguir para o checkout": element.cart.btnProceedToCheckout
    };

    // Check if the button exists in the object
    if (!buttons[buttonForClick]) {
        throw new Error(`O botão "${buttonForClick}" não foi encontrado nos elementos. Verificar arquivo e2e/step_definitions/common.js.`);
    }

    // Click in the button
    cy.clickButton(buttons[buttonForClick])
});

Then("o usuário deve ser redirecionado para a página {string}", (page) => {
    cy.get('@data').then((data) => {
        // Define the pathnames
        const pathnames = {
            "Checkout": data.pathnames.checkout,
            "Meu carrinho": data.pathnames.cart
        };

        // Check if the pathname exists in the object
        if (!pathnames[page]) {
            throw new Error(`A página "${page}" não foi encontrado no mapeamento de dados. Verificar arquivo e2e/step_definitions/common.js.`);
        }

        // Check the pathname
        cy.checkPathname(pathnames[page]);
    });

})