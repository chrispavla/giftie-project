import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

function NewGiftForm({ setIsShown, wishlist, submitNewGift }) {
  const [giftName, setGiftName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  let [user, setUser] = useContext(UserContext);

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
      <button className="buttonx" onClick={handleCloseNewGiftForm}>
        {" "}
        x{" "}
      </button>
      <p className="createnew">Create New Gift</p>
      <form className="giftformm" onSubmit={handleSubmitNewGiftForm}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Gift Name
          </label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            type="text"
            name="gift-name"
            placeholder="Quilted Jersey Robe"
            value={giftName}
            onChange={(e) => setGiftName(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="link" class="form-label">
            Link
          </label>
          <input
            id="link"
            class="form-control"
            name="giftLink"
            type="text"
            placeholder="https://huckberry.com/store/wellen/category/p/71976-quilted-jersey-robe?utm_medium=affiliate&utm_source=giftful.com&clickref=1011lwc9H5X4&utm_content=partnerize"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">
            Price
          </label>
          <input
            id="price"
            class="form-control"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">
            Quantity
          </label>
          <input
            id="quantity"
            class="form-control"
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="giftDetails" class="form-label">
            Gift Details
          </label>
          <input
            id="giftDetails"
            class="form-control"
            name="giftDetails"
            type="text"
            placeholder="For example: 'medium size', 'the red one'"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="imagelink" class="form-label">
            Add Image Link
          </label>
          <input
            id="imagelink"
            class="form-control"
            name="imagelink"
            type="text"
            placeholder="Image url.."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
        </div>
        <button className="buttongift">Save Gift</button>
        {error ? error.map((err) => <div>{err}</div>) : null}
      </form>
    </div>
  );
}

export default NewGiftForm;
