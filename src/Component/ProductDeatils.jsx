import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDeatils = () => {
     const handleAddToCart=(product)=>{
          fetch('https://user-management-server-nhx03o8q8-servers-projects.vercel.app/cart', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(product)
             })
               .then(res => res.json())
               .then(data =>{
                    console.log(data)
                    if (data.acknowledged) {
                         Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Product add to cart successfully',
                              showConfirmButton: false,
                              timer: 1500
                            })
                         
                    }
               } )

     }

          const {name, brandName, type, price, rating, details, image, } = useLoaderData()
          const product={name, brandName, type, price, rating, details, image }
     return (
<div>
<div className=" flex flex-col gap-5 md:flex-row">

<div className="flex-1">
 <figure className="max-w-3xl mx-auto"><img className="w-full" src={image} alt=""/></figure>
 </div>

  <div className="flex flex-1 flex-col items-center justify-center">
    <h2 className="text-3xl font-bold text-red-900">{name}</h2>
    <p>{details}.</p>
   
      <button onClick={()=>handleAddToCart(product)} className="btn bg-red-900 text-white">Add to Cart</button>
    
  </div>
</div>
</div>
     );
};

export default ProductDeatils;