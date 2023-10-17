/* eslint-disable react/prop-types */


const Users = ({user, index}) => {
     const {name, email}= user;
     return (
     
         
             
              <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td><button>Update</button></td>
              </tr>
         
        
     );
};

export default Users;