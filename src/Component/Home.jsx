import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext} from "react";
import { AuthContext } from "./Context";




const Home = () => {

     const {isDarkMode} = useContext(AuthContext);
     return (
          <div>
               <Header></Header>
            
               <div className="max-w-7xl mx-auto min-h-[50vh]">
               <Outlet></Outlet>
               </div>
              
               <div className={`${isDarkMode ?'bg-gray-800':'bg-red-900'} text-white`}>
               <Footer></Footer>
               </div>
  

          </div>
     );
};

export default Home;