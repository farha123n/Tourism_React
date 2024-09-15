import { Navigate, NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useRef, useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import {  sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebaseConfig";

import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { AuthContext } from "../Contex/AuthProvider";



const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const {signInUser}=useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
        const result = await signInUser(email, password);
        console.log("successful", result.user);
        e.target.reset();
        toast.success("Login successful");
        navigate(location?.state? location.state:'/');
    } catch (error) {
        toast.error(error.message);
    }
};

    return (
       <div>
        
               <div className="flex justify-center items-center h-full m-10">
            <div className="bg-orange-500 p-10">
             <form onSubmit={handleLogin} method="post">
             <div className="text-4xl text-center my-6">Login Here</div>
              <div className="">
                 
                <input className="p-5 m-4" type="email" name="email" placeholder="Enter email" />
              </div>
              <div>
                <input className="p-5 m-4" type="password" name="password" placeholder="Enter password" />
              </div>
               <div className="">
                 <p className="flex justify-center items-center my-8 bg-slate-400 rounded-xl text-2xl p-4">    <button type="submit">Login</button></p>
               <p className="text-center text-xl text-white">Not registered!!, register<NavLink to="/register" className="text-sky-700"> here</NavLink></p>
               </div>
             </form>
            </div>
        </div>
       </div>
    
    );
};

export default Login;