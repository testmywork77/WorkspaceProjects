before(function () {
  cy.log("-- Before first test case --");
});

after(function () {
  cy.log("-- After last test case --");
});

// Sequence -> 1st outside describe then inside describe
beforeEach(function () {
  cy.log("-- Before Each for Both Test Suites --");
});

// Sequence -> 1st inside describe then outside describe
afterEach(function () {
  cy.log("-- After Each - Both test suites --");
});

describe("Test Suite1", () => {
  beforeEach(function () {
    cy.log("-- Before Each - Test Suite1 --");
  });

  afterEach(function () {
    cy.log("-- After Each - Test Suite1 --");
  });

  it("Test Suite1 - TC1", () => {
    cy.log("Test Suite1 - TC1");
  });

  it("Test Suite1 - TC2", () => {
    cy.log("Test Suite1 - TC2");
  });  
});

describe("Test Suite2", () => {
  beforeEach(function () {
    cy.log("-- Before Each -Test Suite2 --");
  });

  afterEach(function () {
    cy.log("-- After Each - Test Suite2 --");
  });

  it("Test Suite2 - TC1", () => {
    cy.log("Test Suite2 - TC1");
  });
  
  it("Test Suite2 - TC2", () => {
    cy.log("Test Suite2 - TC2");
  });
});