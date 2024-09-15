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
        <>
          <li ><NavLink to="/" className="flex"><FaHome className="pt-2" /> Home</NavLink></li>
          <li><NavLink to="/allTouristSpot" className='flex'> <MdTour className="pt-2"/>All tourist spot</NavLink></li>
         <li><NavLink to="/addTouristSpot" className="flex"> <MdAddBox className="pt-2" />Add tourist spot</NavLink></li>
          {user&&  <li><NavLink to="/myList" className='flex'><CiBoxList /> My list</NavLink></li>}
          
        </>
    );
    return (
        <div className="font-body bg-sky-500 p-2 flex justify-between ">
          
          <div className=" flex ">
            <div><img className="h-40" src="https://t3.ftcdn.net/jpg/01/21/05/58/240_F_121055831_PELQCbjwuiTc6DSaguE8u6OJUjJ1VC0l.jpg" alt="" /></div>
           </div>
           <div >
           <div className="text-2xl md:hidden" onClick={()=>setOpen(!open)}>
           {
            open?<AiOutlineMenu ></AiOutlineMenu>:
            <ImCross />
           }
           </div>
          <ul className={`lg:flex lg:gap-7 duration-100 absolute md:static z-50 ${open?"top-36 -left-60":"top-36 left-10"} items-center h-full text-2xl text-black lg:text-white`} >
               {list}
            </ul>
           </div>
           {user?(
           <div className="h-full  items-center justify-center">
           <div className="mr-4 tooltip tooltip-bottom mt-6" data-tip={user.displayName}>
           <img src={user.photoURL} alt="User Avatar" className="w-8 h-8 rounded-full" />
         </div>
         <div className="mt-4">
           <button onClick={logOut} className="text-yellow-400 text-xl">Signout</button>
           </div >
           </div>):
            <div>
             <ul className="flex items-center h-full lg:gap-5 text-xl text-yellow-300">
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink>Register</NavLink>
                </li>
             </ul>
           </div>
}
        </div>
    );
};

export default Navbar;