import React from "react";

function Filter() {
  return (
    <div>
      <label>Sort By</label>
      <select>
        <option></option>
        <option>Top Rated</option>
        <option>Price (low to high)</option>
        <option>Price (high to low)</option>
      </select>
    </div>
  );
}

export default Filter;
