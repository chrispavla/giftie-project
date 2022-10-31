import React, { useState } from "react";

function NewWishListForm({ setIsShown, submitNewWishlist }) {
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

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
    }).then((res) => {
      if (res.ok) {
        res.json().then((newWishlist) => {
          submitNewWishlist(newWishlist);
          setIsShown(false);
        });
      } else {
        res.json().then((error) => setError(error.errors));
      }
    });
    // .then((newWishlist) => submitNewWishlist(newWishlist));

    setTitle("");
    setEventDate("");
    setNote("");
  }

  return (
    <div>
      <button className="buttonx" onClick={handleCloseNewWishlistForm}>
        {" "}
        x{" "}
      </button>
      <p className="createnew">Create New Wish list</p>
      <form className="giftformm" onSubmit={handleSubmitNewWishlistForm}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Wish List Name
          </label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            type="text"
            name="wishlist-name"
            placeholder="Mom's 65th Birthday"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="eventdate" class="form-label">
            Event Date
          </label>
          <input
            class="form-control"
            id="eventdate"
            name="event-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
            Description
          </label>
          <input
            class="form-control"
            id="description"
            name="description"
            type="text"
            placeholder="Some ideas for birthday"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></input>
        </div>
        {error ? error.map((err) => <div className="errors">{err}</div>) : null}
        <button type="submit" className="button">
          Create List
        </button>
      </form>
    </div>
  );
}

export default NewWishListForm;
