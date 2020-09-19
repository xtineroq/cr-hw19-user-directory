import React, { useState } from "react";
import SearchForm from '../SearchForm';
import Sort from '../Sort';
import API from "../../utils/API";
import "./style.css";

function Filters({setResults}) {

    const [state, setState] = useState ({
        search: "",
        results: [],
        error: ""
    });

    const [sort, setSort] = useState ("");

    // Search form event handlers
    const handleInputChange = event => {
        setState({ search: event.target.value });
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
    
        if (state.search !== "") {
            const users = API.filterUsers(state.search)
            
            setResults(users);
        }
    };

    // Sort event handlers
    const handleSortSelect = event => {
        
    }

    const handleSortName = () => {
        if (sort === "Name") {

        }

        if (sort === "Location") {

        }
    }

    return (
        <div className="filters-box">
            <div className="search-col">
                <SearchForm 
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                />
            </div>
            <div className="sort-col">
                <Sort />
            </div>
        </div>
    );
}

export default Filters;