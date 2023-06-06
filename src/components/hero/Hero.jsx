import React from "react";
import "./Hero.scss";
import Cheese from "../../assets/images/cheese.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Capterra from "../../assets/images/capterra.svg";
import Food from "../../assets/images/food.svg";
import HeroRate from "./HeroRate";

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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas sapiente
              </p>
              <button>
                See Our Collection <img src={ArrowRight} alt="" />
              </button>
            </div>
            <div className="hero__Lblock--contain-component">
              <HeroRate image={Capterra} />
              <HeroRate image={Food} />
            </div>
          </div>
        </div>
        <div className="hero__Rblock">
          <img src={Cheese} alt="" className="hero__Rblock--cheese" />
          <div className="hero__Rblock--back">
            <div className="hero__Rblock--front"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
