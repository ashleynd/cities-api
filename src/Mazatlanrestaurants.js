import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Mazatlanrestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/mazatlan");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const mazatlanrestaurants = data.response;
  return (
    <div className="App">
      <h3>Mazatlan Restaurants</h3>
          <ul>
         {mazatlanrestaurants.map((mazatlanrestaurants) => (
           <li>{mazatlanrestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Mazatlanrestaurants;