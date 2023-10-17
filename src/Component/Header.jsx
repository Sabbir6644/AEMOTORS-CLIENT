
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context';


const Header = () => {
  const {logo, user, logout}= useContext(AuthContext);

     const link= <>
     <Link to={'/'}>Home</Link>
     <Link to={'/addProduct'}>Add Product</Link>
     <Link to={'/user'}>My Cart</Link>

     </>
const handleLogOut =()=>{
  logout()
 }
     return (
          <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {link} {
              user? <div>
                
              <img className="rounded-full h-10 w-10" src={user?.photoURL} alt="" />
              <button onClick={handleLogOut} className=' font-semibold'>Logout</button>
              </div>  :
              <Link to={'/login'}><button className=' font-semibold'>Login</button></Link>
            }
              </ul>
            </div>
            <img className='h-12 w-16' src={logo} alt="" />
            <h2 className='ml-2 text-5xl font-semibold'>A<span className='text-red-900'>E</span>MOTORS</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 text-lg font-bold">
        {link}
            </ul>
          </div>
          <div className="navbar-end ">
         <div className='hidden md:block'>
         {
              user? <div className="flex gap-2 items-center">
                <h4 className="text-lg font-semibold">{user?.displayName}</h4>
              <img className="rounded-full h-14 w-14" src={user?.photoURL} alt="" />
              <button onClick={handleLogOut} className="btn">Logout</button>
              </div>  :
              <Link to={'/login'}><button className="btn">Login</button></Link>
            }
         </div>

          
            
          </div>
        </div>
     );
};

export default Header;