import React from "react";
import { Link } from "react-router-dom";
import GiftImage from "../assets/gift_image.jpg";
import {
  Card,
  Icon,
  Label,
  Dimmer,
  Button,
  Image,
  Item,
} from "semantic-ui-react";

function GiftCard({ gift }) {
  const tagsToDisplay = gift.tags.map((tag) => (
    <Label key={tag.id}>{tag}</Label>
  ));

  return (
    <Card
      raised
      as={Link}
      to={`/gifts/${gift.id}`}
      style={{ width: "280px", height: "480px" }}
    >
      {gift.image_url ? (
        <img
          src={gift.image_url}
          style={{ width: "100%", height: "60%", objectFit: "cover" }}
        />
      ) : (
        <img
          src={GiftImage}
          style={{ width: "100%", height: "60%", objectFit: "cover" }}
        />
      )}

      <Card.Content>
        <Card.Header>{gift.gift_name}</Card.Header>
        <Card.Description>
          <Label.Group color="purple">{tagsToDisplay}</Label.Group>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>
          <Icon name="dollar sign" />
          {gift.price}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default GiftCard;
