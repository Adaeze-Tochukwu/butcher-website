import React from "react";
import "./Heading.scss";

export default function Heading(props) {
  const { header1, header2, para } = props;

  return (
    <div className="heading">
      <h5>{header1}</h5>
      <h2>{header2}</h2>
      <p>{para}</p>
    </div>
  );
}
