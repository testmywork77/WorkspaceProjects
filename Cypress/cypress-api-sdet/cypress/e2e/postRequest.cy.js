/// <reference types="cypress"/>

// Approach 1 - Hard Coded JSON Object
describe("POST Requests", () => {

  // Approach 1 - Hard Coded JSON Object
  it("Approach 1 - Hard Coded JSON Object", () => {
    const requestBody = {
      tourist_name: "tourist_name_1",
      tourist_email: "tourist_email_1@gmail.com",
      tourist_location: "tourist_location_1",
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.tourist_name).to.eq("tourist_name_1");
      expect(response.body.tourist_email).to.equal("tourist_email_1@gmail.com");
      expect(response.body.tourist_location).to.equal("tourist_location_1");     
      expect(response.body.createdat).to.not.be.null;
      expect(response.body.id).to.not.be.null;
    });
  });

  // Approach 2 - Dynamically Generating JSON Object
  it("Approach 2 - Dynamically Generating JSON Object", () => {
    // A random whole number between 1 and 100
    const randomId = Math.floor(Math.random() * 100 + 1);

    const requestBody = {
      tourist_name: `tourist_name_${randomId}`,
      tourist_email: `tourist_email_${randomId}@gmail.com`,
      tourist_location: `tourist_location_${randomId}`,
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
      expect(response.body.tourist_email).to.equal(requestBody.tourist_email);
      expect(response.body.tourist_location).to.equal(
        requestBody.tourist_location
      );

      cy.log(`${requestBody.tourist_name} ---> ${response.body.tourist_name}`);
    });
  });

  // Approach 3 - Using Fixture
  it("Approach 3 - Using Fixture", () => {
    cy.fixture("tourist").then((data) => {
        const requestBody = data;        
        
        // A random whole number between 1 and 100
        const randomId = Math.floor(Math.random() * 100 + 1);
        requestBody.tourist_name = `tourist_name_${randomId}`
        requestBody.tourist_email = `tourist_email_${randomId}@gmail.com`
        requestBody.tourist_location = `tourist_location_${randomId}`
        
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody,
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(response.body.tourist_email).to.equal(requestBody.tourist_email);
            expect(response.body.tourist_location).to.equal(
            requestBody.tourist_location
            );
            // Validate property exists or not and validate property value
            expect(response.body).has.property('tourist_email', requestBody.tourist_email);
            expect(response.body).to.have.property('tourist_email', requestBody.tourist_email);

            cy.log(`${requestBody.tourist_name} ---> ${response.body.tourist_name}`);
            
        });
    });
  });
});
