import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "./Context";



const Home = () => {
const {loadedProduct}= useContext(AuthContext)

     return (
          <div className="max-w-7xl mx-auto">
               <Header></Header>
               


               <Outlet></Outlet>
          </div>
     );
};

export default Home;