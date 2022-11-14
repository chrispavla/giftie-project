import { useState, useEffect } from "react";
import AddToWishList from "./AddToWishList";
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

function GiftDetails({ updateGifts, wishlists }) {
  const [isShown, setIsShown] = useState(false);
  const [gift, setGift] = useState([]);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    fetch(`/gifts/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setGift(data);
        });
      }
    });
  }, [id]);

  function handleGoBack() {
    history.goBack();
  }

  function handleAddToWishlist() {
    setIsShown((isShown) => !isShown);
  }

  return (
    <Container>
      <div>
        <Button onClick={handleGoBack}>Back to Gift Ideas</Button>
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
          <Item.Image src={gift.image_url} />
          <Item.Content>
            <Item.Header>{gift.gift_name}</Item.Header>
            <Item.Meta>
              <span className="price">${gift.price}</span>
            </Item.Meta>
            <Item.Extra>
              <Button compact floated="right" onClick={handleAddToWishlist}>
                <Icon name="add" />
                Add to Wishlist
              </Button>
              <Label as="a" href={gift.link_url}>
                Buy here
              </Label>
              {isShown ? (
                <AddToWishList
                  updateGifts={updateGifts}
                  gift={gift}
                  wishlists={wishlists}
                  setIsShown={setIsShown}
                  isShown={isShown}
                />
              ) : null}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default GiftDetails;
