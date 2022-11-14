import { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
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
import { Container, Header } from "semantic-ui-react";
import { UserProvider } from "./Context/UserProvider";
import { WishlistsProvider } from "./Context/WishlistsProvider";

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
    <div className="App">
      <UserProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <WishlistsProvider>
            <Route exact path="/gifts">
              <Container textAlign="center">
                <Header as="h1">Gift ideas</Header>
                <Filter
                  setSortBySearch={setSortBySearch}
                  setFilterByOccasion={setFilterByOccasion}
                  setFilterByRecipient={setFilterByRecipient}
                />
              </Container>
              <GiftList gifts={filteredGiftsBySearchBars} />
            </Route>
            <Route exact path="/gifts/:id">
              <GiftDetails updateGifts={updateGifts} />
            </Route>
            <Route exact path="/saved_gifts/:id">
              <SavedGiftDetails />
            </Route>
            <Route exact path="/wish_lists/:id">
              <Wishlist />
            </Route>
            <Route path="/myProfile">
              <MyProfile />
            </Route>
          </WishlistsProvider>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
