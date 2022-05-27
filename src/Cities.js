import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import './Cities.css';

const Cities = () => {
  const data = useFetch("https://interview-server-2022.boadler.repl.co/cities");
  // console.log(data)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :</div>
  }
  // const { cities } = data.response;
  const city = data.response;
  return (
    <div className="App">
      <ul>
        <li><Link to="/Montrealrestaurants"><button>{city[4]}</button></Link></li>
        <li><Link to="/SanFranciscorestaurants"><button>{city[1]}</button></Link></li>
        <li><Link to="/LosAngelesrestaurants"><button>{city[1]}</button></Link></li>
        <li><Link to="/Jacksonvillerestaurants"><button>{city[2]}</button></Link></li>
        <li><Link to="/Miamirestaurants"><button>{city[3]}</button></Link></li>
        <li><Link to="/QuebecCityrestaurants"><button>{city[5]}</button></Link></li>
        <li><Link to="/Torontorestaurants"><button>{city[6]}</button></Link></li>
        <li><Link to="/Ottowarestaurants"><button>{city[7]}</button></Link></li>
        <li><Link to="/Guadalajararestaurants"><button>{city[8]}</button></Link></li>
        <li><Link to="/PuertoVallartarestaurants"><button>{city[9]}</button></Link></li>
        <li><Link to="/Culiacanrestaurants"><button>{city[10]}</button></Link></li>
        <li><Link to="/Mazatlanrestaurants"><button>{city[11]}</button></Link></li>
      </ul>
      
    </div>
    
  );
};

export default Cities;
