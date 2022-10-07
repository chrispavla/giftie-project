import React from "react";
import { Link } from "react-router-dom";
import GiftImage from "../gift_image.jpg";

function GiftCard({ gift }) {
  const tagsToDisplay = gift.tags.map((tag) => (
    <div key={tag.id} className="tag card-text">
      {tag}
    </div>
  ));

  return (
    <div class="col">
      <div class="card h-100">
        <Link className="link" to={`/gifts/${gift.id}`}>
          {gift.image_url ? (
            <img class="card-img-top" src={gift.image_url} />
          ) : (
            <img class="card-img-top" src={GiftImage} />
          )}
        </Link>
        <div class="card-body">
          <h3 class="card-title">{gift.gift_name}</h3>
          {tagsToDisplay}
        </div>
        <div class="card-footer">
          <p>${gift.price}</p>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
