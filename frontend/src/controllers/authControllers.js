import axios from "axios";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();
export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login = async (inputs) => {
        const res = await axios.post("http://localhost:5005/api/auth/login", inputs, {
            withCredentials:true
        });

        setCurrentUser(res.data);
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            { children }
        </AuthContext.Provider>
    );
};