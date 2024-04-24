import { useState } from "react";
import { products } from "../../../productMock";
import { useEffect } from "react";
import { ItemList } from "./itemList";
import { useParams, useNavigate } from "react-router-dom";

const ItemListContainer = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let productsFiltered = products.filter(
      (product) => product.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(name ? productsFiltered : products);
      } else {
        reject({ status: 400, message: "no estas autorizado" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name]);

  const agregarAlCarrito = (producto) => {
    setCartItems([...cartItems, producto]);
    navigate("/Cart");
  };

  return (
    <ItemList items={items} error={error} agregarAlCarrito={agregarAlCarrito} />
  );
};

export default ItemListContainer;
