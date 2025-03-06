import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimage from "/NO.jpg"
function HorizontalCards({data}){
    return (    
            <div className="w-[100%] flex overflow-x-auto p-3">
            {data.length>0? data.map((d, i)=>(
                <Link to={`/${d.media_type || d.title}/details/${d.id}`} key={i} className="min-w-[18%] h-[40vh] bg-zinc-900 mr-6">
                    <img className="w-full h-[55%] object-cover" src={d.poster_path || d.profile_path?`https://image.tmdb.org/t/p/w500${d.poster_path || d.profile_path}`:noimage} alt="" />
                    <div className="text-white h-[55%] overflow-y-auto">
                        <h1 className="mt-3 text-lg ml-2 font-semibold">
                            {d.name || d.title || d.original_name || d.original_title}
                        </h1>
                        <p className="mt-1 p-1 text-sm mb-6 overflow-hidden text-zinc-400 px-[3px]">
                        {d.overview ? d.overview.slice(0, 80) + "..." : "No description available"}
                            <span className="text-blue-400">more</span>
                        </p>
                    </div>
                </Link>

 
            )):<h1 className="text-3xl text-white text-center ">Nothing to show</h1>}
            </div>
    )
}
export default HorizontalCards;