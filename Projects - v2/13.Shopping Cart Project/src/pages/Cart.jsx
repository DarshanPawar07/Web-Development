import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";


const Cart = () => 
   {    
        const {cart} = useSelector(function f3(state)
                                    {
                                         return state;
                                    }
                                )

      
       const[totalAmount,setTotalAmount]=useState(0);
     
      /* for calculating total amount of cart items */

      useEffect(function f5()
                  {
                    
                       setTotalAmount(cart.reduce(function f6(acc, curr) 
                                   {
                                       return acc + curr.price;
                                   }, 0) //  0 is passed as initial accumulator value
                                   );

                  },[cart])

      

            /* reduce function se totalAmount calculate hoti hai aur ek 0 pass kiya hai mtlb vo reduce ki inital value hai */

     /* to is useeffect se setTotalAmount function firse run hoga jab bhi cart update hogi mtlb koi bhi item add ho 
         raha hoga ya fir remove hoga to jab bhi kuch add ya fir remove hoga ye useEffect "totalAmount" waale variable ki 
         value update karega , [cart] - iska meaning ye hai ki jabhi "cart" mei kuch changes honge to UseEffect hook ko fir se 
         chalao  jisse totalAmount ki value updated rahegi */

   

        return(
 
          <div className="min-h-screen p-4 md:p-[50px] flex flex-col md:flex-row overflow-auto">
                   {
                       cart.length === 0 ?
                        (
                            <div className="flex flex-col items-center justify-center h-full gap-8 ">

                                <p className="-mt-[180px] font-semibold text-[20px]">Your Cart Is Empty !</p>

                                <NavLink to="/">
                                    <button className="bg-green-600 font-semibold px-10 text-white p-3 text-[17px] rounded-md">SHOP NOW</button>
                                </NavLink>
                            </div>
                        ):

                        (  <div className="flex flex-col md:flex-row w-full gap-6">
                              
                               <div className="flex-1 overflow-auto max-h-[60vh] md:max-h-[80vh]">
                                  {

                                   cart.map(function f4(item,index)
                                         {
                                              return <CartItem key={item.id} item={item} itemIndex={index} ></CartItem>
                                         })
                                  }
                                   
                                  </div> 


                                  {
                                     <div className="w-full md:w-[40%] mt-5 md:mt-0 flex flex-col ml-0 md:ml-[50px]">
                                     
                                              <div className="flex flex-col p-5 gap-5 my-8 h-full justify-between bg-white rounded-lg shadow-md">
                                                  
                                                   <div className="flex flex-col gap-5 ">

                                                         <h2 className="font-semibold text-xl text-green-800 ">Your Cart</h2>
                                                         <h1 className="font-semibold text-5xl text-green-700  -mt-5">Summary</h1>
                                                         <p className="text-xl">
                                                              <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                                                         </p>

                                                    </div>
                                                </div>

                                               <div className="flex flex-col">
                                                     <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
                                                     <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
                                              </div>
                                    </div>
  
                                 },
                            
                          </div> )
                   }
          </div>
        )
  };

export default Cart;
