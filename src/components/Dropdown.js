import React, { useState } from "react";
import "../App.css";

const Dropdown = ({ ArrayData }) => {
  const [state, setState] = useState("Genre");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  let filteredItems;
  if (state === "Genre") {
    filteredItems = ArrayData;
  } else {
    filteredItems = ArrayData.filter((element) => element.type === state);
  }

  return (
    <div>
      <select value={state} onChange={handleChange}>
        <option value="Genre">Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Love">Love</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((element, index) => (
            <tr key={index}>
              <td>{element.type}</td>
              <td>{element.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dropdown;
