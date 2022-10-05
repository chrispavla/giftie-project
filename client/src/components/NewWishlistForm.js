import React, { useState } from "react";

function NewWishListForm({ setIsShown, submitNewWishlist }) {
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [note, setNote] = useState("");

  function handleCloseNewWishlistForm() {
    setIsShown(false);
  }

  function handleSubmitNewWishlistForm(e) {
    e.preventDefault();

    let newWishlist = {
      title: title,
      event_date: eventDate,
      note: note,
    };

    fetch("/wish_lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWishlist),
    })
      .then((res) => res.json())
      .then((newWishlist) => submitNewWishlist(newWishlist));

    setTitle("");
    setEventDate("");
    setNote("");

    setIsShown(false);
  }

  return (
    <div>
      <button onClick={handleCloseNewWishlistForm}> x </button>
      <p>Create New Wish list</p>
      <form onSubmit={handleSubmitNewWishlistForm}>
        <label>Wish List Name</label>
        <input
          type="text"
          name="wishlist-name"
          placeholder="Mom's 65th Birthday"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Event Date</label>
        <input
          name="event-date"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        ></input>
        <label>Description</label>
        <input
          name="description"
          type="text"
          placeholder="Some ideas for birthday"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></input>
        <button>Create List</button>
      </form>
    </div>
  );
}

export default NewWishListForm;
