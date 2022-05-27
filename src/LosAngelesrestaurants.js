import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const LosAngelesrestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/losangeles");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const losangelesrestaurants = data.response;
  return (
    <div className="App">
      <h3>Los Angeles Restaurants</h3>
          <ul>
         {losangelesrestaurants.map((losangelesrestaurants) => (
           <li>{losangelesrestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default LosAngelesrestaurants;