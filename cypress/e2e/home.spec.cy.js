/// <reference types="cypress"/>
import * as productApi from "../../src/api/product.api";

describe("template spec", () => {
	it("Should can buy products", () => {
		const imageUrl =
			"https://img.freepik.com/foto-gratis/vista-superior-cuadernos-mesa_23-2148816279.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1704240000&semt=ais";
		cy.intercept("/product", [
			{
				id: 1,
				title: "Title1",
				category: {
					name: "Cuaderno A5",
					price: 3000,
				},
				description: "Some description",
				images: imageUrl,
			},
			{
				id: 2,
				title: "Title2",
				category: {
					name: "Cuaderno A5",
					price: 3000,
				},
				description: "Some description",
				images: "",
			},
		]);

		cy.intercept("/category", [
			{
				id: 1,
				name: "Cuaderno A5",
				price: 3000,
			},
		]);

		const newPromise = Promise.resolve(imageUrl);
		// const newPromise = new Promise((resolve, reject) => {
		// 	const success = true;  
		// 	if (success) {
		// 		resolve(imageUrl);
		// 	} else {
		// 		reject('');
		// 	}
		// });
		cy.stub(productApi, 'getImage').resolves(newPromise)

		cy.visit("/");
		cy.wait(1000);

		cy.get(".card").should("have.length", 2);
		cy.get('.card:has(.btn:contains("Comprar"))').as("cardBuy");
		cy.get("@cardBuy").each(($tarjeta) => {
			cy.wrap($tarjeta).find('.btn:contains("Comprar")').click();
		});
		cy.get("#buyIcon").click();
		cy.get("#finishBuy").click();
	});
});
