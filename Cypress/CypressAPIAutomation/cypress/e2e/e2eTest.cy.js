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

  let url = "https://reqres.in/api/users/";  
  let pathParamId = 2;
  
  it("Using Custom Commands", () => {
    cy.log("URL:" + url)
    // GET All
    cy.getAPI(url, headers).then((response) => {
      expect(response.status).to.equal(200);
    });

    // GET by Id
    cy.getAPI(url+pathParamId, headers).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.id).to.equal(2);
    });

    // POST
    cy.postAPI(url, headers, payload).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "morpheus");
      expect(response.body.id).to.not.be.null;
    });

    // PUT
    cy.putAPI(url+pathParamId, headers, payload).then((response) => {
        expect(response.status).to.equal(200);        
        expect(response.body.name).to.equals("morpheus")
        expect(response.body).has.property("job", "leader")
        expect(response.body.id).to.not.be.null;
      });

    // DELETE
    cy.deleteAPI(url+pathParamId, headers).then((response) => {
        expect(response.status).to.equals(204)
    });

  });
});
