import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";




const Home = () => {


     return (
          <div>
                <Header></Header>
               <div className="max-w-7xl mx-auto min-h-[50vh]">
               <Outlet></Outlet>
               </div>
              
               <Footer></Footer>
          </div>
     );
};

export default Home;