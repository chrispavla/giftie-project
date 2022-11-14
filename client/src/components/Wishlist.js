import NewGiftForm from "./NewGiftForm";
import SavedGiftList from "./SavedGiftList";
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { WishlistsContext } from "../Context/WishlistsProvider";
import {
  Container,
  Icon,
  Popup,
  Modal,
  Form,
  Header,
  Button,
  Image,
  Divider,
} from "semantic-ui-react";

function Wishlist({ submitNewGift, deleteWishlist }) {
  const [isShown, setIsShown] = useState(false);
  let [wishlists, setWishlists] = useContext(WishlistsContext);
  let { id } = useParams();
  const [wishlist, setWishlist] = useState([]);
  const [savedGifts, setSavedGifts] = useState([]);
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`/wish_lists/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setWishlist(data);
          setSavedGifts(data.saved_gifts);
        });
      }
    });
  }, [id]);

  function submitNewGift(newGiftObj) {
    setSavedGifts([...savedGifts, newGiftObj]);
  }

  function handleGoBack() {
    history.goBack();
  }

  function deleteWishlist(deletedWishlist) {
    setWishlists(
      wishlists.filter((wishlist) => wishlist.id !== deletedWishlist.id)
    );
  }

  function handleDeleteWishList(deletedWishlist) {
    if (window.confirm("Are you sure you want to delete this wishlist?")) {
      fetch(`/wish_lists/${deletedWishlist.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => deleteWishlist(deletedWishlist));
      history.push("/myProfile");
    }
  }

  function handleSubmitUpdateWishlist(e) {
    e.preventDefault();

    fetch(`/wish_lists/${wishlist.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        note: note,
        event_date: eventDate,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((wishlist) => setWishlist(wishlist));
        handleWishlistEdit();
        setOpen(false);
      } else {
        r.json().then((data) => setError(Object.values(data).join()));
      }
    });
  }

  function handleWishlistEdit() {
    setTitle(wishlist.title);
    setEventDate(wishlist.event_date);
    setNote(wishlist.note);
  }

  return (
    <Container textAlign="center">
      <Button
        floated="left"
        onClick={handleGoBack}
        labelPosition="left"
        icon="left chevron"
        content="Back to Wishlists"
        style={{
          backgroundColor: "#8c4c65",
          color: "#ffff",
        }}
      />
      <br />
      <h2 style={{ marginLeft: "30px" }}>
        {wishlist.title} Wishlist{" "}
        <Modal
          closeIcon
          size="small"
          open={open}
          trigger={
            <Button
              circular
              icon="pencil alternate"
              onClick={() => handleWishlistEdit()}
              style={{
                marginLeft: "10px",
                backgroundColor: "#f8a27d",
                color: "#8c4c65",
              }}
            />
          }
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Header
            icon="user circle"
            content="Edit Wishlist Information"
            style={{
              backgroundColor: "#f8a27d",
              color: "#ffff",
            }}
          />
          <Modal.Content>
            <Form onSubmit={handleSubmitUpdateWishlist}>
              <Form.Field>
                <label>Wishlist Name</label>
                <input
                  type="text"
                  placeholder="Mom's 65th Birthday"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </Form.Field>
              <Form.Field>
                <label>Event Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                ></input>
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Some ideas for birthday"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></input>
              </Form.Field>
              <Button
                type="Submit"
                style={{
                  backgroundColor: "#8c4c65",
                  color: "#ffff",
                }}
              >
                <Icon name="checkmark" /> Update
              </Button>
            </Form>
          </Modal.Content>
          {error
            ? error.map((err) => (
                <div className="errors">
                  <Icon name="warning circle"></Icon>
                  {err}
                </div>
              ))
            : null}
        </Modal>
        <Button
          circular
          icon="trash alternate"
          style={{ marginLeft: "5px", background: "none", color: "#8c4c65" }}
          onClick={() => handleDeleteWishList(wishlist)}
        />
      </h2>
      <p className="wishlistitle">{wishlist.event_date}</p>
      <p className="wishlistitle">{wishlist.note}</p>
      {savedGifts.length > 0 ? (
        <SavedGiftList wishlistSavedGifts={savedGifts} />
      ) : null}
      <NewGiftForm submitNewGift={submitNewGift} wishlist={wishlist} />
    </Container>
  );
}
export default Wishlist;
