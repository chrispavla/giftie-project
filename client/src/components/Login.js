import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser }) {
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

    fetch("/login", {
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
        r.json().then((json) => setError(json.error));
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
    <div class="text-center">
      <h3 className="loginh">Login</h3>
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">
            Username
            <input
              id="form2Example1"
              class="form-control"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">
            Password
            <input
              id="form2Example2"
              class="form-control"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
        </div>
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="form2Example31"
                onClick={handleShowPassword}
              />
              <label class="form-check-label" for="form2Example31">
                Show Password
              </label>
            </div>
          </div>
        </div>
        <button class="buttonlogin" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      {error ? <div>{error}</div> : null}
      <div class="text-center account">
        <p>Don't have an account?</p>
        <a className="signup" href="/signup">
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Login;
