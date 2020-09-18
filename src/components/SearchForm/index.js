import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="searchForm form-inline">
        <div className="form-group">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employee"
            type="text"
            className="form-control"
            placeholder="Employee's name"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
}

export default SearchForm;