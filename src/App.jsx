import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import CounterContainer from "./components/common/counter/CounterContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const x = "Bienvenidos  ";

  return (
    <div>
      {<CounterContainer />}
      {<Navbar />}
      {<CartContainer />}
      {<ItemListContainer greeting={x} />}
    </div>
  );
}

export default App;
