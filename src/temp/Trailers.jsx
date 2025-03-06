import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NotFound from "./NotFound";

function Trailers() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";

    const videos = useSelector((state) => state[category]?.info?.videos || []);
    const ytvideo = videos.length > 0 ? videos[0] : null;

    console.log("Videos from Redux:", videos); // Debugging

    return (
        <div className="absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,.4)]">
            <Link onClick={() => navigate(-1)} className="absolute ri-close-line text-3xl text-white right-[5%] top-[5%] cursor-pointer"></Link>
            {ytvideo ? (
            <ReactPlayer controls height={500} width={1200} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />    
                ) : (
            <NotFound />
             )}
                </div>
            )
   
}

export default Trailers;
