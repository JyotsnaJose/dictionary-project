import React from "react";
import "./DisplayResults.css";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.hits.map((photo, index) => {
            return (
              <div key={index} className="col-4 pictures">
                <a href={photo.largeImageURL} target="_blank" rel="noreferrer">
                  <img
                    src={photo.previewURL}
                    alt="pic"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
        <small className="pixabayLink">
          Images from{" "}
          <a href="https://www.pixabay.com/" target="_blank" rel="noreferrer">
            Pixabay
          </a>
        </small>
      </div>
    );
  } else {
    return null;
  }
}
