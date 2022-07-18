import React from "react";
import './NavBar.css'

function NavBar(){
    return(
        <header>
            <section className="container">
                <div className="header-div-one">
                    <div>
                        <a href="#" className="logo">WineOn</a>
                    </div>
                    <button className="product-cart">
                        <a href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a> 
                    </button>
                    <button className="burger">
                        <i className="fas fa-bars"></i> 
                    </button>
                   <div>
                        <a href="#">
                            <button className="login-button">INGRESAR</button>
                        </a>
                    </div>
                </div>
                <div className="header-div-two">
                    <form action="#">
                        <div className="inputForm">
                            <input className="header-input" type="search" name="buscador" id="" placeholder="¿Qué estás buscando?" />
                            <button className="posicion-i lens">
                            <i className="fas fa-search"></i>
                            </button>
                        </div>

                    </form>
                </div>
                <nav className="menu"> 
                    <a href="#">INICIO</a>
                    <a href="#">PRODUCTOS</a>
                    <a href="#">VINO TINTO</a>
                    <a href="#">VINO BLANCO</a>
                    <a href="#">CONTACTO</a>
                    <a href="#">NOSOTROS</a>
                    <a href="#">INGRESAR</a>
                </nav>
            </section>
        </header>
    );
};

export default NavBar;