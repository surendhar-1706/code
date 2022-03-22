/// <reference types="cypress" />

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should display add button when modal is clicked", () => {
    cy.contains("button", "Add").click();
    cy.contains("Add a new habit").should("be.visible");
  });

  it("should display habit when new habit is added", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("first task");
    cy.contains("button", "Save Changes").click();
    cy.contains("first task")
      .should("be.visible")
      .should("have.class", "HabitCard__habit-container");
  });
  it("should toggle when habit is clicked", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("first task");
    cy.contains("button", "Save Changes").click();
    cy.contains("first task");
    cy.get('[src="/static/media/close.fa7e5ead.svg"]').should("be.visible");
    cy.contains("first task").click();
    cy.get('[src="/static/media/check.9e8832df.svg"]').should("be.visible");
  });
});
