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
      <button className="buttonbackk" onClick={handleGoBack}>
        Back to Gift Ideas
      </button>
      <div class="card mb-3 cardd">
        <div class="row g-0">
          <div class="col-md-4">
            <img class="img-fluid rounded-start" src={gift.image_url}></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2>{gift.gift_name}</h2>
              <p>$ {gift.price}</p>
              {gift.link_url ? (
                <a className="buyhere" href={gift.link_url}>
                  Buy here
                </a>
              ) : null}
              <div className="giftbuttons">
                <button className="editbutton" onClick={handleAddToWishlist}>
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default withRouter(GiftDetails);
