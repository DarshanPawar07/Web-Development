

import React, { useState } from 'react';
import "./a.css";
import { FaRegCopy } from "react-icons/fa6";


function ReferralPopup() {

    const [copied, setCopied] = useState(false);

    function generateReferralCode(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let referralCode = '';
      
        // Loop to generate the referral code
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          referralCode += characters.charAt(randomIndex);
        }
      
        return referralCode;
      }

    
      const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        // Reset "copied" state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      };
      
      // Example usage:
      const code = generateReferralCode();
      console.log("Generated Referral Code: ", code);


  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="">
      {/* Button to open the modal */}
      <button onClick={toggleModal} className="px-4 py-2 mt-10 ml-5 pl-[18px] pr-[18px] bg-blue-500 text-white rounded-lg hover:bg-blue-600">
         Refer Now
      </button>
      


      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Referral Program</h2>
              <button 
                onClick={toggleModal} 
                className="text-xl font-bold text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <div className="mt-5">
              <p className="text-sm text-gray-700">Enter your referral details to get a bonus:</p>
              <form className="mt-3">
                <input type="text" placeholder="Enter Your Name" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="number"  placeholder="Phone Number" className="no-arrows w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text"  placeholder="Email Id" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Referral Code" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <div className='flex gap-9 '>  
                     <h1 className=' mt-[15px] text-[17px] ml-2 '>Referral Code = {code}</h1>
                     <button onClick={copyToClipboard} className="bg-blue-500 text-white px-4 mt-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                         {copied ? "Copied!" : <FaRegCopy />}
                     </button>
                 </div> 

                <button
                  type="submit"className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralPopup;
