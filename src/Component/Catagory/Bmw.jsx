import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context";
import BmwCar from "./BmwCar";


const Bmw = () => {
     const [loadedData, setLoadedData] = useState([]);
     const {logo, glanzaImg, corollaImg, cruiserImg} = useContext(AuthContext)

     useEffect(() => {
          fetch('https://user-management-server-koayagszg-servers-projects.vercel.app/product/brand/Bmw')
               .then(res => res.json())
               .then(data => setLoadedData(data))
     }, [])

     return (
          <div>
          {/* Slider start */}
          <div className="carousel w-full">
<div id="item1" className="carousel-item w-full">
<img src={logo} className="w-full" />
</div> 
<div id="item2" className="carousel-item w-full">
<img src={glanzaImg} className="w-full" />
</div> 
<div id="item3" className="carousel-item w-full">
<img src={corollaImg} className="w-full" />
</div> 
<div id="item4" className="carousel-item w-full">
<img src={cruiserImg} className="w-full" />
</div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
<a href="#item1" className="btn btn-xs">1</a> 
<a href="#item2" className="btn btn-xs">2</a> 
<a href="#item3" className="btn btn-xs">3</a> 
<a href="#item4" className="btn btn-xs">4</a>
</div>
          {/* Slider start */}
           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mx-auto my-5">
           {
                loadedData?.map((car) => <BmwCar key={car._id} car={car}></BmwCar>)
           }
           </div>
           

      </div>
     );
};

export default Bmw;