import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewGiftForm({ setIsShown, user, wishlist, submitNewGift }) {
  const [giftName, setGiftName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState();

  let history = useHistory();

  function handleCloseNewGiftForm() {
    setIsShown(false);
  }

  function handleSubmitNewGiftForm(e) {
    e.preventDefault();

    let newGift = {
      gift_name: giftName,
      description: description,
      tags: tags,
      price: price,
      quantity: quantity,
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
          alert("Gift has been added to your wishlist!");
          setIsShown(false);
        });
      } else {
        res.json().then((error) => setError(error.errors));
      }
    });
  }

  return (
    <div>
      <button onClick={handleCloseNewGiftForm}> x </button>
      <p>Create New Gift</p>
      <form onSubmit={handleSubmitNewGiftForm}>
        <label>Gift Name</label>
        <input
          type="text"
          name="gift-name"
          placeholder="Quilted Jersey Robe"
          value={giftName}
          onChange={(e) => setGiftName(e.target.value)}
        ></input>
        <label>Link</label>
        <input
          name="giftLink"
          type="text"
          placeholder="https://huckberry.com/store/wellen/category/p/71976-quilted-jersey-robe?utm_medium=affiliate&utm_source=giftful.com&clickref=1011lwc9H5X4&utm_content=partnerize"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        ></input>
        <label>Price</label>
        <input
          name="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label>Quantity</label>
        <input
          name="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <label>Gift Details</label>
        <input
          name="giftDetails"
          type="text"
          placeholder="For example: 'medium size', 'the red one'"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label>Add Image Link</label>
        <input
          name="imagelink"
          type="text"
          placeholder="Image url.."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>
        <button>Save Gift</button>
        {error ? error.map((err) => <div>{err}</div>) : null}
      </form>
    </div>
  );
}

export default NewGiftForm;
