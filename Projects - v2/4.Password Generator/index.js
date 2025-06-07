
const inputSlider=document.querySelector("[data-lengthSlider]");  /* variable for storing the slider's value which is currently displayed */
const passwordDisplay=document.querySelector("[data-passwordDisplay]");   /* variable for storing the password which is currently displayed */
const lengthDisplay=document.querySelector("[data-length-number]");
const copyBtn=document.querySelector("[data-copy]"); 
const copyMsg=document.querySelector("[data-copy-msg]");
const uppercaseCheck=document.querySelector("#uppercase") ; 
const lowercaseCheck=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generate-button");
const allCheckBox=document.querySelectorAll("input[type=checkbox]"); /* a variable which shows all the checkboxes */ 
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password="";  /* initially password empty hai */
let passwordLength=10;  /* initially passwordlength jo slider mei hai vo 10 hai*/
let checkCount=0;   /* initially ek checkbox uppercase vala already checked hai */
handleSlider();
setIndicator('#ccc')

/* initially password indicator ka color white hai*/
/* handle slider function password length ki UI par display karata hai bas*/
function handleSlider()  // sets the length of the password
  {     
       inputSlider.value=passwordLength;  // kyunki starting mei slider 10 par pada hua hai aur passwordlength ki value initially 10 hai
       lengthDisplay.innerText=passwordLength;
       /*lengthDisplay.innerText=inputSlider.value;*/
  }

function setIndicator(color)   //this function is called when you clicks on generate password
  {     
      // here we have to change CSS properties by using JS so we have 5 options style property,set attribute,classname ,csstext

      indicator.style.backgroundColor=color;
      indicator.style.boxShadow=`0px 0px 12px 1px ${color}`;

      //shadow daalni baaki hai

  } 
 
 function getRndInteger(min,max)
     {
          return Math.floor(Math.random()*(max-min)) + min;

          //Math.random se answer 0 aur 1 ke beech atta aur 0 inclusive hota hai aur 1 exclusive hota hai ab (max-min) multiply krne se answer 0 se lekar (max-min) tak aa gaya
          //possiblity hai ki ye number floating number aa raha hoga to Math.floor se round off kr diya 
          //abhi iski range (max-min) tak he hai +min krne se iski range min aur max ke beech mei aa jayegi
     }

  function generateRandomNumber()
      {
          return  getRndInteger(0,9);
      }    
   
  function generateLowercase()
     {
          return String.fromCharCode(getRndInteger(97,123));
     }
   
   function generateUppercase()
      {
           return String.fromCodePoint(getRndInteger(65,91));
      }  
    
   function generateSymbols()
      { 
           const randomNumb=getRndInteger(0,symbols.length);
           return symbols.charAt(randomNumb);
      }   
   
   function calcStrength()
      {
           let hasUppercase=false;
           let hasLowercase=false;
           let hasNumbers=false;
           let hasSymbols=false;

           if(uppercaseCheck.checked)
               {
                   hasUppercase=true;
               }
           
            if(lowercaseCheck.checked)
               {
                  hasLowercase=true;
               }
            
            if(numbersCheck.checked)
               {
                  hasNumbers=true;
               }
            
            if(symbolsCheck.checked)
              {
                 hasSymbols=true;
              }
              
          
              if (hasUppercase && hasLowercase && (hasNumbers || hasSymbols) && passwordLength >= 8) 
                  {
                     setIndicator("#0f0");
                     
                  } 

              else if ( (hasLowercase || hasUppercase) && (hasNumbers || hasSymbols) && passwordLength >= 6 ) 
                 {
                    setIndicator("#ff0");
                 }

             else 
                {
                   setIndicator("#f00");
                }
      }

   /* async isiliye use kiya kyunki aage hum await ka use krne waale hai*/
      async function copyContent()
       {    
           try  
             {
                await navigator.clipboard.writeText(passwordDisplay.value);  /* await isiliye kyunki jab  takye waali line execute nhi hoti tab tak neeche waali line execute mat line  */
                copyMsg.innerText="copied";
                /* agar successfull hui promise to span tag ke andar ye copied wala text add hojayega*/
             }
           
          catch(e)    /* in case agar koi error aaya to*/
            {
                copyMsg.innerText="Failed";
                 /* agar fail hui promise to span tag ke andar ye Failed wala text add hojayega*/
            }
        
            /* to make copy wala span visible */
            copyMsg.classList.add("active");
            /* vo copied vala text humei sirf 2 seconds ke liye dikhana tha uske baad vo invisible ho jana chahiye
                isiliye humnei  setTimeout use kiya  */
        
             setTimeout(()=>
                {
                    copyMsg.classList.remove("active");
                },2000);   
         }


    /* function me1()
       {  
           const a=0;

           if(hasUppercase==true)
              {
                 a++;
              }

            if(hasLowercase==true)
              {
                  a++;
              }

            if(hasSymbols==true)
              {
                 a++;
              }
  
            if(hasNumbers==true)
               {
                  a++;
               }
        
            inputSlider.value=a;
       } */

      function handleCheckboxChange()
         {
             checkCount=0;
            [...allCheckBox].forEach((checkbox) => 
                                   {
                                        if(checkbox.checked)
                                             {
                                                checkCount++;
                                             }
                                   }
                                );
             // special condition 
             if(checkCount>passwordLength)
                  {
                      passwordLength=checkCount;
                      handleSlider();
                  }
         }
      
      function shufflePassword(array)
          {
                // fisher yates algorith/method is used to shuffle elements of an array
                for (let k = array.length - 1; k > 0; k--) {
                    const l = Math.floor(Math.random() * (k + 1));
                    const temp = array[k];
                    array[k] = array[l];
                    array[l] = temp;
                  }
                  let str = "";
                  array.forEach((el) => (str += el));
                  return str;
          }
    
    [...allCheckBox].forEach((checkbox) => 
                        {
                            checkbox.addEventListener("change",handleCheckboxChange());
                        }
                     );  

  inputSlider.addEventListener("input",(e)=>
                                        {  
                                            passwordLength= e.target.value;
                                            // e.target.value ye slider ki value lakar deta hai
                                            handleSlider();
                                        }
                         )
    /* idhar input mtlb jaise hi aap input denge mtlb jaise hi slider ko slide karoge us basis 
       par eventListner iss code ko run karaega , 'e' slider wale element ke andar ki value ko represent 
       krta hai. 
   */

  copyBtn.addEventListener("click",()=> 
                                  {    
                                      if(passwordDisplay.value)   /* mtlb agar passwordDisplay vaale variable ke andar kuch hai to  sirf copyContent() fun ko call krdo*/  
                                       {
                                        copyContent();
                                       }
                                      /* to agar passwordDisplay ke andar kuch hai to copy krdo agar nhi padi to copy kuch bhi mat karo isiliye jab passwordDisplay ke andar kuch hoga tabhi copyContent() fun ko call krdo*/
                                 }
                       )

    
