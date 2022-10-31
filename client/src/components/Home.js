import * as React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import biglogo from "../biglogo.png";

function Home() {
  let [user, setUser] = useContext(UserContext);

  return (
    <div className="home">
      <div className="ldiv">
        <img className="logo" src={biglogo}></img>
      </div>
      <div className="welcome">
        {!user ? (
          <div>
            <h1 className="welcomegiftie">Welcome to Giftie</h1>
            <p>Struggle to know what to buy people when a present is needed?</p>
            <p>
              Often think of things that would be perfect for people when you
              are in random places, at random times?
            </p>
            <p>
              So – why not capture this information and have it accessible to
              you when you want to buy that special person a gift?
            </p>
            <p>
              Create as many wish lists as you like, add all the gifts you want
              Easily add gifts from websites and shopping apps or create a
              custom gift
            </p>
            <a className="wishlisting" href="/login">
              Start Wishlisting!
            </a>
          </div>
        ) : (
          <div>
            <h1 className="welcomegiftie">
              Welcome to Giftie, {user.username}!
            </h1>
            <p>Struggle to know what to buy people when a present is needed?</p>
            <p>
              Often think of things that would be perfect for people when you
              are in random places, at random times?
            </p>
            <p>
              So – why not capture this information and have it accessible to
              you when you want to buy that special person a gift?
            </p>
            <p>
              Create as many wish lists as you like, add all the gifts you want
              Easily add gifts from websites and shopping apps or create a
              custom gift
            </p>
            <a className="wishlisting" href="/myProfile">
              Start Wishlisting!
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
