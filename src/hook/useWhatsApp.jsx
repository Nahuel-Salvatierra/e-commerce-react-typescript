import { useState } from "react";

export function useWhatsApp(cartItems) {
	const [link, setLink] = useState('');
	const messageText = `${cartItems
		.map(
			(product) =>
				` El producto ${product.title}, Cantidad: ${product.amount}`
		)
		.join("\n\n ")}`;

	const message = `Hola, quiero comprar ${messageText}`;
	const whatsappMessage = encodeURIComponent(message);
	const numberPhoneWhatsApp = import.meta.env.VITE_NUMBER_PHONE;
	const whatsappLink = `https://wa.me/${numberPhoneWhatsApp}?text=${whatsappMessage}`;
	setLink(whatsappLink)
	return [link, setLink]
}
