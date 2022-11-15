import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon,
} from "semantic-ui-react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  let [user, setUser] = useContext(UserContext);

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
        r.json().then((error) => setError(error.errors));
      }
    });
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center" style={{ color: "#8c4c65" }}>
          Signup
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Input>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Input>

            <Button
              style={{ backgroundColor: "#8c4c65", color: "#ffff" }}
              fluid
              size="large"
            >
              {isLoading ? <Icon loading name="spinner" /> : "Sign up"}
            </Button>
            {error
              ? error.map((err) => (
                  <div className="errors">
                    <Icon name="warning circle"></Icon>
                    {err}
                  </div>
                ))
              : null}
          </Segment>
        </Form>
        <Message>
          Already registered?{" "}
          <a style={{ color: "#8c4c65" }} href="/login">
            Log in
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Signup;
