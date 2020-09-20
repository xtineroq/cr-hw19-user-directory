import React from "react";
import "./style.css";

function SearchForm(props) {
    
  return (
    <div className="searchForm form-inline">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="search"
          aria-label="Search"
          className="form-control"
          placeholder="Search by first name"
        />
        <button onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;