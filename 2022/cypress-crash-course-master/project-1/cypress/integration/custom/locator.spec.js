/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locate elements with get", () => {
    cy.get("button");
    cy.get(".btn-with-class");
    cy.getByTestId("btn-id-1");
  });
});
