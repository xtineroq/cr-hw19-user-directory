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
        }
    };

    // Sort event handlers
    const handleSortSelect = event => {
        
        console.log(event);

        let newEmpArr;

        if (event === "Name") {
            // implement sort by name
            newEmpArr = employees.sort(function(a, b){
                if (a.name.first.toUpperCase() > b.name.first.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })

            setResults([...newEmpArr]);
        }

        if (event === "Location") {
            // implement sort by location
            newEmpArr = employees.sort(function(a, b){
                if (a.location.state.toUpperCase() > b.location.state.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })

            setResults([...newEmpArr]);
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
                <Sort 
                handleSortSelect={handleSortSelect}
                />
            </div>
        </div>
    );
}

export default Filters;