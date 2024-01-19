import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title" tabIndex="1">
    Namaste React
  </h1>
);

const Header = () => {
  return (
    <div className="main">
      <div className="logo-container">
        <img className="logo" src={require("./public/logo.png")} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="profile"></div>
    </div>
  );
};

const HeadingComponent = () => (
  <div>
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
