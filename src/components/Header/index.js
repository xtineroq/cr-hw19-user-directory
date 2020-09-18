import React from "react";
import "./style.css";

function Header () {
    return (
        <div className="header">
            <div className="header-text">
                <h1>Employee Directory</h1>
                <p>Sort by name or use the search box to filter results.</p>
            </div>
        </div>
    )
}

export default Header;