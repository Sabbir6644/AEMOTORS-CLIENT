/* eslint-disable react/prop-types */


import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context";



const Brand = ({brand}) => {
     const {isDarkMode} = useContext(AuthContext);
     const{image, name , brandName}= brand;
     return (
          <Link to={`/${brandName}`}>
               <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} text-${isDarkMode ? 'white' : 'black'}`}>
          <div className="h-[400px] flex flex-col justify-center shadow p-2">
               <img className="h-60 w-80 mx-auto" src={image} alt="" />
               <h2 className="text-5xl font-bold text-center">{name}</h2>
          </div>
          </div>
          </Link>
     );
};

export default Brand;