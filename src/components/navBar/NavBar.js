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
                        <Link to="/" className="logo">WineOn</Link>
                    </div>
                    <CartWidget>
                        1
                    </CartWidget>
                    <button className="burger">
                        <i className="fas fa-bars"></i> 
                    </button>
                   <div>
                        <a>
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
                    <Link to="/">INICIO</Link>
                    <Link to="/">PRODUCTOS</Link>
                    <Link to="/category/tinto">VINO TINTO</Link>
                    <Link to="/category/blanco">VINO BLANCO</Link>
                    <a >CONTACTO</a>
                    <a >NOSOTROS</a>
                    <a >INGRESAR</a>
                </nav>
            </section>
        </header>
    );
};

export default NavBar;