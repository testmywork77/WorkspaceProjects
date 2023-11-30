describe("API Automation using Cypress - DELETE calls", () => {
    
    // DELETE User -204
    it("DELETE User", () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            expect(response.status).to.equals(204)
        })

    })
})