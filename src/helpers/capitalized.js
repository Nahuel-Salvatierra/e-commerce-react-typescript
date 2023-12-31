export function initCap(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sendWhatsappMessage() {
	const messageName = `${cartItems
		.map(
			(product) =>
				` El producto ${product.title}, Cantidad: ${product.amount}`
		)
		.join("\n\n ")}`;
	const message = `Hola, quiero comprar ${messageName}`;
	const whatsappMessage = encodeURIComponent(message);
	const numberPhoneWhatsApp = import.meta.env.VITE_NUMBER_PHONE;
	const whatsappLink = `https://wa.me/${numberPhoneWhatsApp}?text=${whatsappMessage}`;
	return whatsappLink;
}
