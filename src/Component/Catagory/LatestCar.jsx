import { useContext } from "react";
import { AuthContext } from "../Context";


const LatestCar = () => {
     const {car1, car2, car3, car4, car5, car6, isDarkMode}= useContext(AuthContext)
     return (
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-red-900'} mt-1 text-${isDarkMode ? 'white' : 'black'}`}>
          
               <h2 className="text-center text-5xl font-bold text-white  py-5 ">Latest Cars</h2>

               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-auto">
               {/* Toyota */}
              
               <div className={`h-[400px] flex flex-col justify-center  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2`}>
               <img className="h-72 max-w-96" src={car1} alt="" />
               </div>

               {/* Bmw */}
      
               <div className={`h-[400px] flex flex-col justify-center  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2`}>
               <img className="h-72 max-w-96" src={car2} alt="" />
       
               </div>

               {/* Tesla */}
  
               <div className={`h-[400px] flex flex-col justify-center  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2`}>
               <img className="h-72 max-w-96" src={car3} alt="" />
          
               </div>

              {/* Ford */}
   
              <div className={`h-[400px] flex flex-col justify-center  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2`}>
               <img className="h-72 max-w-96" src={car4} alt="" />
              
               </div>

               {/* Honda */}
    
               <div className={`h-[400px] flex flex-col justify-center  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2`}>
               <img className="h-72 max-w-96" src={car5} alt="" />
              
               </div>
   
               {/* mercedes */}

               <div className={`h-[400px] flex flex-col justify-center  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2`}>
               <img className="h-72 max-w-96" src={car6} alt="" />
              
               </div>

               
               
               </div>
          </div>
         
     );
};

export default LatestCar;