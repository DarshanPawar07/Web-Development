import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";

  const[loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);

  /* posts ek array hai jiske andar object ka poora data hoga jo API call se aayega */

  async function fetchProductData() 
     {
           setLoading(true);

           try{
                
               const resultt =  await fetch(API_URL);
               const data= await resultt.json();
               setPosts(data);
               
               
              }

           catch{
                
                console.log("Error occured");
                setPosts([]);
           }

           setLoading(false);
     }

     useEffect(function f1()
           {
               fetchProductData();
           },[])

     return(

         <div>
              {
                  loading? (<Spinner></Spinner>):
                 
                  posts.length>0  ?
                     (
                         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
                               {
                                     posts.map(function f2(post)
                                      { return <Product key={posts.id} post={post}></Product>  } )
                               }
                               
                          </div> 
                     ):

                   (
                      <div className="flex justify-center items-center">
                         <p> No data found</p>
                      </div>
                   )
              }
         </div>

     ) 
};

export default Home;


   