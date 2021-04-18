import React from "react";
import "./DisplayResults.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.photos.map((photo, index) => {
            return (
              <div key={index} className="col-4 pictures">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="pic"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
        <small className="pexelLink">
          Images from{" "}
          <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
            Pexels
          </a>
        </small>
      </div>
    );
  } else {
    return null;
  }
}
