import React from "react";
import Post from "./Post";
import Container from "@material-ui/core/Container";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Post />
      </Container>
    );
  }
}

export default Feed;
