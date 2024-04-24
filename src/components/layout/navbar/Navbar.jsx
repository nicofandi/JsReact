import React from "react";
import "./Navbar.css";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/cartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand" href="/">
          Todo Mascotas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/category/Perros" className="nav-link">
              Comida para perros
            </Link>
            <Link to="/category/Gatos" className="nav-link">
              Comida para gatos
            </Link>
          </ul>
        </div>
        <BiCart />
        <CartWidget />
        <Link to="./cart">Ir al carrito</Link>
        <span className="cart-item-count">0</span>
      </div>
    </nav>
  );
};
export { Navbar };
