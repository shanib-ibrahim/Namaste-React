import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8744775&lng=75.37036619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards.filter(
      (card) => card.card.card.id === "restaurant_grid_listing"
    );
    setListOfRestaurant(
      restaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      restaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterListOFRestaurant = (restaurants) =>
    restaurants.filter((res) => res.info.avgRating >= 4.2);

  //conditional rendering

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks like you're offline!! Please check the internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border border-solid -border-black"
            value={searchText}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter the restaurant card and update the UI
              const filteredRestaurant = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              filteredRestaurant.length !== 0 &&
                setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search{" "}
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="filter-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant =
                filterListOFRestaurant(listOfRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((resData) => (
          <Link to={`/restaurants/${resData.info.id}`}>
            <RestaurantCard key={resData.info.id} resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
