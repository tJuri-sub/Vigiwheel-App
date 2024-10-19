import { createContext, useState, useContext } from "react";

// Create the context
const AuthContext = createContext();

// Provide the context to the application
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Token state (e.g., updated after login)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
