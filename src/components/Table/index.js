import React from "react";
import Row from "../Row";
import "./style.css";

function Table(props) {
    
    const empArr = props.employees;

    return (
        <div className="tableBlock">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>

                {empArr.map(employee => <Row key={employee.login.uuid} employee={employee} />)}
            </table>
        </div>
    );
}

export default Table;