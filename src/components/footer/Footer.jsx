import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <div className="containerF">
      <div className="containerF__list">
        <FooterList
          className="containerF__list--shop"
          title="Shop"
          list1="Speciallity"
          list2="Offers"
          list3="Updates"
          list4="Best Seller"
        />
        <FooterList
          className="containerF__list--about"
          title="About Us"
          list1="Who We Are"
          list2="Our Achievement"
          list3="Our Service"
          list4="Testimonials"
        />

        <div className="containerF__list--meat">
          <Link to="/" className="containerF__list--meat-fit">
            MEAT<span>FIT</span>
          </Link>
          <h3>A trusted Meat Shop</h3>
          <input type="text" placeholder="Your Email Address" />
          <div className="containerF__list--meat-btn">Subcribe</div>
        </div>

        <FooterList
          className="containerF__list--contacts"
          title="Contacts"
          list1="HelloMeat@gmai.com"
          list2="Opening Hour"
          list3="Location"
          list4="097 56568 77"
        />
        <FooterList
          className="containerF__list--social"
          title="Social Links"
          list1="Facebook Page"
          list2="Instragam"
          list3="Twitter"
          list4="Pinterest"
        />
      </div>
      <footer>Copyright 2023 Alrights Reserved by Adaeze Tochukwu</footer>
    </div>
  );
}
