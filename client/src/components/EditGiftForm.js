import React, { useState } from "react";

function EditGiftForm({ setIsShown, isShown, savedGift }) {
  const [giftName, setGiftName] = useState(savedGift.gift_name);
  const [description, setDescription] = useState(savedGift.description);
  const [price, setPrice] = useState(savedGift.price);
  const [quantity, setQuantity] = useState(savedGift.quantity);
  const [linkUrl, setLinkUrl] = useState(savedGift.link_url);
  const [imageUrl, setImageUrl] = useState(savedGift.image_url);

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
        quantity: quantity,
        link_url: linkUrl,
        image_url: imageUrl,
      }),
    })
      .then((res) => res.json())
      .then((editedGift) => console.log(editedGift));

    setIsShown(false);
  }

  function handleCloseEditGiftForm() {
    setIsShown(false);
  }

  return (
    <div>
      <button className="buttonx" onClick={handleCloseEditGiftForm}>
        {" "}
        x{" "}
      </button>
      <p className="createnew">Edit Gift</p>
      <form className="giftformm" onSubmit={handleSubmitEditGiftForm}>
        <div class="mb-3">
          <label for="gift-name" class="form-label">
            Gift Name
          </label>
          <input
            class="form-control"
            id="gift-name"
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
      </form>
    </div>
  );
}

export default EditGiftForm;
