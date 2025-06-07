

import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";
import { useSelector } from "react-redux";

const CartItem = ({item,itemIndex}) =>
   {
        

      const {cart} = useSelector(function fun3(state)
                                          {
                                               return state;
                                          }
                                      )

      const dispatch=useDispatch();

       const removeFromCart=()=>{
              dispatch(remove(item.id));
              toast.success("Item Removed");

       }
       
        return (
          <div className="flex flex-col items-center p-2 sm:p-4 md:p-5 justify-between mt-2 mb-2 mx-auto w-full max-w-[680px]">
          

                <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center mb-6 w-full">

                     <div className="w-full sm:w-3/4 md:w-[30%]">
                          <img src={item.image} className="object-contain md:w-19 md:h-25 mx-auto "></img>
                     </div>

                     <div className="md:ml-10 self-start space-y-5 w-full md:w-[70%]">
                              <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                              <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
                          
                              <div className="flex items-center justify-between">
                                   <div>
                                       <p className="font-bold text-lg text-green-600">${item.price}</p>
                                   </div>

                                   <div onClick={removeFromCart} className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" >
                                         <MdDeleteForever className="text-red-700 text-[20px]  " />
                                   </div>

                              </div>
                     </div>
               </div>
                
              
                      
                  {
                          itemIndex +1 < cart.length &&
                           <div className="h-[2px] w-full bg-black   "></div>
                  }
                
                 
          </div>
        );
   };

export default CartItem;
