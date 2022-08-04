import React from "react";
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <header>
            <section className="container">
                <div className="header-div-one">
                    <div>
                        <a href="#" className="logo">WineOn</a>
                    </div>
                    <CartWidget>
                        1
                    </CartWidget>
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
                    <Link to="/category/tinto">VINO TINTO</Link>
                    <Link to="/categoy/blanco">VINO BLANCO</Link>
                    <a href="#">CONTACTO</a>
                    <a href="#">NOSOTROS</a>
                    <a href="#">INGRESAR</a>
                </nav>
            </section>
        </header>
    );
};

export default NavBar;