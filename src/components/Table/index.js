import React from "react";
import Row from "../Row";
import "./style.css";

function Table(props) {
    return (
        <div className="tableHeader">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {/* {props.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        props.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })} */}
                    </tr>
                </thead>

                <Row />
            </table>
        </div>
    );
}

export default Table;