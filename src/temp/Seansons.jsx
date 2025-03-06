import React from "react";
import { Link } from "react-router-dom";
import noimage from "/NO.jpg"

function Seasons({data, title}){
    //console.log(title);
    return(
        <div className=" ">
        <div className="flex w-full flex-wrap bg-[#1F1E24] px-[3%]">
            {data.map((c, i)=>(
                <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative w-[33vh]  mr-[2%] mb-[2%] key={i} mt-[2%] ml-[2vh] rounded-xl">
                    <img className="w-[100%] h-[40vh] object-cover" src={c.poster_path || c.backdrop_path|| c.profile_path?`https://image.tmdb.org/t/p/w500${c.poster_path || c.backdrop_path|| c.profile_path}`:noimage} alt=""
                    />
                    <h1 className="text-xl text-zinc-400 mt-3 font-bold">
                    {c.name || c.title || c.original_name || c.original_title}
                    </h1>
                    {c.vote_average &&(
                    <div className="absolute rounded-full right-[-8%] bottom-[30%]  text-white flex items-center justify-center w-[5vh] h-[5vh] bg-yellow-600">
                    {(c.vote_average*10).toFixed()}<sub>%</sub>
                    </div>
                    )}

                </Link>
            ))}
        </div>
        </div>
    )
}
export default Seasons;