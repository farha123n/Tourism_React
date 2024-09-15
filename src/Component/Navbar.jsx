import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../Contex/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const {user,logOut} =useContext(AuthContext);
  const[open,setOpen]=useState(false);
    const list = (
        <div className="bg-white lg:bg-sky-500 lg:flex">
          <li className="mx-4" ><NavLink to="/" className="flex"><FaHome className="pt-2" /> Home</NavLink></li>
          <li className="mx-4"><NavLink to="/allTouristSpot" className='flex'> <MdTour className="pt-2"/>All tourist spot</NavLink></li>
         <li className="mx-4"><NavLink to="/addTouristSpot" className="flex"> <MdAddBox className="pt-2" />Add tourist spot</NavLink></li>
          {user&&  <li><NavLink to="/myList" className='flex'><CiBoxList /> My list</NavLink></li>}
          
        </div>
    );
    return (
        <div className="font-body bg-sky-500 p-2 flex justify-between ">
          
          <div className=" flex ">
            <div><img className="h-40" src="https://t3.ftcdn.net/jpg/01/21/05/58/240_F_121055831_PELQCbjwuiTc6DSaguE8u6OJUjJ1VC0l.jpg" alt="" /></div>
           </div>
           <div >
           <div className="text-2xl mt-16   md:hidden" onClick={()=>setOpen(!open)}>
           {
            open?<AiOutlineMenu ></AiOutlineMenu>:
            <ImCross  className="my-auto"/>
           }
           </div>
          <ul className={`lg:flex lg:gap-7 duration-100  absolute md:static z-50 ${open?"top-40 -left-60":"top-40 left-0"} items-center h-full text-2xl text-black lg:text-white`} >
               {list}
            </ul>
           </div>
           {user?(
           <div className="h-full  items-center justify-center">
           <div className="mr-4 tooltip tooltip-bottom mt-6" data-tip={user.displayName}>
           <img src={user.photoURL} alt="User Avatar" className="w-8 h-8 rounded-full" />
         </div>
         <div className="mt-16 md:mt-4">
           <button onClick={logOut} className="text-yellow-400 text-xl">Signout</button>
           </div >
           </div>):
            <div className="mt-12 md:mt-0">
             <ul className="lg:flex items-center h-full lg:gap-5 text-xl text-yellow-300">
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to='/register'>Register</NavLink>
                </li>
             </ul>
           </div>
}
        </div>
    );
};

export default Navbar;