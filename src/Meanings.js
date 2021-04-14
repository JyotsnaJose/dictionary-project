import React from "react";
import Synonyms from "./Synonyms";
import "./DisplayResults.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section className="meanings-section">
        <h5>{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <i>"{definition.example}"</i>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
