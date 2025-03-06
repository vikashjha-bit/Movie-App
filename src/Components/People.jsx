import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from "../Components/utils/axios";
import Dropdown from "../temp/Dropdown";
import Topnavbar from "../temp/Topnavbar";
import Loader from "./Loader";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";



function People(){

    document.title="SCSDB |people";
    const navigate = useNavigate()
    const[category, setcategory]= useState("popular");
    const[page, setpage] =useState(1);
    const[hasmore,sethasmore ] =useState(true);
    const[people, setpeople] =useState([]);
    const getPeople = async ()=>{
        try{
            const { data } = await axios.get(`/person/${category}?page=${page}`);

           if(data.results.length>0){
            setpeople ((prev)=>[...prev, ...data.results]) 
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
        if(people.length === 0){
            getPeople();
        }
        else{
            setpage(1);
            setpeople([])
            getPeople()
        }
    }
   
    useEffect(()=>{
        refreshHandler();
    },[category])
    
    return people.length>0 ?(
        <div className="w-screen h-screen ">
            <div className="w-full flex items-center justify-between px-[3%] py-[1%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-3"></i>
                People
                </h1>
                <div className="flex items-center w-[80%]">
                    <div className="w-[80%] ml-[10%]">
                    <Topnavbar/>
                    </div>
                
                </div>
                <div className="w-[2%] "></div>
            </div>
            <InfiniteScroll 
            dataLength={people.length}
            next={getPeople}
            hasMore={hasmore}
            loader={<h1>Loading...</h1>}
            >
            <Cards data={people} title="people"/>
            </InfiniteScroll>
        </div>

    ):<Loader/>
}

export default People;