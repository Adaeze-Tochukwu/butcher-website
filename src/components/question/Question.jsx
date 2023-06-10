import React from "react";
import "./question.scss";
import Heading from "../heading/Heading";
import ChevronDown from "../../assets/images/chevron-down.svg";

export default function Question() {
  return (
    <div className="containerQ">
      <div className="question">
        <Heading
          header1="FAQ"
          header2="Have any question in mind?"
          para="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        />
        <div className="question__faq">
          <div className="question__faq--first">
            <h5 className="question__faq--first-chevron">
              <span>Simply dummy text of the printing</span>
              <img src={ChevronDown} alt="" />
            </h5>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="question__faq--second">
            <h5 className="question__faq--second-chevron">
              <span>Simply dummy text of the printing</span>
              <img src={ChevronDown} alt="" />
            </h5>
            <h5 className="question__faq--second-chevron">
              <span>Simply dummy text of the printing</span>
              <img src={ChevronDown} alt="" />
            </h5>
            <h5 className="question__faq--second-chevron">
              <span>Simply dummy text of the printing</span>
              <img src={ChevronDown} alt="" />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
