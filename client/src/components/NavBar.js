import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, Image } from "semantic-ui-react";

function NavBar() {
  let [user, setUser] = useContext(UserContext);

  let history = useHistory();

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setUser(null);
    history.push("/");
  };

  return (
    <Menu pointing secondary>
      <Menu.Item as={Link} to="/">
        <Image size="small" alt="logo" src={logo} />
      </Menu.Item>
      <Menu.Item style={{ marginBottom: "0.35em" }} as={NavLink} exact to="/">
        Home
      </Menu.Item>
      {!user ? (
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/login">
            Log In
          </Menu.Item>
          <Menu.Item as={NavLink} to="/signup">
            Sign up
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <>
          <Menu.Item
            style={{ marginBottom: "0.35em" }}
            as={NavLink}
            to="/myProfile"
          >
            My Wishlists
          </Menu.Item>
          <Menu.Item
            style={{ marginBottom: "0.35em" }}
            as={NavLink}
            to="/gifts"
          >
            Gift Ideas
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to={"/myProfile"}>
              Logged in as {user.username}
            </Menu.Item>
            <Menu.Item as={NavLink} to="/login" onClick={handleLogout}>
              Log Out
            </Menu.Item>
          </Menu.Menu>
        </>
      )}
    </Menu>
  );
}

export default NavBar;
