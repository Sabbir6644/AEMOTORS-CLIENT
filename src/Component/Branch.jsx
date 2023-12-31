import { useContext } from "react";
import { AuthContext } from "./Context";


const Branch = () => {
     const {isDarkMode} = useContext(AuthContext);
     return (
          <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} text-${isDarkMode ? 'white' : 'black'}`}>
          <div className="mt-5">
               <div className={`bg-${isDarkMode ?'gray-800': 'red-900'} py-5`}>
               <h2 className="text-center text-5xl font-bold text-white">Our Branches</h2>
               </div>
               <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">

                    <div className="w-full p-4 text-center  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                         <h5 className="mb-2 text-3xl font-bold  dark:text-white">DHAKA</h5>
                         <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Uttara Centre 102, Shahid Tajuddin Ahmed Sarani, Tejgaon,Dhaka. <br /> Tel No: +880241025160-4, +880241025170-4 <br />  Mob No: +8801708-484771 & +8801708-484772</p>
                    </div>
                   
                    <div className="w-full p-4 text-center  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                         <h5 className="mb-2 text-3xl font-bold  dark:text-white">SYLHET</h5>
                         <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">31/3, Antorongo, North Kazitulia, Electric Supply Road, Sylhet. <br />Tel No: +880241025161-4, +880241025171-4 <br />  Mob No: +8801708-484772 & +8801708-484773</p>
                    </div>

               </div>
          </div>
          </div>
     );
};

export default Branch;