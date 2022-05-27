import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Miamirestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/miami");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const miamirestaurants = data.response;
  return (
    <div className="App">
      <h3>Miami Restaurants</h3>
          <ul>
         {miamirestaurants.map((miamirestaurants) => (
           <li>{miamirestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Miamirestaurants;