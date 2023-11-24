import React, { useState } from "react";
// Imagenes
import Logo from "../../assets/logo/animarte-logo.png";
import OffCanvas from "./navComponent/OffCanvas";

const NavBar = () => {
	const [cartShow, setCartShow] = useState(false);

	const handleCart = () => {
		setCartShow(true);
	}
	const closeCart = () => {
		setCartShow(false);
	}


  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a className="ps-5 text-xl">
          <img src={Logo} alt="" className="nav-logo w-[60px]" />
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <button onClick={handleCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
			{cartShow && (<OffCanvas onClose={closeCart} />)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
