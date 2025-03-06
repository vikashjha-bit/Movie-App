import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "../temp/HorizontalCards";
import { asyncloadperson, removeperson } from "../stores/actions/personaction";
import Dropdown from "../temp/Dropdown";

function PersonDetails(){
    
     const{pathname} =useLocation()
        const navigate = useNavigate()
        const {id} = useParams();
        const dispatch = useDispatch();
        const{info} = useSelector((state)=>state.person)
        const[category, setcategory] =useState("movie")
        console.log(info)
        useEffect(() => {
            //console.log("Dispatching asyncloadperson for ID:", id);  // Debugging Log
            dispatch(asyncloadperson(id));
        
            return () => {
                //console.log("Removing person details");  // Debugging Log
                dispatch(removeperson());
            };
        }, [id, dispatch]);
        
    return info?
        <div className="px-[10%] w-screen min-h-[230vh] bg-[#1F1E24]">
            {/* part-1 navigation*/}
             <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl">
                        <Link onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ">
                        </Link>
            </nav>
            <div className="w-full flex ">
                 {/* par2 poster and Details */}
                 <div className="w-[29%] ">
                 <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
                 src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path ||info.detail.poster_path}`} alt="" />
                <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500"/>
                {/* social media links */}
                    <div className="text-2xl text-white flex gap-5 cursor-pointer">
                        <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
                        <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i class="ri-facebook-circle-fill"></i></a>
                        <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i class="ri-instagram-line"></i></a>
                        <a target="_blank" href={`https://x.com/${info.externalid.twitter_id}`}><i class="ri-twitter-x-line"></i></a>

                    </div>

                    {/* personal information */}
                    <h1 className="text-2xl text-zinc-400 font-semibold my-2">Personal Info</h1>
                    
                    <h1 className="text-lg text-zinc-400 font-semibold  mt-4">Known for</h1>
                    <h5 className="text-zinc-400 text-sm">{info.detail.known_for_department}</h5>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-1">Gender</h1>
                    <h5 className="text-zinc-400 text-sm">{info.detail.gender===2?"Male":"Female"}</h5>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-1">Birthday</h1>
                    <h5 className="text-zinc-400 text-sm">{info.detail.birthday}</h5>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-1">Birthday</h1>
                    <h5 className="text-zinc-400 text-sm">{info.detail.birthday}</h5>

                    <h1 className="text-lg text-zinc-400 font-semibold mt-1">Deathday</h1>
                    <h5 className="text-zinc-400 text-sm">{info.detail.deathday?info.detail.deathday:"still alive"}</h5>

                    <h1 className="text-lg text-zinc-400 font-semibold  mt-4">place of borth</h1>
                    <h5 className="text-zinc-400 text-sm">{info.detail.place_of_birth}</h5>

                    <h1 className="text-lg text-zinc-400 font-semibold  mt-4">Also known as</h1>
                    <h5 className="text-zinc-400 text-xs hover:text-zinc-300">{info.detail.also_known_as}</h5>



                 </div>

                 {/* part3 right details and information */}

                <div className="w-[80%] ml-[5%]">
                <h1 className="text-6xl text-zinc-400 font-black my-5">{info.detail.name}</h1>  
                   <h1 className="text-xl text-zinc-400 font-semibold  mt-2">Biography</h1>
                   <p className="text-sm leading-2 hover:text-zinc-600 hover:italic mt-3">{info.detail.biography}</p>

                   <h1 className="text-lg mt-5 text-zinc-400 font-semibold">Works In</h1>
                   <HorizontalCards data={info.combinedCredits.cast}/>

                   <div className="w-full flex justify-between h-[10vh] items-center">
                    <h1 className="text-xl mt-5 text-zinc-400 font-semibold">Acting</h1>

                    <Dropdown title="category" options={["tv", "movie"]} fun={(e)=>setcategory(e.target.value)}/>
                   </div>

                   <div className="list-disc text-zinc-400 w-full h-[55vh] mt-5 overflow-x-hidden overflow-y-auto shadow-[rgba(255,255,255,.2)] border-2 border-zinc-700 p-5">
                        {info[category+"Credits"].cast.map((c, i)=>(
                            <li  key={i} className="hover:text-white p-5 rounded hover-bg-[#19191d] duration-300 cursor-pointer ">
                                <Link  to={`/${category}/details/${c.id}`}>
                                    <span>{c.name || c.title || c.original_name || c.original_title}</span>
                                    <span className="block ml-5">{c.character && `character name:${c.character}`}</span>
                                </Link>
                               
                            </li>
                        ))}
                   </div>
                </div>

            </div>
           
        </div> :<Loader/>
    
}
export default PersonDetails;;
