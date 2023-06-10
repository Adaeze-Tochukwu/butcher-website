import React, { useState, useEffect } from "react";
import "./Products.scss";
import data from "./Products.json";
import Heading from "../heading/Heading";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="products">
      <Heading
        header1="RECENT PRODUCTS"
        header2="Recent Products"
        para="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      />
      <div className="products__list">
        {products.map((product) => (
          <div key={product.id} className="products__list--card">
            <img src={product.image} alt="" />
            <h4>{product.nutritions}</h4>
            <h2>{product.size}</h2>
            <p>{product.meaning}</p>
            <button>{product.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
