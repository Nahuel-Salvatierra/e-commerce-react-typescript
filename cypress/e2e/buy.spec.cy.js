/// <reference types="cypress"/>

describe("template spec", () => {
	it("Should can buy products", () => {
		cy.intercept("/product", {
			fixture: "products",
		});

		cy.intercept("/category", {
			fixture: "category",
		});

		cy.visit("/");
		cy.get(".card").should("have.length", 2);
		cy.get('.card:has(.btn:contains("Comprar"))').as("cardBuy");
		cy.get("@cardBuy").each(($tarjeta) => {
			cy.wrap($tarjeta).find('.btn:contains("Comprar")').click();
		});
		cy.get("[data-cy='buy-icon']").click();
		cy.get("[data-cy='cart']>[data-cy='card-product']").should(
			"have.length",
			2
		);
		cy.get("[data-cy='add-amount-item']").first().click()
		cy.get("[data-cy='cart-subtotal']").first().invoke('text').should('include', '$6000')
		cy.get("[data-cy='buy-button'").click();
		cy.get("[data-cy='finish-buy-modal']").should('be.visible')
	});
});
