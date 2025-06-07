import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => 
  {
       return(

          <div className="min-h-screen">
                <Navbar />
                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           <Routes>
                               <Route path="/" element={<Home />} />
                               <Route path="/cart" element={<Cart />} />
                              </Routes>
                        </div>
          </div>

      )
  };

export default App;
