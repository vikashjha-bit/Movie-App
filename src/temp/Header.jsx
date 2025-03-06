import React from "react";
import { Link } from "react-router-dom";

function Header({data}){
    return(
        <div className="w-[100%] h-[60vh]  rounded flex flex-col justify-end items-start p-[3%]"
        style={{background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), 
            url(https://image.tmdb.org/t/p/w500${data.poster_path || data.profile_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
                <h1 className="w-[70%] text-5xl font-black text-zinc-300">{data.name || data.title || data.original_name || data.original_title}</h1>
                <p className="w-[70%] mt-3 mb-2 text-sm text-zinc-600 hover:text-white">{data.overview.slice(0,200)}...
                    <Link to={`/${data.media_type || title}/details/${data.id}`} className="text-blue-400">more</Link></p>
                <p className="text-white">
                    <i className="text-zinc-400 ri-megaphone-fill"></i>{""}
                    {data.release_date ||"No Information"}
                    <i className="ml-5 text-zinc-400 ri-album-fill "></i>
                    {data.media_type.toUpperCase()}
                </p>
                <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="px-3 py-2 bg-green-500 rounded-md mt-3 text-zinc-300 text-sm">Watch Trailer</Link>
            </div>
    )   
}
export default Header;