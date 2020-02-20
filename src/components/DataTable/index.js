import React from "react";
import DataBody from "../DataBody/index";

const EmployeeTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB </th>
        </tr>
      </thead>
    </table>
  );
};

export default EmployeeTable;
