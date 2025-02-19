
import React from "react";
import roundedimages from "./assets/roundedimages.png"
import { HiUserAdd } from "react-icons/hi";
import { LuNotepadText } from "react-icons/lu";
import { GiWallet } from "react-icons/gi";
import ReferralPopup from "./5.RefPopUp";

function Circle()
  {
       return(
        <div>
                <div className="bg-[#EEF5FF] mt-[50px] w-100vw h-[500px] mb-[100px] ">
                          
                          <div>
                               <h1 className="font-inter font-medium text-[16.88px] leading-[28px] place-self-center pt-6">How do <span className="text-[#1A73E8]">I Refer?</span></h1>
                         </div>

                         <div>
                                 <img className="h-[250px] w-[700px] place-self-center mt-10 " src={roundedimages}></img>
                         
                         </div>

                         <div>
                                      <HiUserAdd className="text-[#1A73E8] -mt-[180px] w-[50px] h-[50px] ml-[400px]"></HiUserAdd>
                                       <div className="font-roboto font-normal text-[9px] leading-[11px] -ml-[395px] mt-2 place-items-center"> 
                                              <p>Submit referrals easily via</p> 
                                               <p>our website’s </p> 
                                               <p>section.</p>
                                        </div>
                        
                                    <LuNotepadText className="text-[#1A73E8] w-[50px] h-[50px] ml-[600px] -mt-[90px]" > </LuNotepadText>
                                     <div className="font-roboto font-normal text-[9px] leading-[11px] -ml-[5px] mt-2 place-items-center"> 
                                           <p>Earn rewards once your</p> 
                                            <p>referral joins an Accredian </p> 
                                             <p> program.</p>
                                      </div>

                                 <GiWallet className="text-[#1A73E8] w-[50px] h-[50px] ml-[800px] -mt-[90px]" ></GiWallet>
                                 <div className="font-roboto font-normal text-[9px] leading-[11px] ml-[395px] mt-2 place-items-center"> 
                                         <p>Referrer receives a bonus</p> 
                                         <p>30 days after program </p> 
                                         <p>enrollment.</p>
                                 </div>
                          </div>
                         
                            <div className="ml-[550px] mt-[100px]">
                                     <ReferralPopup></ReferralPopup>
                             </div>


                </div>
        </div>
       )
  }

  export default Circle;