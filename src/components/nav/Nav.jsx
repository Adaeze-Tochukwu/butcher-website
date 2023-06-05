import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import ChevronDown from "../../assets/images/chevron-down.svg";
import User from "../../assets/images/user.svg";
import Heart from "../../assets/images/heart.svg";
import ShoppingBag from "../../assets/images/shopping-bag.svg";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <input
          type="checkbox"
          className="nav__container--toggle"
          id="hamburger"
          hidden
        />
        <div className="nav__container--Lblock">
          <label htmlFor="hamburger">
            <RxHamburgerMenu className="nav__container--Lblock-hamburger" />
          </label>
          <AiOutlineClose className="nav__container--Lblock-close" />
          <Link to="/">
            MEAT<span>FIT</span>
          </Link>
        </div>
        <ul className="nav__container--Rblock">
          <li>
            <Link to="/profile">
              <img src={User} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/favorite">
              <img src={Heart} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={ShoppingBag} alt="" />
            </Link>
          </li>
        </ul>
        <ul className="nav__container--dropDownList">
          <li className="nav__container--dropDownList-chevronDown">
            Beaf
            <Link to="/beaf">
              <img src={ChevronDown} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/meat"> Meat</Link>
          </li>
          <li className="nav__container--dropDownList-chevronDown">
            Chicken
            <Link to="/beaf">
              <img src={ChevronDown} alt="" />
            </Link>
          </li>
          <li>
            <Link to="seaFood"> Sea Food</Link>
          </li>
          <li>
            <Link to="poultry">Poultry</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
