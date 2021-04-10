import React from "react";
import Meanings from "./Meanings";

export default function DisplayResults(props) {
  if (props.result) {
    return (
      <div className="DisplayResults">
        <h3>{props.result.word}</h3>
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
