import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, img, id, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(id);
  };

  return (
    <div className="card">
      <img src={img} alt={title} className="card-imagen" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <div className="card-buttons">
          <Link to={`/itemDetail/${id}`}>
              Ver detalle
          </Link>
          <button
            className="btn btn-primary"
            size="small"
            onClick={handleClick}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
