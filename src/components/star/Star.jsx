import React from "react";
import "./Star.scss";
import StarRed from "../../assets/images/star-filled.svg";
import StarWhite from "../../assets/images/star-white.svg";

export default function Star() {
  return (
    <div className='star'>
      <img src={StarRed} alt="" />
      <img src={StarRed} alt="" />
      <img src={StarRed} alt="" />
      <img src={StarRed} alt="" />
      <img src={StarWhite} alt="" />
    </div>
  );
}
