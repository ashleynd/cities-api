import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Jacksonvillerestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/jacksonville");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const jacksonvillerestaurants = data.response;
  return (
    <div className="App">
      <h3>Jacksonville Restaurants</h3>
          <ul>
         {jacksonvillerestaurants.map((jacksonvillerestaurants) => (
           <li>{jacksonvillerestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Jacksonvillerestaurants;