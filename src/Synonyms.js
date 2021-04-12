import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map((synonym, index) => {
          return <p key={index}>{synonym}</p>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
