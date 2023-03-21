import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Componentes/scrollToTop";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Componentes/Footer/Footer";
import { Navbar } from "./Componentes/Navbar/Navbar";
import injectContext from "./store/appContext";

import "./../../index.css"



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div id="container">
            <BrowserRouter basename={basename}>
                <ScrollToTop>

                    <Navbar />

                    <Routes>
                        <Route element={<Home />} path="/" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>

                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);