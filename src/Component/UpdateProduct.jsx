import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
const {name, brandName, type, price, rating, details, image, _id } = useLoaderData()

     const handleAdd= e=>{
          e.preventDefault();
          const name = e.target.name.value;
          const brandName = e.target.brandName.value;
          const type = e.target.type.value;
          const price = e.target.price.value;
          const rating = e.target.rating.value;
          const details = e.target.details.value;
          const image = e.target.image.value;
         const updateProduct={name, brandName, type, price, rating, details, image }

          fetch(`https://user-management-server-koayagszg-servers-projects.vercel.app/product/${_id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(updateProduct)
          })
          .then(res=> res.json())
          .then(data=>{
               console.log(data);
               if (data.modifiedCount> 0) {
                    Swal.fire({
                         position: 'center',
                         icon: 'success',
                         title: 'Product updated successfully',
                         showConfirmButton: false,
                         timer: 1500
                       })
               }
          })

     }
     return (
          <div className="max-w-3xl mx-auto flex justify-center ">
          <div className="py-5">
               <div className="text-center">
               <h2 className="text-3xl font-bold">Update Product</h2>

               </div>
          <form onSubmit={handleAdd} className="max-w-[665px] mx-auto my-5">
               <div className="flex flex-col w-full md:flex-row gap-5">
                    <div className="form-control flex-1">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input type="text" defaultValue={name} placeholder="Product name" name="name" className=" rounded-md p-2 border w-full " />
                    </div>
                    <div className="form-control flex-1">
                         <label className="label">
                              <span className="label-text">Brand Name</span>
                         </label>
                         <select name="brandName" className="rounded-md p-2 border w-full max-w-xs">
                                        <option value="others">Select one</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Bmw">Bmw</option>
                                        <option value="Tesla">Tesla</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Mercedes">Mercedes-Benz</option>
                                   </select>
                    </div>
               </div>


               <div className="flex flex-col w-full md:flex-row gap-5">
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Type</span>
                         </label>
                         <input type="text" placeholder="Type" defaultValue={type} name="type" className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Price</span>
                         </label>
                         <input type="text" placeholder="Price" defaultValue={price} name="price"  className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
               </div>

               <div className="flex flex-col w-full md:flex-row gap-5">
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Rating</span>
                         </label>
                         <input type="text" placeholder="Rating" defaultValue={rating} name="rating" className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Short description</span>
                         </label>
                         <input type="text" placeholder="Short description" defaultValue={details} name="details" className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
               </div>
               
               <div className="form-control w-full max-w-[665px]">
                              <label className="label">
                                   <span className="label-text">Image(url)</span>
                              </label>
                              <input type="text" placeholder="Image(url)" defaultValue={image} name="image" className="rounded-md p-2 border w-full " />
                         
                         </div>
               <div className="flex flex-col w-full md:flex-row gap-5 mt-5">
                    
                    <input type="submit" value="Update Product" className="input border w-full bg-red-900 text-white " />
               </div>

          </form>
          </div>
     </div>
     );
};

export default UpdateProduct;