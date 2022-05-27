import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const SanFranciscorestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/sanfrancisco");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const sanfranciscorestaurants = data.response;
  return (
    <div className="App">
      <h3>San Francisco Restaurants</h3>
          <ul>
         {sanfranciscorestaurants.map((sanfranciscorestaurants) => (
           <li>{sanfranciscorestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default SanFranciscorestaurants;