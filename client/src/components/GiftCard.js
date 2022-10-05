import React from "react";
import { Link } from "react-router-dom";
import GiftImage from "../gift_image.jpg";

function GiftCard({ gift }) {
  const tagsToDisplay = gift.tags.map((tag) => (
    <div key={tag.id} className="tag">
      {tag}
    </div>
  ));

  return (
    <div>
      <Link className="link" to={`/gifts/${gift.id}`}>
        <h3>{gift.gift_name}</h3>
        {tagsToDisplay}
        <h4>${gift.price}</h4>
        {gift.image_url ? (
          <img src={gift.image_url} />
        ) : (
          <img src={GiftImage} />
        )}
      </Link>
    </div>
  );
}

export default GiftCard;
