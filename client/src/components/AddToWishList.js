import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { WishlistsContext } from "../Context/WishlistsProvider";
import { Dropdown, Button } from "semantic-ui-react";

function AddToWishList({ gift, isShown, setIsShown }) {
  const [foundWishlist, setFoundWishlist] = useState([]);
  const [details, setDetails] = useState([null]);
  let [user, setUser] = useContext(UserContext);
  let [wishlists, setWishlists] = useContext(WishlistsContext);

  useEffect(() => {
    fetch(`/gifts/${gift.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  function handleChangeWishlists(e, data) {
    let foundWishlist = wishlists.find(
      (wishlist) => wishlist.title === data.value
    );
    setFoundWishlist(foundWishlist);
  }

  function handleSaveGiftToSelectedWishlist() {
    fetch("/saved_gifts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gift_name: details.gift_name,
        description: details.description,
        tags: details.tags,
        price: details.price,
        quantity: details.quantity,
        link_url: details.link_url,
        image_url: details.image_url,
        user_id: user.id,
        wish_list_id: foundWishlist.id,
      }),
    })
      .then((res) => res.json())
      .then((gift) => console.log(gift));
    alert("Gift saved to your wishlist!");
    setIsShown(!isShown);
  }

  const selections = wishlists.map((wishlist) => ({
    key: wishlist.id,
    text: wishlist.title,
    value: wishlist.title,
  }));

  return (
    <div>
      <Dropdown
        style={{ marginTop: "20px" }}
        button
        onChange={(e, data) => handleChangeWishlists(e, data)}
        placeholder="Select Wishlist"
        selection
        options={selections}
      />
      <Button onClick={handleSaveGiftToSelectedWishlist}>Save Gift</Button>
    </div>
  );
}

export default AddToWishList;
