import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import {
  Container,
  Header,
  Button,
  Segment,
  Grid,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import giftpicture from "../assets/giftpicture.png";

function Home() {
  let [user, setUser] = useContext(UserContext);

  return (
    <div className="background">
      <Container textAlign="center">
        <Header
          as="h1"
          content="Welcome to Giftie"
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em",
          }}
        />
        <Header
          as="h2"
          content="Your personal gifts planner"
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
      </Container>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Often think of gifts that would be perfect for people when you
                are in random places, at random times?
              </Header>
              <p style={{ fontSize: "1.33em", marginTop: "30px" }}>
                Capture and have it accessible to you when you want to buy that
                special person a gift!
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image size="small" src={giftpicture} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <p style={{ fontSize: "1.33em", marginTop: "30px" }}>
                Create as many wishlists as you like, easily add gifts from
                websites or create custom gifts
              </p>
              {!user ? (
                <Button
                  as={Link}
                  to="/login"
                  size="huge"
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#8c4c65",
                    color: "#ffff",
                  }}
                >
                  Start Wishlisting
                </Button>
              ) : (
                <Button
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#8c4c65",
                    color: "#ffff",
                  }}
                  as={Link}
                  to="/myProfile"
                  size="huge"
                >
                  Start Wishlisting
                </Button>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default Home;
