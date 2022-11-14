import React, { useState, useEffect } from "react";

// create the context
const WishlistsContext = React.createContext();

// create a provider component
function WishlistsProvider({ children }) {
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    fetch("/wish_lists").then((r) => {
      if (r.ok) {
        r.json().then((data) => setWishlists(data));
      }
    });
  }, []);

  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return (
    <WishlistsContext.Provider value={[wishlists, setWishlists]}>
      {children}
    </WishlistsContext.Provider>
  );
}

export { WishlistsContext, WishlistsProvider };
