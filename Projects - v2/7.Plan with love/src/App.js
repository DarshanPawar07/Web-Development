import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours.js"
import "./index.css"

const App = () => {
     
   const [tours, setTours]=useState(data); 
   // this is the data inside the cards which is taken from data.js allthis data is now initially stored in tours variable 
    
   function removeTour(id) 
     {
         const newTours=tours.filter(tour => tour.id !== id);
         setTours(newTours);
     } 


    /* NO TOURS LEFT SECTION */
    if(tours.length===0)
        {  
              return (
                  <div className="refresh">
                              <h2>No Tours Left</h2>
                         {/* jab hum refresh waale button par click krte the to sab cards fir se visible ho jaate the */}
                              <button className="btn-white" onClick={()=>setTours(data)}>
                                    Refresh
                              </button>

                  </div>
              )
        } 

   return(

        <div className="App">
              <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>


          )
};

export default App;
