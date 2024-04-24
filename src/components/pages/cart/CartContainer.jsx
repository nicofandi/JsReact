import React, { useState } from "react";
import Cart from "./Cart";

const CartContainer = () => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  const agregarAlCarrito = (producto) => {
    setProductosAgregados([...productosAgregados, producto]);
  };

  console.log("logica");

  return <Cart productosAgregados={productosAgregados} />;
};

export { CartContainer };
