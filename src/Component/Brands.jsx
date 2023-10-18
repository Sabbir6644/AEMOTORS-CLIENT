import { useContext } from "react";
import { AuthContext } from "./Context";
import { Link } from "react-router-dom";


const Brands = () => {
     const {toyotaImg, bmwImg, teslaImg, fordImg, hondaImg, mercedesImg}= useContext(AuthContext)
     return (
          <div className="mt-5">
               <h2 className="text-center text-5xl font-bold text-red-900 mb-5 ">Our Brands</h2>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
               {/* Toyota */}
               <Link to={'/toyota'}>
               <div className="h-[400px] flex flex-col justify-center bg-gray-100 p-2">
               <img className="h-72 max-w-96" src={toyotaImg} alt="" />
               </div>
               </Link>
               {/* Bmw */}
               <Link to={'/bmw'}>
               <div className="h-[400px] flex flex-col justify-center bg-gray-100 p-2">
               <img className="h-72 max-w-96" src={bmwImg} alt="" />
               <h2 className="text-7xl font-bold text-center">BMW</h2>
               </div>
               </Link>
               {/* Tesla */}
               <Link to={'/tesla'}>
               <div className=" h-[400px] flex flex-col justify-center bg-gray-100 p-2">
               <img className="h-72 max-w-96" src={teslaImg} alt="" />
               <h2 className="text-7xl font-bold text-center">Tesla</h2>
               </div>
               </Link>
              {/* Ford */}
              <Link to={'/ford'}>
              <div className="h-[400px] flex flex-col justify-center bg-gray-100 p-2">
               <img className="h-72 max-w-96" src={fordImg} alt="" />
               <h2 className="text-7xl font-bold text-center">Ford</h2>
               </div>
              </Link>
               {/* Honda */}
               <Link to={'/honda'}>
               <div className="h-[400px] flex flex-col justify-center bg-gray-100 p-2">
               <img className="h-72 max-w-96" src={hondaImg} alt="" />
              
               </div>
               </Link>
               {/* mercedes */}
               <Link to={'/mercedes'}>
               <div className="h-[400px] flex flex-col justify-center bg-gray-100 p-2">
               <img className="h-72 max-w-96" src={mercedesImg} alt="" />
              
               </div>
               </Link>
               
               
               </div> 
          </div>
     );
};

export default Brands;