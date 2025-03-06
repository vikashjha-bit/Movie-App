import React from "react";
import loader from "/loade.mp4"
function Loader(){
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
            <video className="w-[50%]" autoPlay loop muted src={loader}></video>
        </div>
    )
}
export default Loader;