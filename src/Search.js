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
      <header>
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
              className="btn btn-outline-secondary"
              onClick={handleSearch}
            >
              Go!
            </button>
          </div>
        </form>
      </header>
      <DisplayResults result={results} />
    </div>
  );
}
