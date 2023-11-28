/// <reference types="cypress"/>

describe("Bearer Token API E2E", () => {
    let token, randomName, orderId;

  // Create bearer token 
    before("Generate Bearer Token", () => {

        randomName = "cName" + Math.floor(Math.random() * 100);
        cy.log(`Random Name: ${randomName}`);
        cy.request({
            method: "POST",
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "clientName": randomName,
                "clientEmail": randomName + "@gmail.com",
            },
            failOnStatusCode: false,
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.accessToken).to.not.be.null
            token = response.body.accessToken
            cy.log(token)
        })
    })

  // Submit Order
  it("Submit Order", () => {
    const randomId = Math.floor(Math.random() * 100);
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/orders/",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: {
        "bookId": randomId,
        "customerName": "customerName" + randomId,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.created).to.not.be.null;
      expect(response.body.orderId).to.not.be.null;
      orderId = response.body.orderId;
      cy.log(orderId);
    });
  });
});
