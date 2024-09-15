import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from 'firebase/auth';
import auth from "../firebaseConfig"
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Contex/AuthProvider";



const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  let err;

  const handleRegister = (e) => {
      e.preventDefault();
      setRegisterError('');
      setSuccess('');
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
       
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      const name = form.get('name');
      const photo_Url = form.get('photo_Url');
      console.log(name);
      console.log(photo_Url);
      if (!email) {
        console.log("Please enter your email address");
        toast.error("Please enter your email address");
        setRegisterError("Please enter your email address")
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("Please enter a valid email address");
        toast.error("Please enter a valid email address");
        setRegisterError("Please enter a valid email address")
        return;
    }
    else if(!regex.test(password)){
    err=" password must have an uppercase must have an lower case  must be more than 6 letters";
    console.log(err);
    toast.error(err);
    setRegisterError(err);

    return;
    }
      // Use createUser function from AuthContext
      createUser(email, password)
         .then(result=>{
          console.log(result.user);
          updateProfile(auth.currentUser, {
            
            displayName: name, photoURL:photo_Url
          })
         }) ;
         toast.success("registration successful");
        setSuccess("registration successfull")          
  };
    return (
        <div className="bg-pink-300">
            
              <p className="text-3xl text-center font-bold">Register here</p>
            <div className=" flex justify-center items-center">
               
            <div className="bg-pink-950 p-6 m-8 ">
          
             <form onSubmit={handleRegister} method="post">
              <div className="lg:grid lg:grid-cols-2">
              <p className="my-4">
                    <p className="text-2xl text-center text-white ">Enter your Name</p>
                   <input className="p-4 text-xl m-4" type="text" name="name" placeholder="name" />
                </p>
                <p className="my-4">
                    <p className="text-2xl text-center text-white ">Enter your Email</p>
                   <input className="p-4 text-xl m-4" type="email" name="email" placeholder="email" />
                </p>
                <p className="my-4">
                    <p className="text-2xl text-center text-white ">Enter your Photourl</p>
                   <input className="p-4 text-xl m-4" type="text" name="photo_Url" placeholder="Photo Url" />
                </p>
                <p className="my-4">
                    <p className="text-2xl text-center text-white ">Enter your Email</p>
                   <input className="p-4 text-xl m-4" type="password" name="password" placeholder="password" />
                </p>
              </div>
                <div className="flex justify-center items-center">
                <button className="p-2 m-2 text-xl text-white bg-yellow-700 w-32 " type="submit">Submit</button>
                </div>
              <p className="text-white text-center">All ready registered, click <NavLink to="/login" className="text-red-800">here</NavLink> to Login</p>
              {registerError && <div className="text-red-700">{registerError}</div>}
              {success && <div className="text-green-600">{success}</div>}
             </form>
                
            </div>
            </div>
        </div>
    );
};

export default Register;