import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Torontorestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/toronto");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const torontorestaurants = data.response;
  return (
    <div className="App">
      <h3>Toronto Restaurants</h3>
          <ul>
         {torontorestaurants.map((torontorestaurants) => (
           <li>{torontorestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Torontorestaurants;