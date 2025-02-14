

 const userTab=document.querySelector("[data-userWeather]");
 const searchTab=document.querySelector("[data-searchWeather]");
 const info=document.querySelector(".information"); //  user-info-container 
 const grantAccessContainer = document.querySelector(".locationn");
 const userContainer=document.querySelector(".weather-container");
 const search_cityBar= document.querySelector(".search_city_bar"); //searchform
 const loading_screen=document.querySelector(".loading_container");


 /* currentTab mtlb aap abhi konse tab mei ho yourWeather waale ya firsearchWeather waale*/
 let currentTab=userTab;   /* isse by default jo website open hogi vo userweather ke andar open hogi*/ 
 const API_key="9d093d346d801ba5664ab1a7945f7e16";
 currentTab.classList.add("current-tab");

 /* sabse pehele dekhenge ki session storage mei location ke coordinates saved hai ya nhi agar coordinates 
      honge to weather info dikha dega agar nhi hogi to grantlocation ko call kr dega
*/
  getfromSessionStorage();

 /* ab jab bhi aap dono tab mei se kisi par click karoge to ek function call hoga jis 
    tab par click kiya hai us tab mei switch krne ke liye */
    
    userTab.addEventListener("click", ()=>{
     // pass clicked tab as input paramenter
       switchTab(userTab);
    })

    searchTab.addEventListener("click", ()=>{
      // pass clicked tab as input paramenter
        switchTab(searchTab);
     })

     function switchTab (clickedTab) 
       {
             /** switch tab tabhi karenge jabhi mera current tab aur clicked tab dono different ho */ 
              if(clickedTab!=currentTab)
                 {
                       // current tab jo naamm likha hai uska white bg hatao
                       currentTab.classList.remove("current-tab");
                       currentTab=clickedTab;
                       currentTab.classList.add("current-tab"); // new tab jo naamm likha hai uspar white bg lagao
                      
                     // mtlb agar hum currently search citybar waale tab mei nhi hai mtlb iske search tab upar click kiya hai
                       if(!search_cityBar.classList.contains("activeclass")) /* mtlb agar search wala tab invisible hai to use visible kr do */
                           {      /* search city bar ko visible krna ka code*/
                                  info.classList.remove("activeclass");
                                  grantAccessContainer.classList.remove("activeclass");
                                  search_cityBar.classList.add("activeclass");  /* is search waale tab ko visible karunga aur baaki sabko invisible karunga */
                           }

                        else 
                           {
                               // mtlb search wala tab visible tha aur mujhe ab your weather vala tab visible karana hai
                               search_cityBar.classList.remove("activeclass");
                               info.classList.remove("activeclass");
                               /* ab mai your weather tab mei aa gaya hun ,toh weather bhi display krna padega, so let's check local storage first
                                  for coordinates , if we have stored the coordinates there */
                               getfromSessionStorage();
                               // iss function se your weather ki details aa jayegi  
                           }   
                 }
               
                 
       }    //old tab=current tab  new tab=clickedtab

     
       // checks if coordinates are already present in session storage and coordinates are latitude and longitude of your location
     function getfromSessionStorage() 
        {
            const localCoordinates= sessionStorage.getItem("user-coordinates");
            // agar coordinates nahi hai stored mtlb aapki location aapke pc mei stored nahi hai iska mtlb 
            //  ab aapko user ki location leni padegi for that you will have to show grantlocation waali screen 
             if(!localCoordinates)  // agar local coordinates nahi hai to
                {        
                      // grant loction vaali screen visible kr do
                       grantAccessContainer.classList.add("activeclass");
                       /* jab bhi grant access location button par click karu toh 2 kaam karo
                          1) jis loction par mera device hai us location ke coordinates find karo using geolocation API
                          2) jab location ke coordinates mil jaaye us latitude,longitude ke values ko store krdo session storage ke andar*/
                        
                }
            else
              {
                  // agar local coordinate(latitude,longitude) storage ke andar padey hai to API ko call krdo.
                   const coordinates=JSON.parse(localCoordinates);
                   fetchUserWeatherInfo(coordinates);  // ye function coordinates ke aadhar par location fetch krkr dega
            }
        }

   // since ye function API call krne wala hai to async bana diya
     async function fetchUserWeatherInfo(Coordinates)
            {
                 const { lat , lon} =Coordinates;  // isse lat aur long 2 variables create kiya aur unmei latitude aur longitude ki value daal di.
                 // ab jab mujhe weather ki information dikhani hai to grantlocation waali screen ko hatana hoga
                 grantAccessContainer.classList.remove("activeclass");
                 // ab API call krni hai location kee liye to jab tak API se information nahi atti tab tak loading waali screen dikhani padegi.
                 loading_screen.classList.add("activeclass");
                
                 //ab API ko call krne waale hai 
                 try
                   { 
                       const res= await fetch(
                          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);
                        console.log(lat);
                        console.log(lon);
                         const data =await res.json();

                         // now you have weather data now remove the loading wala GIF
                         loading_screen.classList.remove("activeclass");
                         // ab weather information aa gayi hai usko abhi display karana hoga na 
                        
                         info.classList.add("activeclass");
                         info.classList.add("mt");
                         renderWeatherInfo(data); 
                         /* ye function jo API call se information aayi hai to wo information humne JSON format mei 
                            convert kari hai ab us information ko dynamically UI par diaply bhi karani hai to isiliye ye
                            function humne use kiya hai.for Ex. API call se JSON format mei humnei info layi hai usmei temperature 
                            ki value hogi, city_name hoga , winndspeed hogi,humidity ki value hogi to ye function vo values lekar
                            jo humnei information ke liye div banayi hai weatherinfo class mei usmei value daalega. 
                         */

                   }

                 catch(err)
                    {
                          loading_screen.classList.remove("activeclass");
                          //HW
                    } 
            }

            function renderWeatherInfo(weather_details)
                {
                      // API se aayi hui values jis elements ke andar daalni hai un elements ko pehele fetch krke lana padega
                      // humei ye values weather-container mei kuch div pade hue hai unmei daalni hai
                       const cityName=document.querySelector("[data-cityName]");
                       const countryIcon=document.querySelector("[data-countryIcon]");
                       const desc=document.querySelector("[data-weatherDesc]");
                       const weatherIcon=document.querySelector("[data-weatherIcon]");
                       const temp=document.querySelector("[data-temp]");
                       const windspeed=document.querySelector("[data-windSpeed]");
                       const humidity=document.querySelector("[data-humidity]");
                       const cloudiness=document.querySelector("[data-cloudiness]");
                        
                       //fetch values from weatherInfo object and put it to UI elements
                        cityName.innerText= weather_details?.name;   // weatherdetails ke andar .name ke naamka object hoga is object mei city ka naam hoga jo ki humei display karana hai
                                                                     // weatherInfo?.name ismei city ka naam hoga
                       countryIcon.src= `https://flagcdn.com/144x108/${weather_details?.sys?.country.toLowerCase()}.png`; 
                       /*weather_details?.sys?.country isse mujhe country id mil gayi ab cdn ke link se countryID dwara country 
                         flag fetch karunga aur ussey countryIcon wale element kr src mei daalunga to country image dikh jayegi*/

                         desc.innerText =  weather_details?.weather?.[0]?.description;
                          // weatherdetails ke andar mei agaya weather ke andar weather ke andar 0th index mtlb 1st element mei description waale element par  
                          desc.innerText= desc.innerText.charAt(0).toUpperCase() + desc.innerText.slice(1);
                         weatherIcon.src=weatherIcon.src = `http://openweathermap.org/img/w/${weather_details?.weather?.[0]?.icon}.png`; 
                         temp.innerText = `${weather_details?.main?.temp.toFixed(2)} °C`;
                         console.log(temp.innerText);
                         windspeed.innerText = `${weather_details?.wind?.speed.toFixed(2)}m/s`;
                         humidity.innerText = `${weather_details?.main?.humidity}%`;
                         cloudiness.innerText = `${weather_details?.clouds?.all}%`;

                }


                /* weather info in JSON format after calling API- 
                    
                  {
                      "coord":{
                               "lon":73.85,
                               "lat":18.52
                            },
                            "weather":[
                               {
                                  "id":800,
                                  "main":"Clear",
                                  "description":"clear sky",
                                  "icon":"01n"
                               }
                            ],
                            "base":"stations",
                            "main":{
                               "temp":298.74,
                               "feels_like":298.06,
                               "temp_min":298.74,
                               "temp_max":298.74,
                               "pressure":1012,
                               "humidity":27,
                               "sea_level":1012,
                               "grnd_level":939
                            },
                            "visibility":10000,
                            "wind":{
                               "speed":3.59,
                               "deg":300,
                               "gust":5.21
                            },
                            "clouds":{
                               "all":3
                            },
                            "dt":1738417233,
                            "sys":{
                               "country":"IN",
                               "sunrise":1738373886,
                               "sunset":1738414688
                            },
                            "timezone":19800,
                            "id":1259229,
                            "name":"Pune",
                            "cod":200
                        }
                 */


           const grantAccessButton=document.querySelector("[data-grantAccess]");
           grantAccessButton.addEventListener("click", getLocation); // getLocation ye ek function hai

           function getLocation()
              {
                   if(navigator.geolocation)  // agar geolocation ka support us device mei available hai to
                      {
                           navigator.geolocation.getCurrentPosition(showPosition);  //showPosition ye ek function hai neeche define kr rha hun isko
                      } 
 
                   else
                      {
                          //HW to show an alert for no geolocation support availaable
                      }   
              }

       function showPosition(position)
           {
                 const userCoordinates={
                                 lat: position.coords.latitude,
                                 lon: position.coords.longitude,

                 }

                 // ab in coordinates ko storage seesion mei save karenge
                 sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));
                 // ab is latitude,longitude ko session storage mei store to kr liya ab inhe display karana hai
                 fetchUserWeatherInfo(userCoordinates);
           }     

      /* search bar mei jo functionalities hai vo */
       
     // 1) search bar mei mai jo input city ka dunga vo pehele fetch krna hoga
        const searchInput=document.querySelector("[data-search_City]");

    // 2) jab mei searchbar img ke upar click karunga to ek eventlistner add krna padega
    search_cityBar.addEventListener("submit",(e)=>
                            {
                                  e.preventDefault();
                                  let cityName=searchInput.value; 

                                  if(cityName==="")
                                     {
                                        return;
                                     }
                                  
                                    else
                                      {
                                         fetchSearchWeatherInfo(cityName);
                                      }
                            }
         )


       async function fetchSearchWeatherInfo(city) 
          {
               // 1) loader ka GIF dikhana padega
               loading_screen.classList.add("activeclass");
              //2) jo purana weather dikh raha tha usey remove kr diya
               info.classList.remove("activeclass");
               info.classList.remove("mt");
               //3) 
               grantAccessContainer.classList.remove("activeclass");

               try{
                  const response = await fetch(
                             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
                   );

                   // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`

                   const data=await response.json();
                   //remove loader
                   loading_screen.classList.remove("activeclass");
                   info.classList.add("activeclass");
                   renderWeatherInfo(data);
               }

               catch(err)
                  {
                     //hw
                  }

          }  

/* mera waala code

 const f1=()=>    // search weather wala
    {   
         //removed location
      //   a.classList.add("activeclass");
      info.classList.add("activeclass");
      
         console.log("123");
    };


 async function getlocation()
      {    
          if(navigator.geolocation)
              {
                   navigator.geolocation.getCurrentPosition(give_loc);
               }
          else
             {
                console.log("geolocation not available");
             }
      }
  
  function give_loc(position)
     {
           let lat=position.coords.latitude;
           let longi=position.coords.longitude;
           console.log(lat);
           console.log(longi);
      } 


      const f2=()=>{     // grant location wala
            getlocation();
            grantAccessContainer.classList.add("removebg");
            info.classList.add("activeclass");
          
          
     };
   
     const f3=()=>   // to remove the location wala div when you click on grant access and search weather
       {
              
       }
     

       const on_location=()=>
          {
            grantAccessContainer.classList.add("addbg");
              // remove search bar 
              search_cityBar.classList.add("removebg");
              // remove information
          } 

          const getsearchbar=()=>
              {
                  search_cityBar.classList.add("activeclass");
                  grantAccessContainer.classList.add("removebg");
                //  d.classList.add("removebg");

              }
                */