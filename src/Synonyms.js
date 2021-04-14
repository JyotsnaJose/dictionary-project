import React from "react";
import "./DisplayResults.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        Synonyms:
        {props.synonyms.map((synonym, index) => {
          return (
            <span key={index} className="synonym">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
