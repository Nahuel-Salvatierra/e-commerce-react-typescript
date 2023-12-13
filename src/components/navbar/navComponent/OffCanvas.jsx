import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useCart from "./../../../hook/useCart";
import { useProducts } from "../../../hook/useProducts";

const OffCanvas = ({
  onClose,
  offcanvasTitle,
  offcanvasContent,
  showButton,
}) => {
  const [open, setOpen] = useState(true);
  const { cartItems } = useCart();

  // Cerrar OffCanvas
  const handleOnClose = () => {
    setOpen(false);
    onClose();
  };

  // Validar Boton
  const onClickValidation = cartItems.find(object => object.id)

  // Boton Comprar
  const handleBuy = () => {
    const messageName = `${cartItems.map((product) => ` El producto ${product.title}, Cantidad: ${product.amount}`).join('\n\n ')}`;
    const message = `Hola, quiero comprar ${messageName}`
    const whatsappMessage = encodeURIComponent(message)
    const numberPhoneWhatsApp = import.meta.env.VITE_NUMBER_PHONE
    const whatsappLink = `https://wa.me/${numberPhoneWhatsApp}?text=${whatsappMessage}`
    window.open(whatsappLink, '_blank')
  }



  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleOnClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div
                      className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"
                      onClick={handleOnClose}
                    >
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    {/* Titulo */}
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        {offcanvasTitle}
                      </Dialog.Title>
                    </div>
                    {/* Contenido */}
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {offcanvasContent}
                    </div>
                    {showButton && (
                      <div className="flex justify-center">
                        <button className={`btn btn-neutral w-96`} disabled={onClickValidation ? false : true} onClick={onClickValidation ? handleBuy : undefined} >
                          {onClickValidation
                            ? "Comprar"
                            : "Carrito de compra vació"}
                        </button>
                      </div>  
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OffCanvas;
