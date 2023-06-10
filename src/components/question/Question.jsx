import React from "react";
import "./question.scss";
import Heading from "../heading/Heading";

export default function Question() {
  return (
    <div className='question'>
      <Heading
        header1="FAQ"
        header2="Have any question in mind?"
        para="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      />
    </div>
  );
}
