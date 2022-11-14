import { useState, useEffect } from "react";
import EditGiftForm from "./EditGiftForm";
import GiftImage from "../assets/gift_image.jpg";
import { useHistory, useParams } from "react-router-dom";
import {
  Icon,
  Label,
  Button,
  Image,
  Item,
  Dropdown,
  Container,
  Divider,
} from "semantic-ui-react";

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
    <Container>
      <div>
        <Button className="buttonbackk" onClick={handleGoBack}>
          Back to Wishlist
        </Button>
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
                style={{ marginLeft: "5px", background: "none" }}
                onClick={handleDeleteGiftFromWishList}
              />
            </Item.Header>
            <Item.Description>
              <p>{savedGift.description}</p>
            </Item.Description>
            <Item.Meta>
              <span className="price">${savedGift.price}</span>
            </Item.Meta>
            <Item.Extra>
              <Label as="a" href={savedGift.link_url}>
                Buy here
              </Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default SavedGiftDetails;
