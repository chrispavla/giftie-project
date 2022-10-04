import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import GiftList from "./components/GiftList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import GiftDetails from "./components/GiftDetails";
import Filter from "./components/Filter";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import Wishlist from "./components/Wishlist";

function App() {
  const [gifts, setGifts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [user, setUser] = useState(null);

  let history = useHistory();

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
  }, [user]);

  useEffect(() => {
    fetch("/wish_lists")
      .then((res) => res.json())
      .then((wishlists) => setWishlists(wishlists));
  }, [user]);

  function submitNewWishlist(newWishlistObj) {
    setWishlists([...wishlists, newWishlistObj]);
  }

  function submitNewGift(newGiftObj) {
    setGifts([...gifts, newGiftObj]);
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
            <Filter />
            <GiftList gifts={gifts} />
          </Route>
          <Route exact path="/gifts/:id">
            <GiftDetails gifts={gifts} wishlists={wishlists} />
          </Route>
          <Route exact path="/wish_lists/:id">
            <Wishlist
              wishlists={wishlists}
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
