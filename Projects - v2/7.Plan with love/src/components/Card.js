import { useState } from "react";


function Card({id,image,info,price,name,removeTour} )
  {     
       function readmoreHandler()
         {
               setReadmore(!readmore);
               // isse mei jab readmore text par click karu to readmore variable hai vo true hai tha to vo false ho jaaye aur agar false tha to true ho jaaye
         }   

   
         const [readmore,setReadmore]=useState(false);

      
       const description= readmore ? info:`${info.substring(0,200)}....`;
       // =`${info.substring(0,200)}....` isse har ek card ke description ke 200 letter jaha tak honge waha tak ka data description mei aa jayega 
       // agar readmore true hai to to readmore par click hua pada hai to poori ki poori info dikha deta hun aur agar readmore mei false hai mtlb readmore par click nhi hua pada hai to is case mei aadhi information dikhao mtlb 200 characterstak hi dikhao mtlb yaha tak info.substring(0,200)
      
       return( 

        <div className="card">

               <img src={image} className="image"></img>

               <div className="tour-info"> 

                    <div className="tour-details">
                         <h4 className="tour-price">₹{price}</h4>
                          <h4 className="tour-name">{name}</h4>
                    </div>

                    <div className="description">
                          {description}
                         <span className="read-more" onClick={readmoreHandler}>
                              {readmore?`Show less`:`Read more`}
                                {/* isse agar showmore mei true hua to mujhe show less dikhana hai aur true nhi hua toshow more dikhana hai */}
                         </span>
                    </div>

               </div>

               <button className="btn-red" onClick={()=>removeTour(id)}> 
                      Not Interested
                </button>
        </div>    

       )
  }

  export default Card;