// type definitions for Cypress object "cy"
/// <reference types="cypress" />

const user = Cypress.env("USER");
const password = Cypress.env("PWD");

describe("Given a login page", function () {
  beforeEach(function () {
    cy.visit("/login");
    cy.viewport(1385, 875);
  });
  describe("when the user don't type username or password", () => {
    it("then the button should be disabled", () => {
      cy.get("button").should("be.disabled");
    });
  });

  describe("when the user types username but not password", () => {
    it("then the button should be disabled", () => {
      cy.get("button").should("be.disabled");
      cy.get("input").eq(0).type(user).should("have.value", user);
    });
  });

  describe("when the user types password but not username", () => {
    it("then the button should be disabled", () => {
      cy.get("input").eq(1).type(password).should("have.value", password);
      cy.get("button").should("be.disabled");
    });
  });

  describe("when finds 1st and 2nd input", () => {
    it("Then should write username and password an click on login button", function () {
      cy.get("input").eq(0).type(user).should("have.value", user);
      cy.get("input").eq(1).type(password).should("have.value", password);
      cy.get("button").should("not.be.disabled");
      cy.get("button").click();
    });
  });
});

export {};
