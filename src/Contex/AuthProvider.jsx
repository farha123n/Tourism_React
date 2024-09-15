import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, signOut } from "firebase/auth";
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation


import auth from "../firebaseConfig";
// Initialize Firebase Auth

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader]=useState(true);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut=()=>{
        setLoader(true);
        signOut(auth);
    }
 
    useEffect(()=>{
     const unSubscribe=   onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
            setUser(currentUser);
            setLoader(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { user, createUser, signInUser,logOut,loader };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
