import { useContext } from "react";
import { AuthContext } from "./Context";
import Brands from "./Brands";
import LatestCar from "./Catagory/LatestCar";
import Branch from "./Branch";


const Banner = () => {
     const { bannerImg, isDarkMode } = useContext(AuthContext)
     return (
          <div className={`bg-${isDarkMode ? 'gray-800' : 'red-50'} text-${isDarkMode ? 'white' : 'black'}`}>
               <div className="">
               <div className="md:flex justify-between items-center">

                    <div className="flex justify-center flex-1">
                         <img className="max-h-[250px] max-w-[300px] lg:max-h-[500px] lg:max-w-[800px]" src={bannerImg} alt="" />
                    </div>

                    <div className="flex-1 max-w-sm mx-auto">


                         <h2 className="text-3xl lg:text-6xl font-bold">BUY YOUR <br /> NEXT <span className="text-red-900">DREAM</span> CAR</h2>
                         <br />
                         <button className="bg-red-900 text-white text-lg font-medium py-2 px-4 rounded-sm">Contact Us</button>

                    </div>

               </div>
          </div>
          <LatestCar></LatestCar>
          <Brands></Brands>
          <Branch></Branch>
          </div>
     );
};

export default Banner;