generateBtn.addEventListener("click",()=> { 
    console.log("started");                                    
         //none checkbox is selected
         if (checkCount == 0) {
               let a;
               //return;
          }  //return nothing
           
           console.log("started4");
           if(passwordLength<checkCount)
                {
                    passwordLength=checkCount;
                    handleSlider();
                }
                console.log("started5");
            //lets start the journey to find the password

            //remove old password
            password  ="";
            console.log("old pass removed");

            //let's  put the stuff which is told to add in password
       /*     if(uppercaseCheck.checked)
                   {
                      password += generateUppercase();
                   }
            
            if(lowercaseCheck.checked)
                    {
                       password += generateLowercase();
                    }

            if(numbersCheck.checked)
                  {
                      password += generateRandomNumber();
                  }
            if(symbolsCheck.checked)
                   {
                      password += generateSymbols();
                   }*/
            
            let funArr=[];

            if(uppercaseCheck.checked)
                  {
                     funArr.push(generateUppercase);
                  }
           
            if(lowercaseCheck.checked)
                 {
                     funArr.push(generateLowercase);
                 }

            if(numbersCheck.checked)
                  {
                     funArr.push(generateRandomNumber);
                  }          
            if(symbolsCheck.checked)
                 {
                    funArr.push(generateSymbols);
                 }
                 console.log("symbols checked");

            //compulsory function
            for(let i=0;i<funArr.length;i++)
                 {
                    password+=funArr[i](); 
                 }
                 console.log("com fun done");

            // remaning letters to add in the password
            for(let j=0;j<passwordLength-funArr.length;j++)
                  {
                      let randomindex=getRndInteger(0,funArr.length );
                      password+=funArr[randomindex]();
                     
                  }
                  console.log("all letters added");

        /* IMP - abhi passowrd to bana liye user ne jitne characters ka bola tha utne ka bana liya , so jis sequence mei 
             boxes tick honge ussi sequence mei password ke letters ayenge for ex. ki maine pehele uppercase wala checkbox check
             kiya aur badmei lowercase vala aur last mei symbols wala to jo abhi tak password generate hua hai vahi password denge
             to koi bhi pehele ke 3 characters samajh jayega ki pehele uppercase ka checkbox tick kiya hai isiliye password la pehehla 
             letter ek uppercase hoga badmei lowercase check kiya hai isiliye 2nd letter lowercase haga aur 3rd symbols wala checkbox 
             check kiya hai to 3rd letter password mei koi symbol haga to isse password safety issues ho skte hai isiliye ab humei jaisa 
             password chahiye tha vaisa mil gaya hai ab mujhe bas uis password ke characters ka sequence badalna hai chacracters ko shuffle
             krna hai usse password aur accah banega 
        */

         password=shufflePassword(Array.from(password));
         /* password ko shuffle krne ke liye ek algorithm use hoti hai fisher yates algorithm vo ek array ke characters ko shuffle kr deti hai */
         //console.log("password shuffled");
         //show password in UI
         passwordDisplay.value=password;
        // console.log("password shown");

         // ab password display ho gaya hai UI mei ab iske baad mujhe us password ki strength dikhani hai
         calcStrength();
        // console.log("strength calculated");

         }
      )    