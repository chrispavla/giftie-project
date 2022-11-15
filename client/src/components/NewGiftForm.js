import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

function NewGiftForm({ wishlist, submitNewGift }) {
  const [giftName, setGiftName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  let [user, setUser] = useContext(UserContext);
  const [open, setOpen] = useState(false);

  function handleSubmitNewGiftForm(e) {
    e.preventDefault();

    let newGift = {
      gift_name: giftName,
      description: description,
      price: price,
      link_url: linkUrl,
      image_url: imageUrl,
      user_id: user.id,
      wish_list_id: wishlist.id,
    };

    fetch("/saved_gifts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGift),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          submitNewGift(data);
          setOpen(false);
          setGiftName("");
          setDescription("");
          setImageUrl("");
          setLinkUrl("");
          setPrice("");
        });
      } else {
        res.json().then((error) => setError(error.errors));
      }
    });
  }

  return (
    <Modal
      closeIcon
      open={open}
      size="small"
      trigger={
        <Button
          style={{
            marginTop: "30px",
            backgroundColor: "#8c4c65",
            color: "#ffff",
            marginBottom: "30px",
          }}
        >
          Add a Gift
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        icon="gift"
        content="Create New Gift"
        style={{
          backgroundColor: "#f8a27d",
          color: "#ffff",
        }}
      />
      <Modal.Content>
        <Form onSubmit={handleSubmitNewGiftForm}>
          <Form.Field>
            <label>Gift Name</label>
            <input
              type="text"
              placeholder="Quilted Jersey Robe"
              value={giftName}
              onChange={(e) => setGiftName(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Link</label>
            <input
              type="text"
              placeholder="https://huckberry.com/store/wellen/category/p/71976-quilted-jersey-robe?utm_medium=affiliate&utm_source=giftful.com&clickref=1011lwc9H5X4&utm_content=partnerize"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Gift Details</label>
            <input
              type="text"
              placeholder="For example: 'medium size', 'the red one'"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Add Image Link</label>
            <input
              type="text"
              placeholder="Image url.."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </Form.Field>
          <Button
            style={{
              backgroundColor: "#8c4c65",
              color: "#ffff",
            }}
          >
            <Icon name="add" />
            Save Gift
          </Button>
          {error
            ? error.map((err) => (
                <div className="errors">
                  <Icon name="warning circle"></Icon>
                  {err}
                </div>
              ))
            : null}
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default NewGiftForm;
