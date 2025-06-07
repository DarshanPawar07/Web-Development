

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => 
    
  {     
      const {cart}=useSelector(function fun2(state)
                                    {
                                        return state;
                                    })

       return (

       <div className="bg-slate-900">
           
           <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

                    <NavLink to="/">
                               <div className="ml-3 sm:ml-5">
                                      <img src="/logo1.png" className="h-10 sm:h-14" alt="Logo" ></img>
                               </div>
                   </NavLink>

                
                  <div className="flex items-center font-medium text-slate-100 mr-3 sm:mr-5 space-x-3 sm:space-x-4 md:space-x-6">

                       <NavLink to="/">
                              <p>Home</p>
                       </NavLink>
                        
                       
                        <NavLink to="/cart">
                              <div className="relative">
                                  <FaShoppingCart className="text-xl sm:text-2xl" />
                                  {
                                       cart.length >0 &&
                                        (<span className="absolute -top-1 -right-2 bg-green-600 text-xs sm:text-[13px] w-4 h-4 sm:w-5 sm:h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>)
                                      /* agar cart ki length 0 se greater hai to hi ye dikhao nhi to mat dikhao*/
                                  }
                                   
                              </div>
                        </NavLink>
                       

                  </div>
           </div>
             
       </div>
      
      );
  };

export default Navbar;
