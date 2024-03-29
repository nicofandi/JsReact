import React from "react";
import "./ProductCard.css";

const ProductCard = ({ titulo, descripcion, precio, imagenUrl }) => {
  return (
    <div className="card">
      <img src={imagenUrl} alt={titulo} className="card-imagen" />
      <div className="card-body">
        <h3>{titulo}</h3>
        <h4>{descripcion}</h4>
        <h4>{precio}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
