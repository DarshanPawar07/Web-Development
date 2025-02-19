


import React from "react";
import Anniversary7  from './assets/Anniversary7.png';
import Cash from "./assets/Cash.png"
import ReferralPopup from "./5.RefPopUp";

function ImgSection()
   {

      


        return(
            <div>
                   <div className=" shadow-custom flex w-[800px] gap-8 h-[380px] top-[269px] left-[280px]  pl-9 place-self-center rounded-[29px] bg-[#EEF5FF] mt-6">
                         <div className="gap-[10px]">
                               <h1 className="font-roboto font-bold text-[44px] leading-[44px] tracking-normal  pt-[70px]">Let's Learn & Earn</h1>
                               <h2 className="font-roboto font-normal text-[20px] leading-[32px] mt-7">Get a chance to win <br></br> up-to <span className="text-[#1A73E8] font-roboto font-bold text-[26px] leading-[32px]">Rs. 15,000</span></h2>
                               <ReferralPopup></ReferralPopup>
                         </div>
                          <img className="w-[452px] h-[399px] top-[269px] left-[788px] pr-4" src={Anniversary7}></img>
                          <img src={Cash} className=" -rotate-[10deg] absolute w-[85px] h-[85px] top-[520px] left-[610px]"></img>
                          <img src={Cash} className=" rotate-[240deg] absolute w-[85px] h-[85px] top-[230px] left-[940px]"></img>
                          <img src={Cash} className=" rotate-[190deg] absolute w-[85px] h-[85px] top-[430px] left-[940px]"></img>
                          <img src={Cash} className=" rotate-[240deg] absolute w-[85px] h-[85px] top-[230px] left-[720px]"></img>
                          <img src={Cash} className=" rotate-[440deg] absolute w-[85px] h-[85px] top-[230px] left-[240px]"></img>
                          <img src={Cash} className=" rotate-[440deg] absolute w-[85px] h-[85px] top-[400px] left-[490px]"></img>
                          
                   </div>
            </div>
        )
   }

   export default ImgSection;