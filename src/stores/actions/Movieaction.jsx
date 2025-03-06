import axios from "../../Components/utils/axios";
export { removemovie } from "../reducers/MovieSlice";
import { loadmovie } from "../reducers/MovieSlice";
export const asyncloadmovie =(id)=>async(dispatch, getState)=>{
    try{
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendation = await axios.get(`/movie/${id}/recommendations`);
        const similar= await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
        const translations = await axios.get(`/movie/${id}/translations`);

        let theultimatedetails ={
            detail: detail.data,
            externalid: externalid.data,
            recommendation: recommendation.data.results,
            similar: similar.data.results,
            videos: videos.data.results.filter(m => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN,
            translations :translations.data.translations.map((t)=>t.name)
        }
        dispatch(loadmovie(theultimatedetails));
        //console.log(theultimatedetails)
    }catch(error){
        console.log("Error:", error);
    }
}
