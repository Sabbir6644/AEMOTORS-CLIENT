import { useContext, useEffect, useState } from "react";

import Brand from "./Catagory/Brand";
import { AuthContext } from "./Context";


const Brands = () => {
     const {isDarkMode} = useContext(AuthContext);
     const [fackData, setFackData] = useState([]);
     useEffect(() => {
          fetch('/brandData.json')
               .then(res => res.json())
               .then(data => setFackData(data))
     }, [])
     return (
          <div className="mt-5">
               <div className={` text-${isDarkMode ? 'white' : 'red-900'} mb-5`}>
               <h2 className="text-center text-5xl font-bold ">Our Brands</h2>
               </div>
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">


                    {
                         fackData?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
               </div>


          </div>
     );
};

export default Brands;