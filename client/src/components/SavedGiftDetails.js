import { withRouter } from "react-router-dom";
import { useState } from "react";
import EditGiftForm from "./EditGiftForm";
import GiftImage from "../gift_image.jpg";

function SavedGiftDetails(props) {
  const { savedGifts, setSavedGifts, history, handleSavedItemRender, match } =
    props;
  const id = parseInt(match.params.id);
  const savedGift = savedGifts.find((savedGift) => savedGift.id === id);
  // const [rerender, setRerender] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function handleGoBack() {
    history.goBack();
  }

  function handleDeleteGiftFromWishList() {
    fetch(`/saved_gifts/${savedGift.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(handleSavedItemRender);
    alert("Gift removed from your wishlist!");
    history.push("/myProfile");
  }

  function handleShowEditGiftForm() {
    setIsShown(true);
  }

  return (
    <div>
      <button className="buttonbackk" onClick={handleGoBack}>
        Back to the Wish list
      </button>
      <div class="card mb-3 cardd">
        <div class="row g-0">
          <div class="col-md-4">
            {savedGift.image_url ? (
              <img class="img-fluid rounded-start" src={savedGift.image_url} />
            ) : (
              <img class="img-fluid rounded-start" src={GiftImage} />
            )}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2>{savedGift.gift_name}</h2>
              <p>$ {savedGift.price}</p>
              {savedGift.link_url ? (
                <a className="buyhere" href={savedGift.link_url}>
                  Buy here
                </a>
              ) : null}
              <div className="giftbuttons">
                <button className="editbutton" onClick={handleShowEditGiftForm}>
                  Edit Gift
                </button>
                <button
                  className="removebutton"
                  onClick={handleDeleteGiftFromWishList}
                >
                  Remove a Gift
                </button>
              </div>
            </div>
          </div>
        </div>
        {isShown ? (
          <EditGiftForm
            setSavedGifts={setSavedGifts}
            setIsShown={setIsShown}
            isShown={isShown}
            savedGift={savedGift}
          />
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(SavedGiftDetails);
