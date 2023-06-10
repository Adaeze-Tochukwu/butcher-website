import React, { useState, useEffect } from "react";
import "./Category.scss";
import data from "./Category.json";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/arrow.svg";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <div className="categories">
      <Heading
        header1="CATEGORIES"
        header2="Popular Categories"
        para="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      />
      <div className="categories__lists">
        {categories.map((category) => (
          <div key={category.id} className="categories__lists--card">
            <img src={category.image} alt="" />
            <caption>{category.caption}</caption>
          </div>
        ))}
      </div>
      <Link className="categories__link">
        <span>See All</span> <img src={Arrow} alt="" />
      </Link>
    </div>
  );
}
