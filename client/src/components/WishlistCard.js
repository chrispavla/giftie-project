import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="wishcards">
      <Link className="link" to={`/wish_lists/${wishlist.id}`}>
        {wishlistCard ? (
          <div>
            <h3>{wishlistCard.title}</h3>
            <p>{wishlistCard.saved_gifts.length} gifts</p>
          </div>
        ) : null}
      </Link>
    </div>
  );
}

export default WishlistCard;
