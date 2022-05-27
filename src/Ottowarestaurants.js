import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Ottowarestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/ottowa");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const ottowarestaurants = data.response;
  return (
    <div className="App">
      <h3>Ottowa Restaurants</h3>
          <ul>
         {ottowarestaurants.map((ottowarestaurants) => (
           <li>{ottowarestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Ottowarestaurants;