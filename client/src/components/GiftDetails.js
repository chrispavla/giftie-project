import { withRouter } from "react-router-dom";
import { useState } from "react";
import AddToWishList from "./AddToWishList";

function GiftDetails(props) {
  const { gifts, history, user, updateGifts, wishlists, match } = props;
  const id = parseInt(match.params.id);
  const gift = gifts.find((gift) => gift.id === id);
  const [isShown, setIsShown] = useState(false);
  // const [rerender, setRerender] = useState(false);

  function handleGoBack() {
    history.goBack();
  }

  function handleAddToWishlist() {
    setIsShown((isShown) => !isShown);
  }

  return (
    <div>
      <button onClick={handleGoBack}>Back to Gift Ideas</button>
      <img src={gift.image_url}></img>
      <h2>{gift.gift_name}</h2>
      <p>{gift.price}</p>
      {gift.link_url ? <a href={gift.link_url}>Buy here</a> : null}
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      {isShown ? (
        <AddToWishList
          updateGifts={updateGifts}
          gift={gift}
          user={user}
          wishlists={wishlists}
          setIsShown={setIsShown}
          isShown={isShown}
        />
      ) : null}
    </div>
  );
}

export default withRouter(GiftDetails);
