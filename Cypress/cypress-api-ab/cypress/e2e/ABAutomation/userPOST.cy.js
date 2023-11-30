import userPayload from "../../config/userPOST.json";

describe("API Automation using Cypress - POST calls", () => {
  
  // POST User: JSON payload inside cy.request -201
  it("POST User - JSON", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "morpheus");
      expect(response.body.id).to.not.be.null;
    });
  });

  // POST User: JSON payload in it block -201
  it("POST User - JSON payload", () => {
    let payload = {
      name: "morpheus",
      job: "leader",
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "morpheus");
      expect(response.body.id).to.not.be.null;
    });
  });

  // POST User: JSON payload using Fixtures -201
  it("POST User - Fixtures", () => {
    cy.fixture("userPOST").then((responseObject) => {
      // Change requestPayload attribute values
      responseObject.name = "ram";
      responseObject.job = "team leader";
      cy.log(responseObject);

      cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        headers: {
          "Content-Type": "application/json",
        },
        body: responseObject,
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body).has.property("name", "ram");
        expect(response.body.id).to.not.be.null;
      });
    });
  });

  // POST User: Import JSON from Config package -201
  it("POST User - Import JSON", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: userPayload,
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "morpheus");
      expect(response.body.id).to.not.be.null;

      // validate newly created resouce using get by id request
      let id = response.body.id;
      cy.log("id: " + id);
      /*
            cy.request({
                method: "GET",
                url: "https://reqres.in/api/users/" + id,
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name","morpheus")
                expect(response.body.id).to.not.be.null
              });
            */
    });
  });
});
