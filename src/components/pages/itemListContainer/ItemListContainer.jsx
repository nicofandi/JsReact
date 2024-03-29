import ProductCard from "../../common/productCard/ProductCard";
const ItemListContainer = ({ gretting }) => {
  return (
    <div>
      <h1>{gretting}</h1>

      {}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          backgroundColor: "steelblue",
        }}
      >
        <ProductCard
          imagenUrl="https://res.cloudinary.com/dxyonwc26/image/upload/v1711679707/RAZA_mgueme.png"
          precio={2400}
          titulo={"Raza"}
          descripcion={"Alimento para perros 6kg"}
        />
        <ProductCard
          precio={3000}
          titulo={"Eukanuba"}
          descripcion={"Alimento para perros 5kg"}
        />
        <ProductCard
          precio={2400}
          titulo={"Dog chow"}
          descripcion={"Alimento para perros 6,5kg"}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
