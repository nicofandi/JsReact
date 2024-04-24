import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <h1>Error 404</h1>
      <p>La página que estás buscando no se encuentra.</p>
      <a href="/">Volver a la página principal</a>
    </div>
  );
};

export default NotFound;
