/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FordCar = ({car}) => {
     const { brandName, image, name, price, type, rating, _id } = car;
     return (
        
               <div className="card border">
  <figure><img className="w-4/5 mx-auto" src={image} alt="car" /></figure>
  <div className="card-body">
    <h2 className=" text-2xl font-bold text-red-900">
      {name}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <div className="flex justify-between">
    <h2 className="card-title"> Brand: {brandName}</h2>
    <h2 className="card-title"> Type: {type}</h2>
    </div>
    <div className="flex justify-between">
    <h2 className="card-title"> Price: {price}</h2>
    <h2 className="card-title"> Rating: {rating}</h2>
    </div>
    {/* /product/:_id */}
    <div className="card-actions justify-end"> 
      <Link to={`/product/${_id}`}><div className="badge badge-outline">Details</div></Link> 
      <Link to={`/${_id}`}><div className="badge badge-outline">Update</div></Link>
    </div>
  </div>
</div>
          
     );
};

export default FordCar;