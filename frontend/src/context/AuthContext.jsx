import { createContext, useState } from "react";

// creates a shared authentication context || allows components to access user and token data
const AuthContext = createContext();

// function stores authentication data and makes it available to child components 
export function AuthProvider({ children }) {
    // stores the logged-in user information
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null 
    );
    // stores the JWT token for protected API requests
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );
    // provides authentication data to components wrapped inside AuthProvider
    return (
        <AuthContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;