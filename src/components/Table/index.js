import React from "react";
import Row from "../Row";
import "./style.css";

// object destructuring
function Table({employees, results}) {

    const [empArr, setEmpArr] = React.useState ([]);

    // Will only run if there are changes to dependencies
    React.useEffect(() => {
        if (results.length > 0) {
            setEmpArr(results);
        } else {
            setEmpArr(employees);
        }

        console.log("running");
        
        // Dependencies - all used inside the function
    }, [setEmpArr, results, employees])

    return (
        <div className="tableBlock">
            <table
                id="table"
                className="table table-hover table-condensed"
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