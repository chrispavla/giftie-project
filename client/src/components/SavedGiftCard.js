import React from "react";
import { Link } from "react-router-dom";
import GiftImage from "../assets/gift_image.jpg";
import { Card, Icon } from "semantic-ui-react";

function SavedGiftCard({ wishlistSavedGift }) {
  return (
    <Card
      raised
      as={Link}
      to={`/saved_gifts/${wishlistSavedGift.id}`}
      style={{ width: "280px", height: "380px" }}
    >
      {wishlistSavedGift.image_url ? (
        <img
          src={wishlistSavedGift.image_url}
          style={{ width: "100%", height: "70%", objectFit: "cover" }}
        />
      ) : (
        <img
          src={GiftImage}
          style={{ width: "100%", height: "70%", objectFit: "cover" }}
        />
      )}

      <Card.Content>
        <Card.Header>{wishlistSavedGift.gift_name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Card.Description textAlign="left">
          <Icon name="dollar sign" />
          {wishlistSavedGift.price}0
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default SavedGiftCard;
