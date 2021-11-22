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

describe("EasEl", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/");
  });

  it("check elements on landing page", () => {
    cy.get("nav").should("be.visible");

    const navbartexts = ["Home", "About", "Features"];

    cy.get(`nav > ul >`).each((ele, i) => {
      cy.get(ele).should("have.text", navbartexts[i]);
    });

    const aboutEasEl =
      "With the pursuit of quality education at the very core of our values, EasEL is a platform built for both- the students and the teachers. EasEL is an entire learning experience where students and teachers can interact and grow together.With tools like attentiveness trackers and closed captions for lessons, EasEL provides a solution which is easy, smart and interactive, promoting comprehensive e-learning for all.";

    cy.get(".container > p").should("have.text", aboutEasEl);

    cy.get(":nth-child(1) > .feature_box");
    cy.get(":nth-child(2) > .feature_box");
    cy.get(":nth-child(3) > .feature_box");

    cy.get("footer").should("be.visible");
  });
});
