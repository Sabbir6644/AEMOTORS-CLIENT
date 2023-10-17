import { useContext } from "react";
import { AuthContext } from "./Context";
import Users from "./Users";


const User = () => {
     const { createdUser } = useContext(AuthContext)
     return (
          <div>
               <div className="">
                    <table className="table">
                         {/* head */}
                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Details</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   createdUser?.map((user, index) => <Users key={user._id} user={user} index={index}></Users>)
                              }

                         </tbody>
                    </table>
               </div>

          </div>
     );
};

export default User;