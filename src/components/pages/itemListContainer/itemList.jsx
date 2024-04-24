import React from "react";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error, agregarAlCarrito }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding:"87px"
      }}
    >
      {items.map(({ id, title, description, price, img }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            img={img}
            id={id}
            onAddToCart={() => agregarAlCarrito({ id, title, price })}
          />
        );
      })}

      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export { ItemList };
