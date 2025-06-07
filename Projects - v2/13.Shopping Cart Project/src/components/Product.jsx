import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const Product = ({post}) => 
  {
     
      const{cart} = useSelector(function f7(state)
                                  {
                                    return state;
                                  })


      const dispatch=useDispatch();
       /* isse hum store.js mei jo functions hai usko access kr payenge */
       

       const addToCart = ()=>
           {
                 dispatch(add(post));
                 toast.success("Item Added To Cart");
           }

         const removeFromCart = ()=>
           {
                 dispatch(remove(post.id));
                 toast.success("Item Removed from Cart");
           }

      
      

      return (
      
         <div className="group hover:scale-105 sm:hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 sm:ml-5 ml-2 rounded-xl w-full sm:w-[250px] ">
             
             <div className="">
                  <p className="text-gray-700 font-semibold text-lg textleft truncate w-40 mt-1">{post.title}</p>
             </div>

             <div className="w-full text-gray-500 font-normal text-sm text-left break-words">
                  <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
             </div>

             <div  className=" h-[150px] sm:h-[180px]">
                   <img src={post.image} className="h-full w-full"></img>
             </div>

              <div className="flex justify-between gap-6 sm:gap-12 mt-4">

                      <div  className="">
                             <p className="text-green-600 font-semibold">${post.price}</p>
                      </div>

                      
                        {   
                              cart.some(function f8(p)
                                    {
                                        return p.id==post.id;
                                    }) ?
                        
                                    /* jo abhi post vala variable hai uske andar single post ka data hai, uske andar abhi jo post abhi paas hiu hai uska data hai  */
                        
                                    /* jo cart mei aisi koi id  hai kya jo abhi wali post jo pass hui hai uske id ke equal ho agar yes then return true */

                                    (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in " onClick={removeFromCart}>Remove Item</button>):
                                     (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>Add To Cart</button>)
                       }
                     

              </div>
             

         </div>
        
        
        );
  };

export default Product;
