import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: username,
      password: password,
    };

    setIsLoading(true);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/");
      } else {
        r.json().then((data) => setError(Object.values(data).join()));
      }
    });
  }

  function handleShowPassword() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            id="myInput"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <input type="checkbox" onClick={handleShowPassword} />
        <label>Show Password</label>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </form>
      {error ? <div>{error}</div> : null}
      <p>Already registered?</p>
      <a href="/login">Log in</a>
    </div>
  );
}

export default Signup;
