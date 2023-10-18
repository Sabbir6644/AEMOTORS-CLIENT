import { useEffect, useState } from "react";
import ToyotaCar from "./ToyotaCar";



const Toyota = () => {
     const [loadedData, setLoadedData] = useState([]);

     useEffect(() => {
          fetch('https://user-management-server-koayagszg-servers-projects.vercel.app/product/brand/Toyota')
               .then(res => res.json())
               .then(data => setLoadedData(data))
     }, [])

     console.log(loadedData);
     return (
          <div>
               <div className="bg-green-300 min-h-[500px] my-5">
                    <p className="text-center text-5xl">Slider coming soon...</p>

               </div>
               <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mx-auto my-5">
               {
                    loadedData?.map((car) => <ToyotaCar key={car._id} car={car}></ToyotaCar>)
               }
               </div>
               

          </div>
     );
};

export default Toyota;