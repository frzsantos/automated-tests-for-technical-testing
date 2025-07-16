/// <reference types="cypress" />

// Import the elements
import { ELEMENTS as element } from "../../components/elements";

// Steps for the Cypress Cucumber Preprocessor
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("o usuário selecionar um produto aleatório", () => {
    cy.get(element.products.baseProduct).then((products) => {
        const allProducts = products.length;
        const randomIndex = Cypress._.random(0, allProducts - 1);

        cy.get(element.products.baseProduct).eq(randomIndex).within((product) => {
            let productPrice, productName;

            // Save the product price
            cy.get(product)
                .find(element.products.baseProductPrice)
                .invoke('text')
                .then((price) => {
                    productPrice = price;
                })

            // Save the product name
            cy.get(product)
                .find(element.products.baseProductName)
                .invoke('text')
                .then((name) => {
                    productName = name;
                })


            // Save the product details for later use
            cy.then(() => {
                cy.wrap({
                    quantity: 1,
                    price: productPrice,
                    name: productName
                }).as('productSelectedDetails');
            })

            // Add the product to the cart
            cy.clickFirstButton(element.products.btnAddToCard)
        });
    });
})

When("o usuário preencher os dados de pagamento", () => {
    cy.getAndType(element.payment.cardName, 'Test User');
    cy.getAndType(element.payment.cardNumber, '4111111111111111');
    cy.getAndType(element.payment.cardMonthExpiry, '12');
    cy.getAndType(element.payment.cardYearExpiry, '2025');
    cy.getAndType(element.payment.cardSecurityCode, '123');
})

Then("o usuário deve ver o produto no carrinho", () => {
    cy.get('@productSelectedDetails').then((productSelected) => {
        cy.checkProductSelected(productSelected)
    })
})

Then("deve ver o resumo do pedido", () => {
    cy.get('@userCreated').then((user) => {
        // Check the delivery and billing address
        cy.checkUserAddress(element.checkout.baseDeliveryAddress, 'Your delivery address', user);
        cy.checkUserAddress(element.checkout.baseBillingAddress, 'Your billing address', user);
    })

    // Check the product details
    cy.get('@productSelectedDetails').then((productSelected) => {
        cy.checkProductSelected(productSelected)
    })
})

Then("o pedido deve ser realizado com sucesso", () => {
    // Check the order summary messages
    cy.get(element.resumeOrder.baseOrderStatus)
        .should('be.visible')
        .and('have.text', 'Order Placed!')

    cy.contains('Congratulations! Your order has been confirmed!')
        .should('be.visible')

    // Download the invoince
    cy.clickButton(element.resumeOrder.btnDownloadInvoice)

    // Check the invoice.txt
    cy.get('@userCreated').then((user) => {
        cy.get('@productSelectedDetails').then((productSelected) => {
            const expectedText = `Hi ${user.firstname} ${user.lastname}, Your total purchase amount is ${productSelected.price.match(/\d+/g).join('')}. Thank you`;

            cy.readFile('cypress/downloads/invoice.txt', { timeout: 450000 })
                .should('include', expectedText);
        });
    })
})