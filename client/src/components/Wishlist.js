import { withRouter } from "react-router-dom";
import NewGiftForm from "./NewGiftForm";
import SavedGiftList from "./SavedGiftList";
import React, { useState } from "react";

function Wishlist(props) {
  const {
    wishlists,
    savedGifts,
    history,
    submitNewGift,
    match,
    user,
    deleteWishlist,
  } = props;
  const id = parseInt(match.params.id);
  const wishlist = wishlists.find((wishlist) => wishlist.id === id);
  const [isShown, setIsShown] = useState(false);
  // const [rerender, setRerender] = useState(false);

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
    history.push("/myProfile");
    window.location.reload();
  }

  return (
    <div>
      {wishlist.saved_gifts.length === 0 ? (
        <div>
          <div className="buttonslisst">
            <button className="buttonback" onClick={handleGoBack}>
              Back to Wish Lists
            </button>
            <button
              className="buttonback"
              onClick={() => handleDeleteWishList(wishlist)}
            >
              Delete Wish List
            </button>
          </div>
          <h2 className="wishlistitle">{wishlist.title}</h2>
          {wishlist.event_date ? (
            <p className="wishlistitle">{wishlist.event_date}</p>
          ) : null}
          <button className="button" onClick={handleShowNewGiftForm}>
            Add a Gift
          </button>
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
          <div className="buttonslisst">
            <button className="buttonback" onClick={handleGoBack}>
              Back to Wish Lists
            </button>
            <button
              className="buttonback"
              onClick={() => handleDeleteWishList(wishlist)}
            >
              Delete Wish List
            </button>
          </div>
          <h2 className="wishlistitle">{wishlist.title}</h2>
          {wishlist.event_date ? (
            <p className="wishlistitle">{wishlist.event_date}</p>
          ) : null}
          <SavedGiftList wishlistSavedGifts={wishlist.saved_gifts} />
          <button className="button" onClick={handleShowNewGiftForm}>
            Add a Gift
          </button>
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
