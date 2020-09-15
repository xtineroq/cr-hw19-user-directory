import React from "react";
import "./style.css";

function Row(props) {
    return (
        <tbody>
            <tr key={props.key}>
            <td data-th="Image" className="align-middle">
                <img
                src={props.image}
                alt={"profile image for " + props.firstName + " " + props.lastName}
                className="img-responsive"
                />
            </td>
            <td data-th="Name" className="name-cell align-middle">
                {props.firstName} {props.lastName}
            </td>
            <td data-th="Phone" className="align-middle">
                {props.phone}
            </td>
            <td data-th="Email" className="align-middle">
                <a href={"mailto:" + props.email} target="__blank">
                {props.email}
                </a>
            </td>
            </tr>
      </tbody>
    );
}

export default Row;