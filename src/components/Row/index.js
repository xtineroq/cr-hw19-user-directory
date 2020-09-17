import React from "react";
import "./style.css";

function Row(props) {

    return (
        <tbody>
              <tr key={props.employee.id}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={props.employee.picture.medium}
                    alt={"profile image for " + props.employee.name.first + " " + props.employee.name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {props.employee.name.first} {props.employee.name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {props.employee.phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + props.employee.email} target="__blank">
                    {props.employee.email}
                  </a>
                </td>
              </tr>
      </tbody>
    );
}

export default Row;