import React from "react";
import "./History.scss";

export default function History() {
  return (
    <div className="containerV">
      <div className="history">
        <div className="history__paragraph">
          <h3>Meat Delivery Company Since 1997</h3>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy.Simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy
          </p>
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NWG1Ygt1k1k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
