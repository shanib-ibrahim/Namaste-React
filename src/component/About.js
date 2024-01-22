import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Component - Constructor");
  }

  componentDidMount() {
    console.log("Parent Component - Did Mount");
  }

  componentDidUpdate() {
    console.log("Parent component - Did update");
  }

  componentWillUnmount() {
    console.log("Parent component - Will unmount");
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste react Web series</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
