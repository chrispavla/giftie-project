import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GiftList from "./components/GiftList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import GiftDetails from "./components/GiftDetails";
import Filter from "./components/Filter";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import Wishlist from "./components/Wishlist";
import SavedGiftDetails from "./components/SavedGiftDetails";

function App() {
  const [gifts, setGifts] = useState([]);
  const [savedGifts, setSavedGifts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [user, setUser] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [filterOccasion, setFilterOccasion] = useState("");
  const [filterRecipient, setFilterRecipient] = useState("");
  // const [rerender, setRerender] = useState(false);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/gifts")
      .then((res) => res.json())
      .then((giftsData) => setGifts(giftsData));
  }, []);

  useEffect(() => {
    fetch("/saved_gifts")
      .then((res) => res.json())
      .then((savedGiftsData) => setSavedGifts(savedGiftsData));
  }, []);

  useEffect(() => {
    fetch("/wish_lists")
      .then((res) => res.json())
      .then((wishlists) => setWishlists(wishlists));
  }, [user]);

  function setSortBySearch(value) {
    setSortBy(value);
  }

  function setFilterByOccasion(value) {
    setFilterOccasion(value);
  }

  function setFilterByRecipient(value) {
    setFilterRecipient(value);
  }

  const filteredGiftsBySearchBars = gifts
    .sort((a, b) => {
      if (sortBy === "") return gifts;
      else if (sortBy === "lowest") return a.price - b.price;
      else if (sortBy === "highest") return b.price - a.price;
    })
    .filter((gift) => {
      if (filterOccasion === "") {
        return true;
      } else return gift.tags.includes(filterOccasion.toLowerCase());
    })
    .filter((gift) => {
      if (filterRecipient === "") {
        return true;
      } else return gift.tags.includes(filterRecipient.toLowerCase());
    });

  function handleSavedItemRender() {
    fetch("/saved_gifts")
      .then((res) => res.json())
      .then(setSavedGifts);
  }

  function updateGifts(updatedGift) {
    let newGifts = gifts.map((gift) => {
      if (gift.id === updatedGift.id) {
        return updatedGift;
      } else {
        return gift;
      }
    });
    setGifts(newGifts);
  }

  function submitNewWishlist(newWishlistObj) {
    setWishlists([...wishlists, newWishlistObj]);
  }

  function submitNewGift(newGiftObj) {
    setSavedGifts([...savedGifts, newGiftObj]);
  }

  function deleteWishlist(deletedWishlist) {
    setWishlists(
      wishlists.filter((wishlist) => wishlist.id !== deletedWishlist.id)
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/gifts">
            <h1>Gift ideas</h1>
            <Filter
              setSortBySearch={setSortBySearch}
              setFilterByOccasion={setFilterByOccasion}
              setFilterByRecipient={setFilterByRecipient}
            />
            <GiftList gifts={filteredGiftsBySearchBars} />
          </Route>
          <Route exact path="/gifts/:id">
            <GiftDetails
              gifts={gifts}
              user={user}
              updateGifts={updateGifts}
              wishlists={wishlists}
            />
          </Route>
          <Route exact path="/saved_gifts/:id">
            <SavedGiftDetails
              savedGifts={savedGifts}
              handleSavedItemRender={handleSavedItemRender}
            />
          </Route>
          <Route exact path="/wish_lists/:id">
            <Wishlist
              wishlists={wishlists}
              savedGifts={savedGifts}
              user={user}
              submitNewGift={submitNewGift}
              deleteWishlist={deleteWishlist}
            />
          </Route>
          <Route exact path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/myProfile">
            <MyProfile
              wishlists={wishlists}
              submitNewWishlist={submitNewWishlist}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
