import React, { useEffect, useState } from "react";
import Sidenavbar from "../temp/Sidenavbar";
import Topnavbar from "../temp/Topnavbar";
import Header from "../temp/Header";
import axios from "../Components/utils/axios"
import HorizontalCards from "../temp/HorizontalCards";
import Dropdown from "../temp/Dropdown";
import Loader from "./Loader";
function Home(){
    document.title ="SCSDB | Homepage"
    const[wallpaper, setwallpaper] = useState(null);
    const[trending, settrending] = useState(null)
    const[category, setcategory] = useState("all")

    const getHeaderWallpaper = async ()=>{
        try{
           const {data} = await axios.get('/trending/all/day');
           let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
           setwallpaper(randomdata);
        }catch(error){
            console.log(error);
        }   
    };

    const getTrending = async ()=>{
        try{
           const {data} = await axios.get(`/trending/${category}/day`);
           settrending(data.results); 
        }catch(error){
            console.log(error);
        }
    }
    //console.log(wallpaper);
    useEffect(()=>{
        getTrending();
        !wallpaper && getHeaderWallpaper();
    },[category])
    //console.log(trending)
    return wallpaper && trending?(
            <div className="w-full h-full flex overflow-x-hidden overflow-y-auto">
                <Sidenavbar/>
                <div className="w-[80%] h-full ">
                <Topnavbar/>
                <Header data ={wallpaper}/>

                <div className=" flex  justify-between items-center px-5 my-5">
                <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
                  <Dropdown title="filter" options={["tv", "movie","all"]} fnc= {(e)=>setcategory(e.target.value)}/>
               </div>
                <HorizontalCards data={trending}/>  
                </div>
            </div>
    ):(
        <h1><Loader/></h1>
    );
}
export default Home;