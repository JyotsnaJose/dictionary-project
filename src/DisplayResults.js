import React from "react";
import Meanings from "./Meanings";
import "./DisplayResults.css";

export default function DisplayResults(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="DisplayResults">
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
        <hr />
        {props.result.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
