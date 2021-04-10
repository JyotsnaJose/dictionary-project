import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <i>{definition.example}</i>
            </p>
          </div>
        );
      })}
    </div>
  );
}
