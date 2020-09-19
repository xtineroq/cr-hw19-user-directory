import React from "react";
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown';

function Sort(props) {
    return (
        <div>
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={props.handleSortName}>Name</Dropdown.Item>
                <Dropdown.Item>Location</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    );
}

export default Sort;