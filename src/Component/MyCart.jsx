/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const MyCart = ({product, index}) => {
     const {name, price, _id}= product;
     const handleDelete=(_id)=>{
      fetch(`https://user-management-server-nhx03o8q8-servers-projects.vercel.app/cart/${_id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data.deletedCount>0) {
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Your order cancel successfully',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
     }
     return (
 
              <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{price}</td>
                <td><button className="font-semibold mr-5">Check Out</button> <button onClick={()=>handleDelete(_id)} className="font-semibold">Cancel</button></td>
              </tr>
         
        
     );
};

export default MyCart;