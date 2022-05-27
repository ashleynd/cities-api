import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Culiacanrestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/restaurants/culiacan");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const culiacanrestaurants = data.response;
  return (
    <div className="App">
      <h3>Culiacan Restaurants</h3>
          <ul>
         {culiacanrestaurants.map((culiacanrestaurants) => (
           <li>{culiacanrestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Culiacanrestaurants;