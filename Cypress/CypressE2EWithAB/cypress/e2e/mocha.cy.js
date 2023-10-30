before(function () {
  cy.log("--Before first test case--");
});

after(function () {
  cy.log("--After last test case--");
});

// Sequence -> 1st Outside describe then inside describe
beforeEach(function () {
  cy.log("--Before Each - Both Test Suites--");
});

// Sequence -> 1st inside describe then outside describe
afterEach(function () {
  cy.log("--After Each - Both Test Suites--");
});

describe("Test Suite1", () => {
  beforeEach(function () {
    cy.log("--Before Each --");
  });

  afterEach(function () {
    cy.log("--After Each--");
  });

  it("Test Suite1 - TC1", () => {
    cy.log("Test Suite1 - TC1");
  });

  it("Test Suite1 - TC2", () => {
    cy.log("Test Suite1 - TC2");
  });
});

describe("Test Suite2", () => {
  it("Test Suite2 - TC1", () => {
    cy.log("Test Suite2 - TC1");
  });

  it("Test Suite2 - TC2", () => {
    cy.log("Test Suite2 - TC2");
  });
});
