/// <reference types="cypress"/>

describe('suite name', () => {
    it('verify title - positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')        
        cy.title().should('equal', 'OrangeHRM')
    })    

    it('verify title - negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')        
        cy.title().should('equal', 'OrangeHRM123')
    })

})