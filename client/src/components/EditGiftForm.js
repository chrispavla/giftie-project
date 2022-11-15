import React, { useState } from "react";
import { Icon, Modal, Form, Header, Button } from "semantic-ui-react";

function EditGiftForm({ setSavedGift, savedGift }) {
  const [giftName, setGiftName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  function handleSubmitEditGiftForm(e) {
    e.preventDefault();

    fetch(`/saved_gifts/${savedGift.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gift_name: giftName,
        description: description,
        price: price,
        link_url: linkUrl,
        image_url: imageUrl,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((editedGift) => setSavedGift(editedGift));
        handleGiftEdit();
        setOpen(false);
      } else {
        r.json().then((error) => setError(error.errors));
      }
    });
  }

  function handleGiftEdit() {
    setGiftName(savedGift.gift_name);
    setDescription(savedGift.description);
    setPrice(savedGift.price);
    setLinkUrl(savedGift.link_url);
    setImageUrl(savedGift.image_url);
  }

  return (
    <Modal
      closeIcon
      size="small"
      open={open}
      trigger={
        <Button
          circular
          icon="pencil alternate"
          style={{
            marginLeft: "10px",
            backgroundColor: "#f8a27d",
            color: "#8c4c65",
          }}
          onClick={() => handleGiftEdit()}
        />
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        icon="gift"
        content="Edit Gift"
        style={{
          backgroundColor: "#f8a27d",
          color: "#ffff",
        }}
      />
      <Modal.Content>
        <Form onSubmit={handleSubmitEditGiftForm}>
          <Form.Field>
            <label>Gift Name</label>
            <input
              type="text"
              name="gift-name"
              placeholder="Quilted Jersey Robe"
              value={giftName}
              onChange={(e) => setGiftName(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Link</label>
            <input
              name="giftLink"
              type="text"
              placeholder="https://huckberry.com/store/wellen/category/p/71976-quilted-jersey-robe?utm_medium=affiliate&utm_source=giftful.com&clickref=1011lwc9H5X4&utm_content=partnerize"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input
              name="price"
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
              name="giftDetails"
              type="text"
              placeholder="For example: 'medium size', 'the red one'"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Add Image Link</label>
            <input
              name="imagelink"
              type="text"
              placeholder="Image url.."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </Form.Field>
          <Button
            type="submit"
            style={{
              backgroundColor: "#8c4c65",
              color: "#ffff",
            }}
          >
            <Icon name="checkmark" />
            Save Gift
          </Button>
        </Form>
      </Modal.Content>
      {error
        ? error.map((err) => (
            <div className="errors">
              <Icon name="warning circle"></Icon>
              {err}
            </div>
          ))
        : null}
    </Modal>
  );
}

export default EditGiftForm;
