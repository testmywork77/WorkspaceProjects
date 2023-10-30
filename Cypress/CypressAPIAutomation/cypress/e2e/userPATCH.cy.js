import patchRequestPayload from "../config/userPATCH.json"

describe("API Automation using Cypress - PUT calls", () => {
    it("PUT User - Import JSON", () => {
        cy.request({
            method: "PATCH",
            url: "https://reqres.in/api/users/2",
            headers: {
                "Content-Type": "application/json"
            },
            body: patchRequestPayload
        })
        .then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.body.name).to.equals("steven")
            expect(response.body).has.property("job", "consultant")
        })
    })
})
