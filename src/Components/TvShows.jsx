import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from "../Components/utils/axios";
import Dropdown from "../temp/Dropdown";
import Topnavbar from "../temp/Topnavbar";
import Loader from "./Loader";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";


function TvShows(){

    document.title="SCSDB |tv";
    const navigate = useNavigate()
    const[category, setcategory]= useState("airing_today");
    const[page, setpage] =useState(1);
    const[hasmore,sethasmore ] =useState(true);
    const[tv, settv] =useState([]);
    const getTv = async ()=>{
        try{
            const { data } = await axios.get(`/tv/${category}?page=${page}`);

           if(data.results.length>0){
            settv ((prev)=>[...prev, ...data.results]) 
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
        if(tv.length === 0){
            getTv();
        }
        else{
            setpage(1);
            settv([])
            getTv()
        }
    }
   
    useEffect(()=>{
        refreshHandler();
    },[category])
    
    return tv.length>0 ?(
        <div className="w-screen h-screen ">
            <div className="w-full flex items-center justify-between px-[3%] py-[1%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-3"></i>
                Tv<small className="ml-2 text-sm text-zinc-600">({category})</small>
                </h1>
                <div className="flex items-center w-[80%]">
                    <div className="w-[80%] ml-[10%]">
                    <Topnavbar/>
                    </div>
                
                </div>
                <Dropdown title="category" options={["on_the_air", "popular", "top_rated", "now_playing" ]} fnc={(e)=>setcategory(e.target.value)}/>
                <div className="w-[2%] "></div>
            </div>
            <InfiniteScroll 
            dataLength={tv.length}
            next={getTv}
            hasMore={hasmore}
            loader={<h1>Loading...</h1>}
            >
            <Cards data={tv} title="tv"/>
            </InfiniteScroll>
        </div>

    ):<Loader/>
}

export default TvShows;