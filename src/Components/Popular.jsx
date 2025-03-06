import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from "../Components/utils/axios";
import Dropdown from "../temp/Dropdown";
import Topnavbar from "../temp/Topnavbar";
import Loader from "./Loader";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular(){
    document.title="SCSDB |Popular";
    const navigate = useNavigate()
    const[category, setcategory]= useState("movie");
    const[page, setpage] =useState(1);
    const[hasmore,sethasmore ] =useState(true);
    const[popular, setpopular] =useState([]);
    const getPopular = async ()=>{
        try{
            const { data } = await axios.get(`/${category}/popular?page=${page}`);

           if(data.results.length>0){
            setpopular ((prev)=>[...prev, ...data.results]) 
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
        if(popular.length === 0){
            getPopular();
        }
        else{
            setpage(1);
            setpopular([])
            getPopular()
        }
    }
   
    useEffect(()=>{
        refreshHandler();
    },[category])

    return popular.length>0 ?(
        <div className="w-screen h-screen ">
            <div className="w-full flex items-center justify-between px-[3%] py-[1%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-3"></i>
                Popular
                </h1>
                <div className="flex items-center w-[80%]">
                    <div className="w-[80%] ml-[10%]">
                    <Topnavbar/>
                    </div>
                
                </div>
                <Dropdown title="category" options={["tv", "movie" ]} fnc={(e)=>setcategory(e.target.value)}/>
                <div className="w-[2%] "></div>
            </div>
            <InfiniteScroll 
            dataLength={popular.length}
            next={getPopular}
            hasMore={hasmore}
            loader={<h1>Loading...</h1>}
            >
            <Cards data={popular} title={category}/>
            </InfiniteScroll>
        </div>

    ):<Loader/>
}
export default Popular;