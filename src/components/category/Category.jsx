import React, { useState, useEffect } from "react";
import "./Category.scss";
import data from "./Category.json";
import Heading from "../heading/Heading";
import { Link } from 'react-router-dom';
import Arrow from "../../assets/images/arrow.svg"

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <div>
      <Heading
        header1="CATEGORIES"
        header2="Popular Categories"
        para="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      />
      {categories.map((category) => (
        <div key={category.id}>
          <img src={category.image} alt="" />
          <caption>{category.caption}</caption>
        </div>
      ))}
      <Link>See All <img src={Arrow} alt="" /></Link>
    </div>
  );
}
