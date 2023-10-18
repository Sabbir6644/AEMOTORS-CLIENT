import { useEffect, useState } from "react";
import MyCart from "./MyCart";




const Cart = () => {
     const [cartProduct, setCartProduct] = useState();
     useEffect(() => {
          fetch('https://user-management-server-nhx03o8q8-servers-projects.vercel.app/cart')
               .then(res => res.json())
               .then(data => setCartProduct(data))
     }, [cartProduct])
     
     return (
          <div>
               <div className="">
                    <table className="table">
                         {/* head */}
                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Name</th>
                                   <th>Price</th>
                                   <th>Proceed</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   cartProduct?.map((product, index) => <MyCart key={product._id} product={product} index={index}></MyCart>)
                              }

                         </tbody>
                    </table>
               </div>

          </div>
     );
};

export default Cart;