import React, { useState, useContext } from "react";
import NewWishListForm from "./NewWishlistForm";
import WishlistList from "./WishlistList";
import { Link, useHistory } from "react-router-dom";
import { WishlistsContext } from "../Context/WishlistsProvider";
import { UserContext } from "../Context/UserProvider";
import {
  Container,
  Icon,
  Popup,
  Modal,
  Form,
  Header,
  Button,
  Image,
} from "semantic-ui-react";

function MyProfile() {
  let [wishlists, setWishlists] = useContext(WishlistsContext);
  let [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  let history = useHistory();

  function handleSubmitUpdateProfile(e) {
    e.preventDefault();

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar_url: avatar,
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        handleUserEdit();
        setOpen(false);
      } else {
        r.json().then((data) => setError(Object.values(data).join()));
      }
    });
  }

  function handleUserDelete(user) {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      fetch(`/users/${user.id}`, {
        method: "DELETE",
      }).then(() => {
        setUser(null);
        history.push("/");
      });
    }
  }

  function handleUserEdit() {
    setPassword(user.password);
    setAvatar(user.avatar_url);
    setUsername(user.username);
  }

  return (
    <Container textAlign="center">
      <Image
        size="tiny"
        avatar
        src={user.avatar_url}
        style={{ marginTop: "25px" }}
      />
      <h1 style={{ marginLeft: "30px" }}>
        {user.username}'s Profile{" "}
        <Modal
          closeIcon
          size="small"
          open={open}
          trigger={
            <Button
              circular
              icon="pencil alternate"
              onClick={() => handleUserEdit()}
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
            content="Edit Profile Information"
            style={{
              backgroundColor: "#f8a27d",
              color: "#ffff",
            }}
          />
          <Modal.Content>
            <Form onSubmit={handleSubmitUpdateProfile}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Profile Image</label>
                <input
                  type="text"
                  name="profileimage"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                ></input>
              </Form.Field>
              <Button
                type="submit"
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
          onClick={() => handleUserDelete(user)}
        />
      </h1>
      <p style={{ marginBottom: "30px" }}>{wishlists.length} Wishlists</p>
      <WishlistList />
    </Container>
  );
}

export default MyProfile;
