import Button from "./Button";
import { useCart } from "../../hook/useCart";

export default function Modal() {
    const { cartItems } = useCart();

    const handleBuy = () => {
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
        window.open(whatsappLink, "_blank");
        document.getElementById("my_modal_2").close();
    };

    const handleCancelNote = () => {
        document.getElementById("my_modal_2").close();
    };

    return (
        <dialog id="my_modal_2" className="modal" data-cy='finish-buy-modal'>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Estas por comprar:</h3>
                {cartItems.map(
                    (product, index) => (
                        <li key={index}>
                            {product.amount}
                            {"u. "}
                            {product.title}
                        </li>
                    ),
                )}

                <div className="flex gap-3 justify-end">
                    <Button
                        text="Cancelar compra"
                        type={"submit"}
                        style={"text-white"}
                        onClick={handleCancelNote}
                    />
                    <Button
                        onClick={handleBuy}
                        type={"button"}
                        text={"Finalizar Compra"}
                        style="text-white border none hover:bg-neutral"
                    />
                </div>
            </div>
        </dialog>
    );
}
