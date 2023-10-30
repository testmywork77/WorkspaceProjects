/*
    Code reusability using Custom commands
*/
describe("API Automation - GET/POST/PUT/DELETE", () => {
  let payload = {
    name: "morpheus",
    job: "leader",
  };

  let headers = {
    "Content-Type": "application/json",
  };

  let url1 = "https://reqres.in/api/users";
  let url2 = "https://reqres.in/api/users/2";

  it("Using Custom Commands", () => {
    // GET All
    cy.getAPI(url1, headers).then((response) => {
      expect(response.status).to.equal(200);
    });

    // GET by Id
    cy.getAPI(url2, headers).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.id).to.equal(2);
    });

    // POST
    cy.postAPI(url1, headers, payload).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "morpheus");
      expect(response.body.id).to.not.be.null;
    });

    // PUT
    cy.putAPI(url2, headers, payload).then((response) => {
        expect(response.status).to.equal(200);        
        expect(response.body.name).to.equals("morpheus")
        expect(response.body).has.property("job", "leader")
        expect(response.body.id).to.not.be.null;
      });

    // DELETE
    cy.deleteAPI(url2, headers)
    .then((response) => {
        expect(response.status).to.equals(204)
    });

  });
});
