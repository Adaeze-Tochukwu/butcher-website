import React from "react";
import "./Testimonial.scss";
import Testimonial1 from "../../assets/images/testimonial.svg";
import Testimonial2 from "../../assets/images/testimonial2.svg";
import Testimonial3 from "../../assets/images/testimonial3.svg";
import Testimonial4 from "../../assets/images/testimonial4.svg";
import Stars from "../star/Star";
import ArrowRed from "../../assets/images/arrow-red.svg";
import ArrowBlue from "../../assets/images/arrow-blue.svg";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial__person">
        <img src={Testimonial1} alt="" className="testimonial__person--pics" />

        <div className="testimonial__person--review">
          <Stars />
          <p>
            It was a pleasure to work with Daniele on the Housebiz project (Real
            Estate). We helped the Housebiz team to design the Web{" "}
          </p>
          <div className="testimonial__person--details">
            <div className="testimonial__person--details-name">
              <h5>JOHN mACKNEY</h5>
              <h6>co- Founder of SISKO</h6>
            </div>
            <div className="testimonial__person--details-arrows">
              <img
                src={ArrowBlue}
                alt=""
                className="testimonial__person--details-blue"
              />
              <img
                src={ArrowRed}
                alt=""
                className="testimonial__person--details-red"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial__persons">
        <img src={Testimonial2} alt="" className="testimonial__persons--pic" />
        <img src={Testimonial3} alt="" className="testimonial__persons--pic" />
        <img src={Testimonial4} alt="" className="testimonial__persons--pic" />
      </div>
    </div>
  );
}
