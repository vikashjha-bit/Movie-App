import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from "../Components/utils/axios";
import Dropdown from "../temp/Dropdown";
import Topnavbar from "../temp/Topnavbar";
import Loader from "./Loader";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";


function Movies(){
    document.title="SCSDB |Movies";
    const navigate = useNavigate()
    const[category, setcategory]= useState("now_playing");
    const[page, setpage] =useState(1);
    const[hasmore,sethasmore ] =useState(true);
    const[movies, setmovies] =useState([]);
    const getMovies = async ()=>{
        try{
            const { data } = await axios.get(`/movie/${category}?page=${page}`);

           if(data.results.length>0){
            setmovies ((prev)=>[...prev, ...data.results]) 
           setpage(page+1)
           //console.log(data);
           }else{
            sethasmore(false);
           }
           
        }catch(error){
            console.log(error);
        }
    };

    const refreshHandler =()=>{
        if(movies.length === 0){
            getMovies();
        }
        else{
            setpage(1);
            setmovies([])
            getMovies()
        }
    }
   
    useEffect(()=>{
        refreshHandler();
    },[category])
    

    return movies.length>0 ?(
        <div className="w-screen h-screen ">
            <div className="w-full flex items-center justify-between px-[3%] py-[1%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-3"></i>
                Movies<small className="ml-2 text-sm text-zinc-600">({category})</small>
                </h1>
                <div className="flex items-center w-[80%]">
                    <div className="w-[80%] ml-[10%]">
                    <Topnavbar/>
                    </div>
                
                </div>
                <Dropdown title="category" options={["popular", "top_rated", "upcoming", "now_playing" ]} fnc={(e)=>setcategory(e.target.value)}/>
                <div className="w-[2%] "></div>
            </div>
            <InfiniteScroll 
            dataLength={movies.length}
            next={getMovies}
            hasMore={hasmore}
            loader={<h1>Loading...</h1>}
            >
            <Cards data={movies} title="movie"/>
            </InfiniteScroll>
        </div>

    ):<Loader/>
}

export default Movies;