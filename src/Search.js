import React, { useState } from "react";

export default function Search() {
  let [searchword, setSearchword] = useState(null);
  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${searchword}`);
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
    </div>
  );
}
