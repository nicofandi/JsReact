const Cart = ({ productosAgregados }) => {
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {productosAgregados && productosAgregados.length > 0 ? (
          productosAgregados.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))
        ) : (
          <li>No hay productos en el carrito</li>
        )}
      </ul>
    </div>
  );
};
export {Cart};