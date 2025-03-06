import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Components/utils/axios";
import NO from "/NO.jpg"
function Topnavbar(){
    const[query, setquery] =useState("");
    //console.log(query);

    const[searches, setsearches]= useState([]);

    const getSerches = async()=>{
        try{
            const {data} = await axios.get(`/search/multi?query=${query}`);
            //console.log(d);
            setsearches(data.results);
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getSerches();
    }, [query])

    return(
        <div className="">
        <div className="w-full  h-[10vh] relative flex justify-start mx-[18%] items-center">
            <i className="text-zinc-400 text-2xl ri-search-line"></i>
            <input onChange={(e)=>setquery(e.target.value)} value={query}
            className="w-[50%]  text-zinc-200 mx-10 p-5 text-lg outline-none border-none bg-transparent"
            type="text" placeholder="Search anything" />
            
            {query.length>0 &&(
            <i onClick={()=>setquery("")} class="text-zinc-400 text-3xl cursor-pointer ri-close-line "></i>
            )}
            {searches && searches.length > 0 && (
    <div className="absolute w-[60%] z-40 max-h-[50vh] bg-zinc-200 top-[90%] rounded overflow-auto">
        {searches.map((s, i) => (
            <Link to={`/${s.media_type}/details/${s.id}`}
                key={i}
                className="font-semibold text-zinc-600 p-8 flex justify-start items-center border-2 border-zinc-100 w-full"
            >
                {s.poster_path || s.profile_path ? (
                    <img
                        src={s.backdrop_path || s.profile_path?`https://image.tmdb.org/t/p/w500${s.poster_path || s.profile_path}`:NO}
                        alt={s.name || s.title}
                        className="w-12 h-12 mr-4 rounded"
                    />
                ) : null}
                <span>{s.name || s.title || s.original_name || s.original_title}</span>
            </Link>
        ))}
    </div>
)}

        </div>
        </div>
    )
}

export default Topnavbar;