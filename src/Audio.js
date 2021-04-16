import React from "react";
import "./DisplayResults.css";

export default function Audio(props) {
  console.log(props.audio);

  if (props.audio) {
    return (
      <div className="Audio">
        <a href={props.audio} target="_blank" rel="noreferrer">
          <button type="button" className="audioButton">
            🔉
          </button>
        </a>
      </div>
    );
  } else {
    return null;
  }
}
