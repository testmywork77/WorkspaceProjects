const screen = ['iphone-8', 'ipad-2', [1024, 768], 'macbook-13', 'samsung-s10']
const orienatations = ['landscape', 'portrait']

describe('Testing different screen size and orienatation', () => {
    screen.forEach((screenView) => {
        it(`Should display viewport for the screen => ${screenView}`, () => {
            if(Cypress._.isArray(screenView)){
                cy.viewport(screenView[0], screenView[1])
                cy.log("printing viewports - ", screenView[0], screenView[1])
            }
            else {
                cy.viewport(screenView)
                cy.log("viewport: " + screenView)
            }
            cy.visit("https://www.amazon.com")
        })        
    });

    // Open website in 'macbook-16' with different orienatations i.e. orienatations = ['landscape', 'portrait'] 
    Cypress._.each(orienatations, orienatation => {    
        it(`Testing different orientations with ${orienatation}`, () => {
            cy.viewport("macbook-16", orienatation)
            cy.visit("https://www.dropbox.com/")
        })
    } )


})