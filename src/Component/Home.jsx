import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext} from "react";
import { AuthContext } from "./Context";




const Home = () => {

     const {isDarkMode} = useContext(AuthContext);
     return (
          <div className={`bg-${isDarkMode ? 'gray' : 'white'} text-${isDarkMode ? 'white' : 'black'}`}>
                <Header></Header>
               
               <div className="max-w-7xl mx-auto min-h-[50vh]">
               <Outlet></Outlet>
               </div>
              
               <Footer></Footer>
          </div>
     );
};

export default Home;