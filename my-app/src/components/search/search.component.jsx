import React from "react";

import "./search.styles.css";

export const Search = ({ searchValue, searchMonsters, placeholder }) => (
  <div className="search-wrapper">
    <input
      className="search"
      onChange={searchMonsters}
      value={searchValue}
      type="search"
      placeholder={placeholder}
    />
  </div>
);

export default Search;
