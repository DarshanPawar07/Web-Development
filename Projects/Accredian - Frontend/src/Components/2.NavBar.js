
import React from "react";
import logo from './assets/logo.png'
import { FaAngleDown } from "react-icons/fa";


function NavBar()
  {
       return(
       <div className=" h-[79.2px] pt-[9.6px] pb-[9.6px] pl-[110px] pr-[110px] flex justify-between gap-[32px]">
               
               <div className="flex items-center gap-[19px]">
                    <button>
                          <img src={logo} className="w-[125px] h-[36px]" ></img>
                    </button>
                   
                    <button className="flex items-center rounded-[6px] pt-[8px] pb-[8px] gap-2 pl-[18px] pr-[18px] bg-[#1A73E8] text-white 
                      font-inter font-medium text-[14.88px] leading-[24px] tracking-normal text-center
                       hover:bg-[#0F5DB3]">Courses <FaAngleDown /></button>


               </div>

                <div className="justify-items-center place-items-center place-content-center font-inter flex gap-4">
                       <button className="ml-3 hover:scale-[1.1] transition:all 0.5s">Refer & Earn </button>
                       <button className="ml-3 hover:scale-[1.1] transition:all 0.5s">Resources</button>
                       <button className="ml-3 hover:scale-[1.1] transition:all 0.5s">About Us</button>
                      <button className="ml-3 pr-[12px] pl-[12px] pt-[6px] pb-[6px] bg-gray-200 rounded-md hover:scale-[1.1] transition:all 0.5s">Login</button>
                      <button className="ml-3 items-center rounded-[6px] pt-[8px] pb-[8px] gap-2 pl-[18px] pr-[18px] bg-[#1A73E8] text-white font-inter font-medium text-[14.88px] leading-[24px] tracking-normal text-center hover:bg-[#0F5DB3]">Try for free</button>
                </div>
       </div>);
  }

  export default NavBar;