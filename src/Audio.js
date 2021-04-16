import React from "react";
import "./DisplayResults.css";

export default function Audio(props) {
  console.log(props.audio.audio);

  if (props.audio) {
    return (
      <div className="Audio">
        <a href={props.audio.audio} target="_blank" rel="noreferrer">
          <button type="button" className="audioButton">
            <i className="fas fa-volume-up volume"></i>
          </button>
        </a>{" "}
        {props.audio.text}
      </div>
    );
  } else {
    return null;
  }
}
