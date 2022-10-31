import { useState, useEffect, useContext } from "react";
import { WishlistsProvider } from "./Context/WishlistsProvider";
import { UserProvider } from "./Context/UserProvider";
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
  const [sortBy, setSortBy] = useState("");
  const [filterOccasion, setFilterOccasion] = useState("");
  const [filterRecipient, setFilterRecipient] = useState("");

  useEffect(() => {
    fetch("/gifts")
      .then((res) => res.json())
      .then((giftsData) => setGifts(giftsData));
  }, []);

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

  return (
    <UserProvider>
      <WishlistsProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gifts">
              <h1 className="giftideas">Gift ideas</h1>
              <Filter
                setSortBySearch={setSortBySearch}
                setFilterByOccasion={setFilterByOccasion}
                setFilterByRecipient={setFilterByRecipient}
              />
              <GiftList gifts={filteredGiftsBySearchBars} />
            </Route>
            <Route exact path="/gifts/:id">
              <GiftDetails updateGifts={updateGifts} />
            </Route>
            <Route path="/saved_gifts/:id">
              <SavedGiftDetails />
            </Route>
            <Route path="/wish_lists/:id">
              <Wishlist />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/myProfile">
              <MyProfile />
            </Route>
          </Switch>
        </div>
      </WishlistsProvider>
    </UserProvider>
  );
}

export default App;
