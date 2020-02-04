import React, { useState, useRef } from "react";
import {
  StyledSearchBar,
  StyledSearchBarContent
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null)

  const doSearch = event => {
    const { value } = event.target;
    clearTimeout(timeOut.current);
    setState(value);
    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);

  }

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <span className="fa fa-search fa-2x fa-search"></span>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
