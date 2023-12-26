/// <reference types="cypress"/>

describe("Login service", () => {
	it("Should be an user ", () => {
		cy.intercept("POST", "/auth/login", {
			statusCode: 201,
			body: {
				user: {
					userId: 1,
					role: ["user"],
				},
				accessToken: "2384756234592874tyoeuwfgsdfghsldfg",
			},
		});
		cy.visit("/");
		cy.get("#userIcon").click();
		cy.wait(1000)
		cy.get('[name="email"]').type("TestName@gmail.com");
		cy.get('[name="password"]').type("123123asd!");
		cy.get('button[type="submit"]').contains("Login").click();
		cy.wait(500);
		cy.contains('Login exitoso')
			.should("exist")
			// .should("have.text", "Login exitoso");
		// cy.get('form>button').should('not exist');


		// Espera a que el toast aparezca utilizando el atributo data-cy
		cy.get('[data-cy="toast"]', { timeout: 1000 }).should('exist');

		// Evalúa el contenido del toast utilizando el atributo data-cy
		cy.get('[data-cy=toast]').should('contain.text', 'Mensaje del Toast');
	});
});
