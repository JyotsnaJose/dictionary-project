import React, { useState } from "react";
import axios from "axios";
import DisplayResults from "./DisplayResults";

export default function Search() {
  let [searchword, setSearchword] = useState(null);
  let [results, setResults] = useState(null);

  function handleSearch(event) {
    event.preventDefault();

    //api Call - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchword}`;
    axios.get(apiUrl).then(getUrlResponse);
  }
  function getUrlResponse(response) {
    setResults(response.data[0]);
  }
  function handleSearchInput(event) {
    setSearchword(event.target.value);
  }

  return (
    <div className="Search">
      <header className="header">
        <h1>Dictionary</h1>
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              onChange={handleSearchInput}
            ></input>
            <button
              type="button"
              className="btn btn-outline-secondary searchButton"
              onClick={handleSearch}
            >
              Go!
            </button>
          </div>
        </form>
        <small>
          coded by{" "}
          <a
            href="https://www.linkedin.com/in/jyotsna-jose-82562418b"
            target="_blank"
            rel="noreferrer"
          >
            Jyotsna Jose
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/JyotsnaJose/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://suspicious-swanson-957d5e.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </small>
      </header>
      <DisplayResults result={results} />
    </div>
  );
}
