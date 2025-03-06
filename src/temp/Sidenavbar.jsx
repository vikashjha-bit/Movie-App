import React from "react";
import { Link } from "react-router-dom";
function Sidenavbar(){

    return(
        <div className="w-[20%] h-screen border-r-2 border-zinc-400 p-8">
            <h1 className="text-xl text-white font-bold ">
                 <i className=" text-[#6556CD] mr-2 ri-tv-fill"></i>
                 <span cl>SCDDB</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className="text-white font-semibold text-lg mt-7 mb-3">New Feeds</h1>
            
                <Link to={"/trending"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 text-sm">
                <i className=" mr-2 ri-fire-fill"></i>
                Trending
                </Link>
                <Link to={"/popular"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 text-sm">
                <i className=" mr-2 ri-bard-line"></i>
                Popular
                </Link>
                <Link to={"/movie"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 text-sm">
                <i className="mr-2 ri-movie-2-fill"></i>
                Movies
                </Link>
                <Link to={"/tv"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 text-sm">
                <i className="mr-2 ri-tv-2-fill"></i>
                Tv Shows
                </Link>
                <Link to={"/person"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 text-sm">
                <i className="mr-2 ri-team-line"></i>
                People
                </Link>
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400 mt-2"/>
            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className="text-white font-semibold text-lg mt-4 mb-3">Website Information</h1>
            
                <Link to={"/about"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 text-sm">
                <i className="mr-2 ri-information-fill"></i>
                About SCSDB
                </Link>
                <Link to={"/contact"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 text-sm">
                <i className="mr-2 ri-phone-fill"></i>
                Contact Us
                </Link>
            </nav>
        </div>
    )
}
export default Sidenavbar;