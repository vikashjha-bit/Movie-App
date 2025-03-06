import React from "react";
import vikas from "/vikash.jpg"
function Contact(){
    return(
        <div className="w-full flex p-[5%]">
            <div className="w-[20%] fl ">
                <img className="h-[40vh] rounded object-cover" src={vikas} alt="" />
                <hr className="mt-5 mb-2 border-none h-[2px] bg-zinc-500"/>

                <h1 className="text-xl text-zinc-400 ">Personal Info</h1>
                <div className="flex w-full gap-5 mt-3">
                <a href="https://www.linkedin.com/in/vikash-jha-43bb0a258/?originalSubdomain=in">
                <img className="w-[4vh] h-[4vh] object-cover  " src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100048624878223">
            
                <img className="w-[4vh] h-[4vh] object-cover " src="https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255556941.jpg" alt="" />
                </a>

                <a href="https://www.instagram.com/vikash45.inc/">
                <img className="w-[4vh] h-[4vh] object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiNFtPCpgaLwF4O14R82_uxfuQ-TEAxDAqQ&s" alt="" />
                </a>

                <a target="_blank" href="https://x.com/home">
                <img className="w-[4vh] h-[4vh] object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQIqzv3klUwYdw6gGu46ZGaLUndElkWqDwA&s" alt="" />
                </a>
                </div>
                <h1 className="text-lg text-zinc-400 mt-3">Vikash Kumar jha</h1>
                <div className="flex mt-1 text-zinc-400 gap-3">
                <i class="ri-phone-line"></i>
                <h3>9508086769</h3>
                </div>
                <div className="flex mt-1 text-zinc-400 gap-3">
                <i class="ri-mail-line"></i>
                <h3>jhavikashkumar716@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact;