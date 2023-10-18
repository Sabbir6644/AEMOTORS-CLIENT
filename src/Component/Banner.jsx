import { useContext } from "react";
import { AuthContext } from "./Context";
import Brands from "./Brands";


const Banner = () => {
     const { bannerImg } = useContext(AuthContext)
     return (
          <div>
               <div className="bg-red-50">
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

          <Brands></Brands>
          </div>
     );
};

export default Banner;