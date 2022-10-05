import { withRouter } from "react-router-dom";
import NewGiftForm from "./NewGiftForm";
import GiftList from "./GiftList";
import React, { useState } from "react";

function Wishlist(props) {
  const { wishlists, history, submitNewGift, match, user, deleteWishlist } =
    props;
  const id = parseInt(match.params.id);
  const wishlist = wishlists.find((wishlist) => wishlist.id === id);
  const [isShown, setIsShown] = useState(false);

  function handleShowNewGiftForm() {
    setIsShown(true);
  }

  function handleGoBack() {
    history.goBack();
  }

  function handleDeleteWishList(deletedWishlist) {
    fetch(`/wish_lists/${deletedWishlist.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedWishlist) => deleteWishlist(deletedWishlist));
    history.push("/");
  }

  return (
    <div>
      {wishlist.gifts.length === 0 ? (
        <div>
          <button onClick={handleGoBack}>Back to Wish Lists</button>
          <h2>{wishlist.title}</h2>
          {wishlist.event_date ? <p>{wishlist.event_date}</p> : null}
          <button onClick={() => handleDeleteWishList(wishlist)}>
            Delete Wish List
          </button>
          <button onClick={handleShowNewGiftForm}>Add a Gift</button>
          {isShown ? (
            <NewGiftForm
              user={user}
              wishlist={wishlist}
              setIsShown={setIsShown}
              submitNewGift={submitNewGift}
            />
          ) : null}
        </div>
      ) : (
        <div>
          <button onClick={handleGoBack}>Back to Wish Lists</button>
          <h2>{wishlist.title}</h2>
          {wishlist.event_date ? <p>{wishlist.event_date}</p> : null}
          <GiftList gifts={wishlist.gifts} />
          <button onClick={() => handleDeleteWishList(wishlist)}>
            Delete Wish List
          </button>
          <button onClick={handleShowNewGiftForm}>Add a Gift</button>
          {isShown ? (
            <NewGiftForm
              user={user}
              submitNewGift={submitNewGift}
              wishlist={wishlist}
              setIsShown={setIsShown}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
export default withRouter(Wishlist);