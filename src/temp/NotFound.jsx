import React from "react";
import No from "/404.gif"
function NotFound(){
    return(
        <div className="w-screen h-screen flex items-center justify-center bg-black ">
        <img className="h-[50%] object-cover" src={No} alt="" />
        </div>
    )
}

export default NotFound;