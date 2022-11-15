import { useState, useEffect } from "react";
import EditGiftForm from "./EditGiftForm";
import GiftImage from "../assets/gift_image.jpg";
import { useHistory, useParams } from "react-router-dom";
import { Label, Button, Item, Container, Divider } from "semantic-ui-react";

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

  return (
    <Container>
      <div>
        <Button
          labelPosition="left"
          icon="left chevron"
          content="Back to Wishlist"
          style={{
            backgroundColor: "#8c4c65",
            color: "#ffff",
            marginTop: "20px",
          }}
          onClick={handleGoBack}
        ></Button>
      </div>
      <Divider />
      <br />
      <Item.Group divided>
        <Item
          style={{
            width: "60%",
            height: "auto",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {savedGift.image_url ? (
            <Item.Image src={savedGift.image_url} />
          ) : (
            <Item.Image src={GiftImage} />
          )}
          <Item.Content>
            <Item.Header>
              {savedGift.gift_name}{" "}
              <EditGiftForm
                setSavedGift={setSavedGift}
                setIsShown={setIsShown}
                isShown={isShown}
                savedGift={savedGift}
              />
              <Button
                circular
                icon="trash alternate"
                onClick={handleDeleteGiftFromWishList}
                style={{
                  marginLeft: "5px",
                  background: "none",
                  color: "#8c4c65",
                }}
              />
            </Item.Header>
            <Item.Description>
              <p>{savedGift.description}</p>
            </Item.Description>
            <Item.Meta>
              <span>${savedGift.price}0</span>
            </Item.Meta>
            {savedGift.link_url ? (
              <Item.Extra>
                <Label
                  as="a"
                  href={savedGift.link_url}
                  style={{
                    backgroundColor: "#f8a27d",
                  }}
                >
                  Buy here
                </Label>
              </Item.Extra>
            ) : null}
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default SavedGiftDetails;
