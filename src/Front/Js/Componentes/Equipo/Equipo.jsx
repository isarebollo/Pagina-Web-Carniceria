import React from "react";
import "./Equipo.css"
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
export const Equipo = () => {



    return (<>
        <div className="container-fluid text-center m-5 "id="MiembrosDelEquipo">

            <h1 className="m-5" > Miembros del equipo</h1>

            <div className=" mx-auto">


                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card ">
                            <img src="//cdn.shopify.com/s/files/1/0035/4195/8756/files/team1_480x480@2x.jpg?v=1613520898" className="img-fluid imgEquipo" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Saul Dress</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus libero magna.</p>
                            </div>
                            <div>

                                <a href="" className="btn m-2 fs-4"><BsInstagram /></a>
                                <a href="" className="btn m-2 fs-4"><BsFacebook /></a>
                                <a href="" className="btn m-2 fs-4"><BsTwitter /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="//cdn.shopify.com/s/files/1/0035/4195/8756/files/team1_480x480@2x.jpg?v=1613520898" className="img-fluid imgEquipo" alt="..." />

                            <div className="card-body">
                                <h4 className="card-title">Tandy Coats</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus libero magna.</p>
                            </div>
                            <div>

                                <a href="" className="btn m-2 fs-4"><BsInstagram /></a>
                                <a href="" className="btn m-2 fs-4"><BsFacebook /></a>
                                <a href="" className="btn m-2 fs-4"><BsTwitter /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="//cdn.shopify.com/s/files/1/0035/4195/8756/files/team3_480x480@2x.jpg?v=1613520898" className="img-fluid imgEquipo" alt="..." />

                            <div className="card-body">
                                <h4 className="card-title">Chris Linder</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus libero magna.</p>
                            </div>

                            <div>

                                <a href="" className="btn m-2 fs-4"><BsInstagram /></a>
                                <a href="" className="btn m-2 fs-4"><BsFacebook /></a>
                                <a href="" className="btn m-2 fs-4"><BsTwitter /></a>
                            </div>
                        </div>
                    </div>

                </div>




            </div>


        </div>

    </>
    )
}



// src="//cdn.shopify.com/s/files/1/0035/4195/8756/files/team1_480x480@2x.jpg?v=1613520898"

// src="//cdn.shopify.com/s/files/1/0035/4195/8756/files/team3_480x480@2x.jpg?v=1613520898" 

