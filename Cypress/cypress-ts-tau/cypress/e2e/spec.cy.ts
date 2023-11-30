import * as lists from '../fixtures/lists.json'

describe('Automation Scripts', () => {
    // it('first test', () => {
    //     cy.visit('https://docs.cypress.io/guides/overview/why-cypress')        
    // })

    it('Read Lists JSON', () => {
        lists.forEach(list => {
            cy.log(`Name: ${list.name}, Order: ${list.order}` )           
        });

    })

})