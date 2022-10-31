import { useState, useEffect } from "react";
import EditGiftForm from "./EditGiftForm";
import GiftImage from "../gift_image.jpg";
import { useHistory, useParams } from "react-router-dom";

function SavedGiftDetails(handleSavedItemRender) {
  const [isShown, setIsShown] = useState(false);
  const [savedGift, setSavedGift] = useState([]);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    fetch(`/saved_gifts/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setSavedGift(data);
        });
      }
    });
  }, [id]);

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
    history.goBack();
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
            setSavedGift={setSavedGift}
            setIsShown={setIsShown}
            isShown={isShown}
            savedGift={savedGift}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SavedGiftDetails;
