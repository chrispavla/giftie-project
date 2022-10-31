import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../logo.png";

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
    <nav className="navbar navbar-expand-lg">
      {!user ? (
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="30" height="34"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" exact to="/login">
                Log in
              </NavLink>
              <NavLink className="nav-link" exact to="/signup">
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="30" height="34"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" exact to="/myProfile">
                My Wish Lists
              </NavLink>
              <NavLink className="nav-link" exact to="/gifts">
                Gift Ideas
              </NavLink>
              <NavLink className="nav-link" onClick={handleLogout} exact to="/">
                Logout
              </NavLink>
            </div>
          </div>
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
