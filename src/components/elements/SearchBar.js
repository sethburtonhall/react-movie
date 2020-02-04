import React, { useState, useRef } from "react";

// Packages
import PropTypes from 'prop-types'

// Styled Components
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

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar;
