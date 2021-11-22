/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Notes page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/notes");
  });

  it("check elements on notes", () => {
    cy.get("#note-textarea").should("be.visible");
    cy.get(".app > h3").should("have.text", "Make New Note ");
    cy.get(".page-description").should(
      "have.text",
      "Easy Learn Note Taker helps you to record your notes and save them in a text format to make learning experience better."
    );
    cy.get("#recording-instructions").should("be.visible");
  });
});
