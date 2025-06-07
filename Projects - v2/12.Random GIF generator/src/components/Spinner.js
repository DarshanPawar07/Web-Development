 import React, { useEffect, useState } from "react"; 

 
 

 
 const Spinner=()=>{
     
        return(
         <div className=" flex justify-center items-center w-full h-32 sm:h-40 md:h-48">
                  
                  <div className="spinner w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-4 border-t-transparent border-green-500 rounded-full animate-spin">
                       
                  </div>
                
         </div>
     )
 }
 
 export default Spinner;