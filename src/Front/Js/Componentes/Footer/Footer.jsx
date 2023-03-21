import React from "react";


export const Footer = () => {




    return (

        <>



            <footer>
                <div class="container-fluid bg-light">
                    <div class="row mx-auto text-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div className="m-5">

                                <img src="https://cdn.shopify.com/s/files/1/0035/4195/8756/files/logo_defa8fec-898c-4e8e-98a4-702d3706e2e1.png?v=1646387439" alt="" />

                            </div>
                        </div>
                        <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
                            <div class="">
                                <h4>Quick Link</h4>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-decoration-none">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Service</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div>
                                <h4>Service</h4>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-decoration-none">Envio a Domicilio</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none"> Métodos de pago</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Politica de Privacidad</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Politica de cookies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div>
                                <h4>Address</h4>
                                <ul class="list-unstyled">
                                    <li>
                                        <p>+017367234</p>
                                    </li>
                                    <li>
                                        <p><a href="#">JhoneDoe@ggmaail.com</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>New York
                                            City in New York State
                                            New York City comprises 5 boroughs sitting where the Hudson River meets th</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">

                        <div className="text-center p-3">
                            © 2023 Copyright:{" "}
                            <a >Onky Meat</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}