// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getAPI', (url, headers) => {
    cy.request({
        method: "GET",
        url: url,
        headers: headers
    })
})

Cypress.Commands.add('postAPI', (url, headers, payload) => {
    cy.request({
        method: "POST",
        url: url,
        headers: headers,
        body: payload
    })
})

Cypress.Commands.add('putAPI', (url, headers, payload) => {
    cy.request({
        method: "PUT",
        url: url,
        headers: headers,
        body: payload
    })
})

Cypress.Commands.add('deleteAPI', (url, headers) => {
    cy.request({
        method: "DELETE",
        url: url,
        headers: headers      
    })
})