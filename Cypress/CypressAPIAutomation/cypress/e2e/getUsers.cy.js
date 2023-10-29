describe("API Automation using Cypress", () => {

    it("Get All Users", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            headers: {
                "Content-Type": "application/json"
            }            
        })
        .then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
        })
    })

    it("Get Single User", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
            expect(response.body.data.id).to.equal(2)
        })
    })

    it("Get User - Invalid Endpoint", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/user",
            headers: {
                "Content-Type": "application/json"
            },
            failOnStatusCode: false
        })
        .then((response) => {            
            expect(response.status).to.equal(404)            
        })
    })

    it("Get User - Invalid User", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/123",
            headers: {
                "Content-Type": "application/json"
            },
            failOnStatusCode: false
        })
        .then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
            expect(response.body.message).to.equal("Resource not found")
            expect(response.headers).to.have.property("content-type","application/json; charset=utf-8")
        })
    })























})