import React, { useState, useEffect } from "react";
import "./Process.scss";
import data from "./Process.json";
import Heading from "../heading/Heading";

export default function Process() {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    setProcesses(data);
  }, []);

  return (
    <div className="containerP">
      <div className="process">
        <Heading
          header1="PROCESS"
          header2="Our Quick Process"
          para="Simply dummy text of the printing and typesetting industry."
        />
        <ul>
          {processes.map((process) => (
            <li key={process.id}>
              <div className="process__background">
                <img src={process.background} alt="" />
                <div className="process__image">
                  <img src={process.image} alt="" />
                </div>
              </div>
              <h3>{process.title}</h3>
              <p>{process.paragraph}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
