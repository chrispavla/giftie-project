import { withRouter } from "react-router-dom";
import { useState } from "react";
import EditGiftForm from "./EditGiftForm";

function SavedGiftDetails(props) {
  const { savedGifts, history, handleSavedItemRender, match } = props;
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
      <button onClick={handleGoBack}>Back to the Wish list</button>
      <img src={savedGift.image_url}></img>
      <h2>{savedGift.gift_name}</h2>
      <p>$ {savedGift.price}</p>
      {savedGift.link_url ? <a href={savedGift.link_url}>Buy here</a> : null}
      <button onClick={handleDeleteGiftFromWishList}>Remove a Gift</button>
      <button onClick={handleShowEditGiftForm}>Edit Gift</button>
      {isShown ? (
        <EditGiftForm
          setIsShown={setIsShown}
          isShown={isShown}
          savedGift={savedGift}
        />
      ) : null}
    </div>
  );
}

export default withRouter(SavedGiftDetails);
