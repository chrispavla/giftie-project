import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar({ setUser, user }) {
  let history = useHistory();

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setUser(null);
    history.push("/");
  };

  return (
    <nav>
      {!user ? (
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/gifts">
            Gift Ideas
          </NavLink>
          <NavLink exact to="/login">
            Log in
          </NavLink>
          <NavLink exact to="/signup">
            Sign up
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/myProfile">
            My Wish Lists
          </NavLink>
          <NavLink exact to="/gifts">
            Gift Ideas
          </NavLink>
          <NavLink onClick={handleLogout} exact to="/">
            Logout
          </NavLink>
        </div>
      )}

      {/* <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/gifts">
        Gift Ideas
      </NavLink>
      <NavLink exact to="/login">
        Log in
      </NavLink>
      <NavLink exact to="/signup">
        Sign up
      </NavLink>
      <NavLink exact to="/myProfile">
        My Wish Lists
      </NavLink>
      <NavLink exact to="/gifts">
        Gift Ideas
      </NavLink>
      <NavLink onClick={handleLogout} exact to="/">
        Logout
      </NavLink> */}
    </nav>
  );
}

export default NavBar;
