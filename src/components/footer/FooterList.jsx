import React from "react";
import "./Footer.scss";

export default function FooterList(props) {
const {title, list1, list2, list3, list4 } = props
  return (
    <div className="footerComponent">
      <h3>{title}</h3>
      <ul>
        <li>{list1}</li>
        <li>{list2}</li>
        <li>{list3}</li>
        <li>{list4}</li>
      </ul>
    </div>
  );
}
