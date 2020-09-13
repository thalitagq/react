import React from "react";

import Feed from "./Feed"
import '../App.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

  }

  render() {
    return (
      <div>
        
        <div className="feed-container">
          <Feed />
        </div>
      </div>
    );
  }
}

export default Home;
