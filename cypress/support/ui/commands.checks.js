/// <reference types="cypress" />

// Import the elements
import { ELEMENTS as element } from "../../components/elements";

Cypress.Commands.add('checkPathname', (pathname) => {
    cy.location('pathname').should('eq', pathname)
})

Cypress.Commands.add('checkUserAddress', (addressContent, addressTile, addressUserData) => {
    cy.get(addressContent)
        .should('be.visible')
        .within(() => {
            cy.get(element.checkout.baseAddressTitle)
                .should('have.text', addressTile);

            cy.get(element.checkout.baseAddressName)
                .should('have.text', `. ${addressUserData.firstname} ${addressUserData.lastname}`);

            cy.get(element.checkout.baseAddressStreet)
                .should('contain.text', addressUserData.address1);

            cy.get(element.checkout.baseAddressCityStateCode)
                .invoke('text')
                .should('include', `${addressUserData.city} ${addressUserData.state}`)
                .and('include', addressUserData.zipcode);

            cy.get(element.checkout.baseAddressCountry)
                .should('have.text', addressUserData.country);

            cy.get(element.checkout.baseAddressPhone)
                .should('have.text', addressUserData.mobile_number);
        });
})

Cypress.Commands.add('checkProductSelected', (product) => {
    cy.get(element.cart.baseCart)
        .should('be.visible')
        .within(() => {
            cy.get(element.cart.baseProductName)
                .should('have.text', product.name)

            cy.get(element.cart.baseProductPrice)
                .should('have.text', product.price)

            cy.get(element.cart.baseProductQuantity)
                .should('have.text', product.quantity)

            cy.get(element.cart.baseCartValue)
                .should('have.text', product.price)
        })
})