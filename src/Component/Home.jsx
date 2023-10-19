import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext} from "react";
import { AuthContext } from "./Context";




const Home = () => {

     const {isDarkMode} = useContext(AuthContext);
     return (
          <div>
          <div className={`bg-${isDarkMode ? 'gray' : 'white'} text-${isDarkMode ? 'white' : 'black'}`}>
               <Header></Header>
               </div>
               <div className="max-w-7xl mx-auto min-h-[50vh]">
               <Outlet></Outlet>
               </div>
              
               <div className={`bg-${isDarkMode ? 'gray' : 'white'} text-${isDarkMode ? 'white' : 'black'}`}>
               <Footer></Footer>
               </div>
          </div>
     );
};

export default Home;