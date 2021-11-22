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

describe("Analyse page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/analyzer");
  });

  it("check elements on analyse page", () => {
    cy.get(".section-title").should("be.visible");
    cy.get(".services-container").should("be.visible");
    cy.get(".btn > h1").should("have.text", "Start");
  });
});
