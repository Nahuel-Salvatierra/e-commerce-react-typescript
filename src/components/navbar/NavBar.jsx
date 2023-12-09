import React, { useState, useEffect } from "react";
// Imagenes
import Logo from "../../assets/logo/animarte-logo.png";
import OffCanvas from "./navComponent/OffCanvas";
import CartOffCanvas from "./navComponent/contentOffCanvas/CartOffCanvas";
import LayoutAsk from "./../../components/LayoutAsk";
// Iconos
import { IconCart, IconUser } from "../IconHero";
// Fetch Category
import { getCategoryName } from "../../api/category.api";
import { Link } from "react-router-dom";

const NavBar = () => {
    // Renderizar Offcanvas
    const [cartOffcanvasShow, setCartOffcanvasShow] = useState(false);
    const [userOffcanvasShow, setUserOffcanvasShow] = useState(false);
    //Alternar nombre de titulo OffCanvas
    const [checkRegister, setCheckRegister] = useState("Register");

    const handleCart = () => {
        setCartOffcanvasShow(true);
    };
    const handleUser = () => {
        setUserOffcanvasShow(true);
    };
    const closeCart = () => {
        setCartOffcanvasShow(false);
        setUserOffcanvasShow(false);
    };

    useEffect(() => {
        setCheckRegister((prevTitle) =>
            prevTitle === "Register" ? "Register" : "Login"
        );
    }, []);

    // useEffect(() => {
    //     const fetchCategory = async () => {
    //         await getCategoryName();
    //     }
    //     fetchCategory();
    // },[]);

    return (
        <div className="navbar bg-neutral">
            <div className="flex-1 justify-between">
                <Link to="/" className="ps-5 text-xl ">
                    <img
                        src={Logo}
                        alt="logo animarte"
                        className="nav-logo w-[60px] bg-white rounded-[50%] hidden sm:block"
                    />
                </Link>

                <div className="flex gap-3">
                    <div className="flex items-center justify-end gap-3 pr-5">
                        <Link className="text-white font-semibold" to="/">
                            Inicio
                        </Link>
                        <details className="dropdown dropdown-center">
                            <summary className=" text-white font-semibold">Productos</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                {/* {renderCategory.map((category, index) => (
                            <li key={index}>{category.category}</li>
                        ))} */}
                            </ul>
                        </details>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={handleCart}>
                            {<IconCart />}
                            {cartOffcanvasShow && (
                                <OffCanvas
                                    offcanvasTitle={"Carrito de Compras"}
                                    offcanvasContent={<CartOffCanvas />}
                                    onClose={closeCart}
                                    showButton={true}
                                />
                            )}
                        </button>
                        <button onClick={handleUser}>
                            {<IconUser />}

                            {userOffcanvasShow && (
                                <OffCanvas
                                    offcanvasTitle={checkRegister}
                                    offcanvasContent={
                                        <LayoutAsk onClose={closeCart} />
                                    }
                                    onClose={closeCart}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="flex-none">
                <div className="dropdown dropdown-end flex gap-3">
                    <button onClick={handleCart}>
                        {<IconCart />}
                        {cartOffcanvasShow && (
                            <OffCanvas
                                offcanvasTitle={"Carrito de Compras"}
                                offcanvasContent={<CartOffCanvas />}
                                onClose={closeCart}
                                showButton={true}
                            />
                        )}
                    </button>
                    <button onClick={handleUser}>
                        {<IconUser />}

                        {userOffcanvasShow && (
                            <OffCanvas
                                offcanvasTitle={checkRegister}
                                offcanvasContent={
                                    <LayoutAsk onClose={closeCart} />
                                }
                                onClose={closeCart}
                            />
                        )}
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default NavBar;
