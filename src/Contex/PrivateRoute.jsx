import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext);
    const location=useLocation();
    if(loader){
        return  <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
            
    
    );
};

export default PrivateRoute;