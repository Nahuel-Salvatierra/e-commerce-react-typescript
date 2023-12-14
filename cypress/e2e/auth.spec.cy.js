describe("Register user", () => {
	it("passes", () => {
    cy.visit('/')

    cy.get('#userIcon').click()
    cy.get('#askRegister').click()
  });
});
