/// <reference types="cypress"/>

// Bearer Token API E2E
describe("Bearer Token API E2E", () => {
  let authToken, randomName, orderId;

  // Before - Generate Bearer Token  
  before("Generate Bearer Token", () => {
    randomName = "cName" + Math.floor(Math.random() * 1000);
    const requestBody = {
      clientName: randomName,
      clientEmail: randomName + "@gmail.com",
    } 
    cy.log(`Random Name: ${randomName}`);
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/api-clients/",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.accessToken).to.not.be.null;
      authToken = response.body.accessToken;
      cy.log(authToken);
    });
  });  

  // it - Submit Order
  it("Submit Order", () => {
    // create requestBody
    const requestBody = {
      bookId: 1,
      customerName: "customerName" + Math.floor(Math.random() * 1000),
    }
    cy.log(`bookId: ${requestBody.bookId}`)
    cy.log(`customerName: ${requestBody.customerName}`)

    // create Headers
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken,    
    }    

    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/orders/",
      headers: headers,
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.created).to.not.be.null;
      expect(response.body.orderId).to.not.be.null;
      orderId = response.body.orderId;
      cy.log(orderId);
    });
  });

  // it - Fetching the orders    
  it("Fetching the orders", () => {
    // create Headers
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken,    
    }  

    // create Cookie
    const cookies = {
      cookieName: 'myCookie'
    }

    cy.request({
      method: 'GET',
      url: 'https://simple-books-api.glitch.me/orders/',
      headers:headers,
      cookies: cookies,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).has.length(1);
    });
  });

});
