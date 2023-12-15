import React, { useState, useEffect } from "react";
// css
import "../../App.css"
// Imagenes
import Logo from "../../assets/logo/animarte-logo.png";
import OffCanvas from "./navComponent/OffCanvas";
import CartOffCanvas from "./navComponent/contentOffCanvas/CartOffCanvas";
import LayoutAsk from "./../../components/LayoutAsk";
// Iconos
import { IconCart, IconSun, IconUser, IconMoon } from "../IconHero";
// Fetch Category
import { useCategory } from "../../hook/useCategory";
import { Link } from "react-router-dom";
import { getProductsFiltered } from "../../api/product.api";
import { useProducts } from "../../hook/useProducts";

const NavBar = () => {
    // Renderizar Offcanvas
    const [cartOffcanvasShow, setCartOffcanvasShow] = useState(false);
    const [userOffcanvasShow, setUserOffcanvasShow] = useState(false);
    //Alternar nombre de titulo OffCanvas
    const [checkRegister, setCheckRegister] = useState("Register");
    // Category
    const [categoryName] = useCategory();
    //renderCategory
    const [products, setProducts, filterProducts] = useProducts();
    //ThemeDark
    const [bodyStyle, setBodyStyle] = useState(true);

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

    const handleCategoryNav = async (e) => {
        const category = e.target.textContent;
        const productsFilter = await getProductsFiltered(category);
        filterProducts(productsFilter);
    };

    useEffect(() => {
        setCheckRegister((prevTitle) =>
            prevTitle === "Register" ? "Register" : "Login"
        );
    }, []);

    const handleBodyStyle = () => {
        setBodyStyle(((theme) => !theme));
    };

    useEffect(() => {
        const body = document.body;
        if (bodyStyle) {
            layoutContainer.classList.toggle("theme-dark")
        } else {
            layoutContainer.classList.toggle("theme-dark")
        }
    }, [bodyStyle])

    return (
        <div className="navbar bg-neutral sm:px-56 px-8">
            <div className="flex-1 sm:justify-between justify-center">
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
                            <summary className=" text-white font-semibold">
                                Productos
                            </summary>
                            <ul className="bg-base-100 p-2 shadow menu dropdown-content z-[1] rounded-box w-48">
                                {categoryName.map((category, index) => (
                                    <li
                                        key={index}
                                        name={category}
                                        className="px-1 hover:bg-neutral hover:text-white hover:rounded hover:cursor-pointer"
                                        onClick={handleCategoryNav}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex justify-center text-white">
                            <button onClick={handleBodyStyle}>
                                {bodyStyle ? (
                                    <IconMoon
                                        className={
                                            "w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
                                        }
                                    />
                                ) : (
                                    <IconSun
                                        className={
                                            "w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
                                        }
                                    />
                                )}
                            </button>
                        </div>

                        <button id="buyIcon" onClick={handleCart}>
                            {
                                <IconCart
                                    className={
                                        "w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
                                    }
                                />
                            }

                            {cartOffcanvasShow && (
                                <OffCanvas
                                    offcanvasTitle={"Carrito de Compras"}
                                    offcanvasContent={<CartOffCanvas />}
                                    onClose={closeCart}
                                    showButton={true}
                                />
                            )}
                        </button>
                        <button id="userIcon" onClick={handleUser}>
                            {
                                <IconUser
                                    className={
                                        "w-10 h-10 text-white hover:bg-white hover:text-black rounded-full p-1"
                                    }
                                />
                            }

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
        </div>
    );
};

export default NavBar;
