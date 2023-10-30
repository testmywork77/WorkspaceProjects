import putRequestPayload from "../config/userPUT.json"

describe("API Automation using Cypress - PUT calls", () => {
    it("PUT User - Import JSON", () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            headers: {
                "Content-Type": "application/json"
            },
            body: putRequestPayload
        })
        .then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.body.name).to.equals("ram")
            expect(response.body).has.property("job", "architect")
        })
    })
})
