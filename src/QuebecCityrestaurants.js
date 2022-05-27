import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const QuebecCityrestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/quebeccity");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const quebeccityrestaurants = data.response;
  return (
    <div className="App">
      <h3>Quebec City Restaurants</h3>
          <ul>
         {quebeccityrestaurants.map((quebeccityrestaurants) => (
           <li>{quebeccityrestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default QuebecCityrestaurants;