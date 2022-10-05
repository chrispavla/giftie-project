import React from "react";

function Filter({
  setSortBySearch,
  setFilterByOccasion,
  setFilterByRecipient,
}) {
  function handleSortByPriceChange(e) {
    setSortBySearch(e.target.value);
  }

  function handleFilterByOccasion(e) {
    setFilterByOccasion(e.target.value);
  }

  function handleFilterByRecipient(e) {
    setFilterByRecipient(e.target.value);
  }

  return (
    <div>
      <label>Sort By:</label>
      <select onChange={handleSortByPriceChange}>
        <option></option>
        {/* <option>Top Rated</option> */}
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest price</option>
      </select>
      <label>Filter By Occasion:</label>
      <select onChange={handleFilterByOccasion}>
        <option></option>
        <option>Christmas</option>
        <option>Birthday</option>
      </select>
      <label>Filter By Recipient:</label>
      <select onChange={handleFilterByRecipient}>
        <option></option>
        <option>Women</option>
        <option>Men</option>
        <option>Pets</option>
        <option>Kids</option>
      </select>
    </div>
  );
}

export default Filter;
