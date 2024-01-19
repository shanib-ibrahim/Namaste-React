import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/print_171487-162.jpg?w=1380"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "390778",
      name: "Pulari Restaurant",
      cloudinaryImageId: "ycufdm38buar431iewre",
      costForTwo: "₹250 for two",
      cuisines: ["Seafood", "Chinese", "Indian", "Kerala"],
      avgRating: 4.4,
      sla: {
        deliveryTime: 21,
      },
    },
  },
  {
    info: {
      id: "395039",
      name: "Sree Krishnas Pure Vegetarian",
      cloudinaryImageId: "jxazwjxmfltyhuzzcxo2",
      costForTwo: "₹149 for two",
      cuisines: ["South Indian", "Kerala", "Chinese"],
      avgRating: 4.5,
      sla: {
        deliveryTime: 16,
      },
    },
  },
  {
    info: {
      id: "411529",
      name: "Komalavilas Pure Veg Hotel",
      cloudinaryImageId: "hvmdeh4p1inptsm4nflo",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Kerala", "North Indian"],
      avgRating: 4.4,
      sla: {
        deliveryTime: 19,
      },
    },
  },
  {
    info: {
      id: "199237",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      sla: {
        deliveryTime: 19,
      },
    },
  },
  {
    info: {
      id: "221225",
      name: "Ibaco",
      cloudinaryImageId: "dcys8qphehizrcjz57zc",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      sla: {
        deliveryTime: 17,
      },
    },
  },
  {
    info: {
      id: "604528",
      name: "Thalassery Restaurant",
      cloudinaryImageId: "ohl6mz5wpq2l78zcvfd9",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese"],
      avgRating: 4.1,
      sla: {
        deliveryTime: 25,
      },
    },
  },
  {
    info: {
      id: "250361",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      sla: {
        deliveryTime: 29,
      },
    },
  },
  {
    info: {
      id: "418595",
      name: "A One Hotel",
      cloudinaryImageId: "ccyexp4sbe1cahxs79sx",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Kerala", "Seafood"],
      avgRating: 4.3,

      sla: {
        deliveryTime: 17,
      },
    },
  },
  {
    info: {
      id: "473419",
      name: "Ghazal",
      cloudinaryImageId: "34ba760fd6650015fc80445c4c66bd02",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian", "Arabian", "Biryani"],
      avgRating: 4.1,
      sla: {
        deliveryTime: 26,
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
        <input type="text" />
      </div>
      <div className="res-container">
        {resObj.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
