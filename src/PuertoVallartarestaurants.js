import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const PuertoVallartarestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/puertovallarta");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const puertovallartarestaurants = data.response;
  return (
    <div className="App">
      <h3>Puerto Vallarta Restaurants</h3>
          <ul>
         {puertovallartarestaurants.map((puertovallartarestaurants) => (
           <li>{puertovallartarestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default PuertoVallartarestaurants;