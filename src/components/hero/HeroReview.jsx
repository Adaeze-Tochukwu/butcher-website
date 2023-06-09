import React from "react";
import "./Hero.scss";
import StarFilled from "../../assets/images/star-filled.svg";
import Stars from "../star/Star"

export default function HeroReview(props) {
  const { image } = props;

  return (
    <div className="hero__Lblock--review">
      <div className="hero__Lblock--review">
        <Stars />
      </div>
      <p>4.9/5 - From 213 Reviews</p>
      <img src={image} alt="" className='hero__Lblock--review-image' />
    </div>
  );
}
