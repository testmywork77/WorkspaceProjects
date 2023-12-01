/// <reference types="cypress" />

describe('HTTP Requests', () => {

    // GET Requests
    it('GET Requests', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    })

    // POST Request
    it('POST Request', () => {
        cy.request({
            method: 'POST', 
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                "title": "foo",
                "body": "bar",
                "userId": 11
              }
        })
        .its('status')
        .should('equal', 201)
    })

    // PUT Request
    it('PUT Request', () => {
        cy.request({
            method: 'PUT', 
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                "title": "foo",
                "body": "bar",
                "userId": 1
              }
        })
        .its('status')
        .should('equal', 200)
    })

    // PATCH Request
    it('PATCH Request', () => {
        cy.request({
            method: 'PATCH', 
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                "title": "foo",
                "body": "bar",
                "userId": 1
              }
        })
        .its('status')
        .should('equal', 200)
    })

    // Delete Request
    it('Delete Request', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal', 200)
    })

})