import React, { useState } from "react";
import { Button, Header, Modal, Form, Icon } from "semantic-ui-react";

function NewWishListForm({ submitNewWishlist }) {
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

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
          setOpen(false);
        });
      } else {
        res.json().then((error) => setError(error.errors));
      }
    });

    setTitle("");
    setEventDate("");
    setNote("");
  }

  return (
    <Modal
      closeIcon
      size="tiny"
      open={open}
      trigger={
        <Button
          style={{
            marginTop: "50px",
            backgroundColor: "#8c4c65",
            color: "#ffff",
          }}
        >
          Add a New Wishlist
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        icon="gift"
        content="Create New Wishlist"
        style={{
          backgroundColor: "#f8a27d",
          color: "#ffff",
        }}
      />
      <Modal.Content>
        <Form onSubmit={handleSubmitNewWishlistForm}>
          <Form.Field>
            <label>Wishlist Name</label>
            <input
              type="text"
              placeholder="Mom's 65th Birthday"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              type="text"
              placeholder="Some ideas for birthday"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></input>
          </Form.Field>
          {error
            ? error.map((err) => <div className="errors">{err}</div>)
            : null}
          <Button
            type="submit"
            style={{
              backgroundColor: "#8c4c65",
              color: "#ffff",
            }}
          >
            <Icon name="add" />
            Create List
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default NewWishListForm;
