import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import TvShows from "./Components/TvShows";
import People from "./Components/People";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PersonDetails from "./Components/PersonDetails";
import Trailers from "./temp/Trailers";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Seasons from "./temp/Seansons";

function App(){
  return(
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails/>}>
        <Route path="trailer" element={<Trailers/>}/> 
       </Route>


        <Route path="/tv" element={<TvShows/>} />
        <Route path="/tv/details/:id" element={<TvDetails/>}>
        <Route path="trailer" element={<Trailers/>}/> 
       </Route>

        <Route path="/person" element={<People/>} />
        <Route path="/people/details/:id" element={<PersonDetails/>}/>
        <Route path="/person/details/:id" element={<PersonDetails/>}/>


        <Route path="/about" element={<About/>  }/>
        <Route path="/contact" element={<Contact/>  }/>

 
      </Routes>
    </div>
  )
}
export default App;