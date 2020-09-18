import React from "react";
import "./style.css";

function SearchForm(props) {
    console.log(props);
    
    return (
      <div className="searchForm form-inline">
        <div className="form-group">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employee"
            type="text"
            className="form-control"
            placeholder="Employee's name"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </div>
    );
}

export default SearchForm;