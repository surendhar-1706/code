/// <reference types="cypress" />

describe("acomplishment dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should show whether all informations are provided", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type(
      "learnt touch typing"
    );
    cy.get('[data-cy="accomplishment-input"]').type("zero to hero learning");
    cy.contains("Submit Accomplishment").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });
  it("should display validation component if all inputs are given", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type(
      "learnt touch typing"
    );
    cy.get('[data-cy="accomplishment-input"]').type("zero to hero learning");
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });
  it("should display empty input box when go back is clicked", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type(
      "learnt touch typing"
    );
    cy.get('[data-cy="accomplishment-input"]').type("zero to hero learning");
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("Go Back").click();
    cy.get('[data-cy="accomplishment-title-input"]').should("have.value", "");
    cy.get('[data-cy="accomplishment-input"]').should("have.value", "");
    cy.get('[data-cy="accomplishment-checkbox"]').should("not.be.checked");
  });
});
