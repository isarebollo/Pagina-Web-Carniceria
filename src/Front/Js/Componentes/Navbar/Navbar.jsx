import React from "react";
import { Link } from "react-router-dom";

import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
export const Navbar = () => {


    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://cdn.shopify.com/s/files/1/0035/4195/8756/files/logo_defa8fec-898c-4e8e-98a4-702d3706e2e1.png?v=1646387439" alt="" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">

                                <Link to="/" className="nav-link">

                                    Home
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">

                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li>
                                        <Link to="/cerdo" className="dropdown-item">
                                            Cerdo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ternera" className="dropdown-item">
                                            Ternera
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/pollo" className="dropdown-item">
                                            Pollo/Pavo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/elaborados" className="dropdown-item">
                                            Nuestros Elaborados
                                        </Link>
                                    </li>



                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Recetas</a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Información de Interes
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">Contacto</a></li>
                                    <li><a className="dropdown-item" href="#">Condiciones de compra/Venta</a></li>

                                </ul> 
                            </li> */}
                        </ul>
                        <form className="d-flex">

                            <input className="form-control" type="search" placeholder="Buscar..." aria-label="Search" />
                            <button className="btn fs-3" type="submit"><AiOutlineSearch /></button>
                        </form>
                    </div>
                    {/* <div className="mx-auto">
                        <button className="btn fs-3"> <BsFillPersonLinesFill /></button>
                        <button className="btn fs-3"> <AiOutlineShoppingCart /></button>

                    </div> */}

                </div>
            </nav>

        </>
    )
}