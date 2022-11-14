import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Icon,
  Label,
  Dimmer,
  Button,
  Image,
  Item,
} from "semantic-ui-react";

function WishlistCard({ wishlist }) {
  const [wishlistCard, setWishlistCard] = useState(null);

  useEffect(() => {
    fetch(`/wish_lists/${wishlist.id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setWishlistCard(data);
        });
      }
    });
  }, []);

  return (
    <Card raised as={Link} to={`/wish_lists/${wishlist.id}`}>
      {wishlistCard ? (
        <>
          <Card.Content>
            <Card.Header>{wishlistCard.title}</Card.Header>
            <Card.Meta>{wishlistCard.event_date}</Card.Meta>
            <Card.Description>{wishlistCard.note}</Card.Description>
          </Card.Content>
          <Card.Content
            extra
            style={{
              color: "#8c4c65",
            }}
          >
            <Icon name="gift" />
            {wishlistCard.saved_gifts.length} gifts
          </Card.Content>
        </>
      ) : null}
    </Card>
  );
}

export default WishlistCard;
