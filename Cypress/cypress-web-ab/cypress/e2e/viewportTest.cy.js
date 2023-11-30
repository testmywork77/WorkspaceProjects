describe("Test Automation Cypress - viewport", 
// {
//     viewportWidth:890,
//     viewportHeight: 760
// },
() => {

    it("viewport test - width,height(990,760)", () => {
        cy.viewport(990, 760)
        cy.visit("https://www.amazon.com")
    })

    it("viewport test - width,height from cypress.config file(535, 760)", () => {        
        cy.visit("https://www.amazon.com")
    })

    it("viewport test - Preset(320,480)", () => {
        //cy.viewport("iphone-3")
        cy.visit("https://www.amazon.com")
    })

    // const orienatation = ['landscape', 'portrait']
    it("viewport test - orienatation('landscape'/'portrait')", () => {
        //cy.viewport("iphone-3", "landscape")
        cy.visit("https://www.amazon.com")
    })

})