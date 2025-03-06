import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../stores/actions/Movieaction";
import Loader from "./Loader";
import HorizontalCards from "../temp/HorizontalCards";
function MovieDetails(){
    const{pathname} =useLocation()
    const navigate = useNavigate()
    const {id} = useParams();
    const dispatch = useDispatch();
    const{info} = useSelector((state)=>state.movie)
    useEffect(()=>{
        dispatch(asyncloadmovie(id));
        return()=>{
            dispatch(removemovie());
        };
    },[id])

    return info?(
        <div style={{background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), 
            url(https://image.tmdb.org/t/p/w500${info.detail.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center"}} 
            className="w-screen h-[163vh] px-[10%]">
               
                {/* #nav tag */}
            <nav className="h-[8vh] w-full text-zinc-100 flex items-center gap-10 text-2xl">
            <Link onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ">
            </Link>


            <a target="_blank" href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
            <a  target="_blank" href={`http://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
            <a  target="_blank" href={`http://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
            </nav>

            {/* part2 poster and details*/}
            <div className="w-full flex text-white">
            <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[60vh] object-cover"
                 src={`https://image.tmdb.org/t/p/w500${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />
                 <div className="content ml-[5%]">
                    <h1 className="text-4xl font-black text-white">
                        {
                            info.detail.title || info.detail.name || info.detail.original_name || info.detail.original_title
                        }
                        <small className="text-xl ml-1 font-bold text-zinc-400">({info.detail.release_date.split("-")[0]})</small>
                        </h1>

                        <div className="mt-2 flex text-md text-zinc-400 items-center gap-x-2 "> 
                        <span className=" rounded-full   text-white flex items-center justify-center w-[5vh] h-[5vh] bg-yellow-600">
                        {(info.detail.vote_average*10).toFixed()}<sub>%</sub>
                        </span>
                        <h1 className="w-[50px] leading-4 font-semibold text-xl lrading-4">User Score</h1>
                        <h1>{info.detail.release_date}</h1>
                        <h1>{info.detail.genres.map((g)=>g.name).join(", ")}</h1>
                        <h1>{info.detail.runtime}min</h1>
                       
                        </div>

                        <h1 className="text-xl mt-2 font-semibold italic text-zinc-200">{info.detail.tagline}</h1>
                        <h1 className="text-3xl mt-2 mb-2">Overview</h1>
                        <p className="text-zinc-700 text-md hover:italic hover:text-white leading-[3vh]">{info.detail.overview}</p>
                        <h1 className="text-3xl mt-2 mb-2">Movie Languages</h1>
                        <p className="text-zinc-700 text-md hover:italic hover:text-white mb-7 leading-[3vh]">{info.translations.join(" , ")}</p>


                        <Link to="trailer"  className="px-3 py-3 rounded-lg  bg-[#6556CD] text-md ">
                        <i className="text-xl ri-play-fillflex items-center justify-center"></i>
                        Play Trailer

                        </Link>

                 </div>
            </div >
           
            {/* available platform */}
            <div className="w-[80%] flex flex-col gap-y-3 mt-5">
            
                        {info.watchproviders && info.watchproviders.flatrate && (
                            <div className="flex gap-x-2 items-center text-white">
                                <h1 className="text-lg mr-3">Available on flatrate</h1>
                            {info.watchproviders.flatrate.map((w)=>(
                            <img title={w.provider_name} className="w-[5vh] h-[5vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                            </div>
                        )}

                        {info.watchproviders && info.watchproviders.rent && (
                            <div className="flex gap-x-2 items-center text-white">
                                <h1 className="text-lg mr-3">Available on Rent</h1>
                            {info.watchproviders.rent.map((w)=>(
                            <img title={w.provider_name}  className="w-[5vh] h-[5vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                            </div>
                        )}

                        {info.watchproviders && info.watchproviders.buy && (
                            <div className="flex gap-x-2 items-center text-white">
                                <h1 className="text-lg mr-3">Available to Buy</h1>
                            {info.watchproviders.buy.map((w)=>(
                            <img title={w.provider_name}   className="w-[5vh] h-[5vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                            </div>
                        )}

                        
            </div>
            

            {/* recommendation and similar platform*/}
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500"/>
            <h1 className="text-3xl font-bold text-white">
                Recomendation and Similar Stuff
            </h1>
            <HorizontalCards 
            data={info.recommendation.length>0 ? info.recommendation: info.similar}/>
            <Outlet/>
        </div>
    ):<Loader/>
}
export default MovieDetails;;