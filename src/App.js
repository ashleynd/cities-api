import React from "react";
import Cities from "./Cities";
import Montrealrestaurants from "./Montrealrestaurants";
import SanFranciscorestaurants from "./SanFranciscorestaurants";
import LosAngelesrestaurants from "./LosAngelesrestaurants";
import Jacksonvillerestaurants from "./Jacksonvillerestaurants";
import Miamirestaurants from "./Miamirestaurants";
import QuebecCityrestaurants from "./QuebecCityrestaurants";
import Torontorestaurants from "./Torontorestaurants";
import Ottowarestaurants from "./Ottowarestaurants";
import Guadalajararestaurants from "./Guadalajararestaurants";
import PuertoVallartarestaurants from "./PuertoVallartarestaurants";
import Culiacanrestaurants from "./Culiacanrestaurants";
import Mazatlanrestaurants from "./Mazatlanrestaurants";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/"
                   element={<Cities />}/>
        </Routes>
        <Routes>
            <Route path="/Montrealrestaurants"
                   element={<Montrealrestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/SanFranciscorestaurants"
                   element={<SanFranciscorestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/LosAngelesrestaurants"
                   element={<LosAngelesrestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/Jacksonvillerestaurants"
                   element={<Jacksonvillerestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/Miamirestaurants"
                   element={<Miamirestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/QuebecCityrestaurants"
                   element={<QuebecCityrestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/Torontorestaurants"
                   element={<Torontorestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/Ottowarestaurants"
                   element={<Ottowarestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/Guadalajararestaurants"
                   element={<Guadalajararestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/PuertoVallartarestaurants"
                   element={<PuertoVallartarestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/Culiacanrestaurants"
                   element={<Culiacanrestaurants />}/>
        </Routes>
        <Routes>
            <Route path="/Mazatlanrestaurants"
                   element={<Mazatlanrestaurants />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
