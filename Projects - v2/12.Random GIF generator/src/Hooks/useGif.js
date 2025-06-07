
import react from "react"
import React, { useEffect, useState } from "react"; 
import axios from "axios";

  
  
const useGif=(tag)=>{
    
   
    const[gif,setGif]=useState("");
    const[loading,setLoading]=useState("");

      const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
    const Randomurl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const Tagurl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

     
    async function fetchData(tag)
       {
              setLoading(true);
              
              const {data}= await axios.get(tag? Tagurl:Randomurl);
              /* agar tag mei true hua to Tagurl wala url se data fetch karo agar true nhi hua to Randomurl se data fetch karo */
              const imageSource = data.data.images.downsized_large.url;
              setGif(imageSource);
              setLoading(false);
       }


    useEffect(() => {
        fetchData('car');
      }, []);
    
   return{gif,loading,fetchData};
       
    
}

export default useGif;