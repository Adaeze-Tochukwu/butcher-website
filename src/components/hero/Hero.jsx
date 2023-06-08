import React from "react";
import "./Hero.scss";
import Cheese from "../../assets/images/cheese.svg";
import CheeseTablet from "../../assets/images/cheeseTablet.svg";
import CheeseTabletSmall from "../../assets/images/cheeseTabletSmall.svg";
import CheeseDesktop from "../../assets/images/cheeseDesktop.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Capterra from "../../assets/images/capterra.svg";
import Food from "../../assets/images/food.svg";
import HeroReview from "./HeroReview";
import MeatBig from "../../assets/images/MeatBig.svg";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__Lblock">
          <div className="hero__Lblock--contain">
            <div className="hero__Lblock--contain-headings">
              <h5>FRESH MEAT SINCE 1997</h5>
              <h1>Get fresh meat in your door step</h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <button>
              See Our Collection <img src={ArrowRight} alt="" />
            </button>
            <div className="hero__Lblock--contain-component">
              <HeroReview image={Capterra} />
              <HeroReview image={Food} />
            </div>
          </div>
        </div>
        <div className="hero__Rblock">
          <img src={MeatBig} alt="" />
        </div>
      </div>
    </div>
  );
}
