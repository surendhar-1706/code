/// <reference types="cypress" />

describe("reward dashboard", () => {
  beforeEach(() => {
    cy.visit("/rewards");
  });
  it("display rewards using mock", () => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    });
  });
});
