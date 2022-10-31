import NewGiftForm from "./NewGiftForm";
import SavedGiftList from "./SavedGiftList";
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { WishlistsContext } from "../Context/WishlistsProvider";

function Wishlist({ submitNewGift, deleteWishlist }) {
  const [isShown, setIsShown] = useState(false);
  let [wishlists, setWishlists] = useContext(WishlistsContext);
  let { id } = useParams();
  const [wishlist, setWishlist] = useState([]);
  const [savedGifts, setSavedGifts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch(`/wish_lists/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setWishlist(data);
          setSavedGifts(data.saved_gifts);
        });
      }
    });
  }, [id]);

  function submitNewGift(newGiftObj) {
    setSavedGifts([...savedGifts, newGiftObj]);
  }

  function handleShowNewGiftForm() {
    setIsShown(true);
  }

  function handleGoBack() {
    history.goBack();
  }

  function deleteWishlist(deletedWishlist) {
    setWishlists(
      wishlists.filter((wishlist) => wishlist.id !== deletedWishlist.id)
    );
  }

  function handleDeleteWishList(deletedWishlist) {
    fetch(`/wish_lists/${deletedWishlist.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => deleteWishlist(deletedWishlist));
    history.push("/myProfile");
  }

  return (
    <div>
      {wishlist.length === 0 ? (
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
          {savedGifts.length > 0 ? (
            <SavedGiftList wishlistSavedGifts={savedGifts} />
          ) : null}
          <button className="button" onClick={handleShowNewGiftForm}>
            Add a Gift
          </button>
          {isShown ? (
            <NewGiftForm
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
export default Wishlist;
