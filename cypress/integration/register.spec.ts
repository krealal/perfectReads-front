// type definitions for Cypress object "cy"
/// <reference types="cypress" />
const user = Cypress.env("USER");
const password = Cypress.env("PWD");
const fixtureFile = "test.png";
const email = Cypress.env("EMAIL");
const about = Cypress.env("ABOUT");

describe("Given a register page", function () {
  beforeEach(function () {
    cy.visit("/register");
    cy.viewport(390, 844);
  });
  describe("when the user don't type any field of register", () => {
    it("then the button should be disabled", () => {
      cy.get("button").should("be.disabled");
    });
  });

  describe("when the user only types the name", () => {
    it("then the button should be disabled", () => {
      cy.get("input").eq(0).type(user).should("have.value", user);
      cy.get("button").should("be.disabled");
    });
  });

  describe("when user upload test.png profile picture but anything else", () => {
    it("then the button should be disabled", () => {
      cy.fixture("test.png").then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: "test.png",
          mimeType: "image/png",
        });
        cy.get("button").should("be.disabled");
      });
    });
  });

  describe("when user types all inputs but mail is not allowed", () => {
    it("then the button should be disabled", () => {
      cy.get("input").eq(0).type(user).should("have.value", user);
      cy.get("input").eq(1).type(user).should("have.value", user);
      cy.get("input").eq(2).type(password).should("have.value", password);

      cy.get("textarea").first().type(about).should("have.value", about);

      cy.fixture(fixtureFile).then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: fixtureFile,
          mimeType: "image/png",
        });
      });
      cy.get("button").should("be.disabled");

      cy.get("input").eq(3).type("hola").should("have.value", "hola");
    });
  });

  describe("when user types all inputs correctly and uploads an allowed file", () => {
    it("then the button shouldnt be disabled and can click it", () => {
      cy.get("input").eq(0).type(user).should("have.value", user);
      cy.get("input").eq(1).type(user).should("have.value", user);
      cy.get("input").eq(2).type(password).should("have.value", password);
      cy.get("input").eq(3).type(email).should("have.value", email);
      cy.get("textarea").first().type(about).should("have.value", about);

      cy.fixture(fixtureFile).then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: fixtureFile,
          mimeType: "image/png",
        });
      });

      cy.get("button").should("not.be.disabled");
      cy.get("button").click();
    });
  });
});

export {};
