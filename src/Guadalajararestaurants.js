import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Guadalajararestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/guadalajara");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const guadalajararestaurants = data.response;
  return (
    <div className="App">
      <h3>Guadalajara Restaurants</h3>
          <ul>
         {guadalajararestaurants.map((guadalajararestaurants) => (
           <li>{guadalajararestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Guadalajararestaurants;