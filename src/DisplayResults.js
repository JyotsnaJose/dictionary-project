import React from "react";
import Meanings from "./Meanings";
import "./DisplayResults.css";

export default function DisplayResults(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="DisplayResults">
        <section className="main-section">
          <h3>{props.result.word}</h3>
          {props.result.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  Listen
                </a>
                {phonetic.text}
              </div>
            );
          })}
        </section>
        <section className="meanings-section">
          {props.result.meanings.map((meaning, index) => {
            return (
              <div key={index} className="divider">
                <Meanings meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
