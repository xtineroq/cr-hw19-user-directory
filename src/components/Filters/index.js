import React, { useState } from "react";
import SearchForm from '../SearchForm';
import Sort from '../Sort';
import API from "../../utils/API";
import "./style.css";

function Filters({employees, setResults}) {

    const [state, setState] = useState ({
        search: "",
        results: [],
        error: ""
    });

    // Search form event handlers
    const handleInputChange = event => {
        setState({ search: event.target.value });
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
        
        if (state.search !== "") {
            const users = API.filterUsers(state.search)
            
            setResults(users);

        } else {
            setResults([]);
        }
    };

    // Sort event handler
    const handleSortSelect = sortKey => {

        let sortedArray = API.sortedUsers(sortKey)

        setResults([...sortedArray]);
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
                <Sort 
                handleSortSelect={handleSortSelect}
                />
            </div>
        </div>
    );
}

export default Filters;