import React from 'react';
import "./Hero.scss";
import StarFilled from "../../assets/images/star-filled.svg";
import Star from "../../assets/images/star.svg";

export default function HeroRate(props) {
const {image} = props

  return (
    <div className="heroRate">
      <div className='heroRate__star'>
        <img src={StarFilled} alt="" />
        <img src={StarFilled} alt="" />
        <img src={StarFilled} alt="" />
        <img src={StarFilled} alt="" />
        <img src={Star} alt="" />
      </div>
      <p>4.9/5 - From 213 Reviews</p>
      <img src={image} alt="" />
    </div>
  );
}
