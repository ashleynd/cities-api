import React from "react";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Montrealrestaurants = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/montrealrestaurants/Montreal");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  const montrealrestaurants = data.response;
  return (
    <div className="App">
      <h3>Montreal Restaurants</h3>
          <ul>
         {montrealrestaurants.map((montrealrestaurants) => (
           <li>{montrealrestaurants}</li>
         ))}
          </ul>
        </div>
    
  );
};

export default Montrealrestaurants;

