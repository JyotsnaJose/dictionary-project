import React from "react";
import Meanings from "./Meanings";
import "./DisplayResults.css";

export default function DisplayResults(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="DisplayResults">
        <h3>{props.result.word}</h3>
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
