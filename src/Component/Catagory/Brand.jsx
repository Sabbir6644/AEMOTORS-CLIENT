/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({brand}) => {
     const{image, name , brandName}= brand;
     return (
          <Link to={`/${brandName}`}>
          <div className="h-[400px] flex flex-col justify-center bg-gray-100 p-2">
               <img className="h-72 max-w-96" src={image} alt="" />
               <h2 className="text-7xl font-bold text-center">{name}</h2>
          </div>
          </Link>
     );
};

export default Brand;