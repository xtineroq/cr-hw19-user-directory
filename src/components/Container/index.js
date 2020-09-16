import React from "react";
import SearchForm from '../SearchForm';
import Sort from '../Sort';
import "./style.css";

function Container() {
    return (
        <div className="container">
            <div className="row cont">
                <div className="col-lg-4 offset-lg-3">
                    <SearchForm />
                </div>
                <div className="col-lg-4">
                    <Sort />
                </div>
            </div>
        </div>
    );
}

export default Container;