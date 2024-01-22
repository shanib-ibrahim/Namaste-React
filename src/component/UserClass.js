import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Component - Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shanib-ibrahim");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("child component - Did Mount");
  }

  componentDidUpdate() {
    console.log("child component - Did update");
  }

  componentWillUnmount() {
    console.log("child Component - Will unmount");
  }

  render() {
    console.log("child render");
    const { name, location, html_url, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="profile" />
        <h2>Name: {name}</h2>
        <h3>Loaction : {location}</h3>
        <h4>Contact: {html_url}</h4>
      </div>
    );
  }
}

export default UserClass;
