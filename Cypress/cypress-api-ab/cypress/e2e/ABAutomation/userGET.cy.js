describe("API Automation using Cypress - GET calls", () => {
  
  // Get User - All Users
  it("GET User - All Users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.equal(200);
    });
  });

  // Get User: Single User -200
  it("GET User - Single User", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.equal(200);
      expect(response.body.data.id).to.equal(2);
    });
  });

  // Get User: Invalid Endpoint -404
  it("GET User - Invalid Endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/user",
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  // Get User: Invalid User -404
  it("GET User - resource not found ", () => {    
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/123",
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.equal(404);
      expect(response.body.message).to.equal("Resource not found");
      expect(response.headers).to.have.property(
        "content-type",
        "application/json; charset=utf-8"
      );
    });
  });
});
