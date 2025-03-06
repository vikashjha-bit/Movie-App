import React, { useEffect, useState } from "react";
import Topnavbar from "../temp/Topnavbar";
import Dropdown from "../temp/Dropdown";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import Loader from "./Loader";
import axios  from "../Components/utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
function Trending(){
    document.title="SCSDB |Trending";
    const navigate = useNavigate()
    const[category, setcategory]= useState("all");
    const[duration, setduration]=useState("day");
    const[trending, settrending]=useState([])
    const[page, setpage] =useState(1);
    const[hasmore,sethasmore ] =useState(true)

    const getTrending = async ()=>{
        try{
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

           if(data.results.length>0){
            settrending((prev)=>[...prev, ...data.results]) 
           setpage(page+1)
           console.log(data);
           }else{
            sethasmore(false);
           }
           
        }catch(error){
            console.log(error);
        }
    };

    const refreshHandler =()=>{
        if(trending.length === 0){
            getTrending();
        }
        else{
            setpage(1);
            settrending([])
            getTrending()
        }
    }
   
    useEffect(()=>{
        refreshHandler();
    },[category, duration])

    return trending.length>0 ?(
        <div className="w-screen h-screen ">
            <div className="w-full flex items-center justify-between px-[3%] py-[1%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-3"></i>
                Trending
                </h1>
                <div className="flex items-center w-[80%]">
                    <div className="w-[80%] ml-[10%]">
                    <Topnavbar/>
                    </div>
                
                </div>
                <Dropdown title="category" options={["movie", "tv", "all"]} fnc={(e)=>setcategory(e.target.value)}/>
                <div className="w-[2%] "></div>
                <Dropdown title="Duration" options={["week", "all","day"]} fnc={(e)=>setduration(e.target.value)} />
            </div>
            <InfiniteScroll 
            dataLength={trending.length}
            next={getTrending}
            hasMore={hasmore}
            loader={<h1>Loading...</h1>}
            >
            <Cards data={trending} title={category}/>
            </InfiniteScroll>
        </div>

    ):<Loader/>
}

export default Trending;