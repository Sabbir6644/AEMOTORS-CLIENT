import Swal from "sweetalert2";


const AddProduct = () => {
     const handleAdd= e=>{
          e.preventDefault();
          const name = e.target.name.value;
          const brandName = e.target.brandName.value;
          const type = e.target.type.value;
          const price = e.target.price.value;
          const rating = e.target.rating.value;
          const details = e.target.details.value;
          const image = e.target.image.value;
         const newProduct={name, brandName, type, price, rating, details, image }

          fetch('', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(newProduct)
             })
               .then(res => res.json())
               .then(data =>{
                    console.log(data)
                    if (data.acknowledged) {
                         Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Coffee added successful',
                              showConfirmButton: false,
                              timer: 1500
                            })
                         
                    }
               } )
     }

     return (
          <div className="max-w-3xl mx-auto h-screen items-center flex justify-center ">
          <div className="py-5">
               <div className="text-center">
               <h2 className="text-3xl font-bold">Add New Product</h2>

               </div>
          <form onSubmit={handleAdd} className="max-w-[665px] mx-auto my-5">
               <div className="flex gap-5">
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input type="text" placeholder="Product name" name="name" className=" rounded-md p-2 border w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Brand Name</span>
                         </label>
                         <input type="text" placeholder="Brand Name" name="brandName" className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
               </div>


               <div className="flex gap-5">
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Type</span>
                         </label>
                         <input type="text" placeholder="Type" name="type" className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Price</span>
                         </label>
                         <input type="text" placeholder="Price" name="price"  className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
               </div>

               <div className="flex gap-5">
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Rating</span>
                         </label>
                         <input type="text" placeholder="Rating" name="rating" className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                         <label className="label">
                              <span className="label-text">Short description</span>
                         </label>
                         <input type="text" placeholder="Short description" name="details" className="rounded-md p-2 border w-full max-w-xs" />
                    </div>
               </div>
               
               <div className="form-control w-full max-w-[665px]">
                              <label className="label">
                                   <span className="label-text">Image(url)</span>
                              </label>
                              <input type="text" placeholder="Image(url)" name="image" className="rounded-md p-2 border w-full " />
                         
                         </div>
               <div className=" gap-5 mt-5">
                    
                    <input type="submit" value="Add Product" className="input border w-full bg-red-900 text-white " />
               </div>

          </form>
          </div>
     </div>
     );
};

export default AddProduct;