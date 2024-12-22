import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Protect = ({children}) => {
    const { user } = useAuth();
    if(!user){
        //redirect
        return <Navigate to="/signIn" />
    }
    return children;
}

export default Protect;