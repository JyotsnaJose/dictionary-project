import React from "react";
import Meanings from "./Meanings";
import Photos from "./Photos";
import Audio from "./Audio";
// import useSound from "use-sound";
import "./DisplayResults.css";

export default function DisplayResults(props) {
  if (props.result) {
    return (
      <div className="DisplayResults">
        <section className="main-section">
          <h3>{props.result.word}</h3>
          {console.log(props.result.phonetics)}
          {props.result.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                {/* <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  Listen
                </a> */}
                <Audio audio={phonetic} />
              </div>
            );
          })}
        </section>
        <section className="meanings-section">
          <div className="row">
            <div className="col-md-7">
              {props.result.meanings.map((meaning, index) => {
                return (
                  <div key={index} className="divider">
                    <Meanings meaning={meaning} />
                  </div>
                );
              })}
            </div>
            <div className="col-md-5">
              <Photos photos={props.photos} />
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
