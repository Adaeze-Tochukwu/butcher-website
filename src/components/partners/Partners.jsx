import React, { useState, useEffect } from "react";
import "./Partners.scss";
import data from "./Partners.json";

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(data);
  }, []);

  //the images used in the map are in the Partner.json file and the image source is the Public folder.

  return (
    <div className="images">
      {partners.map((partner) => (
        <ul key={partner.id}>
          <li>
            <img src={partner.image} />
          </li>
        </ul>
      ))}
    </div>
  );
}
