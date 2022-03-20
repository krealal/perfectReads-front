// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("renders the app should find h2 with login", function () {
    cy.get("h2").should("contain", "Log in");
  });

  it("should find the 1st input and type kevin", function () {
    cy.get("input").first().type("kevin").should("have.value", "kevin");
  });

  it("should find the 2md input and type kevin", function () {
    cy.get("input").last().type("kevin").should("have.value", "kevin");
  });
});

export {};
