import { useLoaderData } from "react-router-dom";


const ProductDeatils = () => {

          const {name, brandName, type, price, rating, details, image, _id } = useLoaderData()
     return (
<div>
<div className=" flex flex-col md:flex-row">

<div className="flex-1">
 <figure className="max-w-3xl mx-auto"><img className="w-full" src={image} alt=""/></figure>
 </div>

  <div className="flex flex-1 flex-col items-center justify-center">
    <h2 className="text-3xl font-bold text-red-900">{name}</h2>
    <p>{details}.</p>
   
      <button className="btn bg-red-900 text-white">Add to Cart</button>
    
  </div>
</div>
</div>
     );
};

export default ProductDeatils;