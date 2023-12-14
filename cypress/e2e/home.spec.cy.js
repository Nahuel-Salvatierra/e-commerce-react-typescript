describe("template spec", () => {
	it("passes", () => {
		cy.visit("/");
		cy.wait(1000);
		cy.get(".card").should("have.length", 4);
		cy.get('.card:has(.btn:contains("Comprar"))').as("cardBuy");
		cy.get("@cardBuy").each(($tarjeta) => {
			cy.wrap($tarjeta).find('.btn:contains("Comprar")').click();
		});

    cy.get('#buyIcon').click()
    cy.get('#finishBuy').click()
	});
});
