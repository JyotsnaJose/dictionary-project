import React from "react";
import "./DisplayResults.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.photos.map((photo, index) => {
            return (
              <div key={index} className="col-4 pictures">
                <img
                  src={photo.src.landscape}
                  alt="pic"
                  className="img-fluid"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
