/// <reference types="cypress"/>

describe("Auth services", () => {
	it("Should be register an user", () => {
		cy.intercept("POST", "/auth/register", {
			statusCode: 201,
		});
		cy.visit("/");
		cy.get("#userIcon").click();
		cy.get("#askRegister").click();
		cy.get('[name="name"]').type("TestName");
		cy.get('[name="lastName"]').type("TestLastname");
		cy.get('[name="email"]').type("testCypress@email.com");
		cy.get('[name="password"').type("asdf1234!!");
		cy.get('[name="confirmPassword"').type("asdf1234!!");
		cy.get("form>button").click();
		cy.get('#toast').should('exist').should('have.text', 'Registro exitoso');
		cy.get("#offCanvasLogin").should("not.exist");
		cy.get("form>button").should("not.exist");
	});

	it("Should be login an user", () => {
		cy.intercept("/auth/**");
		cy.intercept("POST", "/auth/*", {
			statusCode: 201,
		});
		cy.visit("/");
		cy.get("#userIcon").click();
		cy.get("#askRegister").click();
		cy.get('[name="name"]').type("Te");
		cy.get('[name="lastName"]').type("TestLastname");
		cy.get("form>button").click();
	});
});
