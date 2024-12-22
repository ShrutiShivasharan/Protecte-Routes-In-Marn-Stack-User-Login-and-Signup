import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
 
    const [user, setUser] = useState(()=>{
        return JSON.parse(localStorage.getItem("userData")) || null;
    });

    // login Function
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
    }

    //logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem("userData");
    }

    return (
       <AuthContext.Provider value={{user, login, logout}}>
        {children}
       </AuthContext.Provider> 
    )

}


//custome hook
export const useAuth = () => {
    return useContext(AuthContext);
}
