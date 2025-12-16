import React, { createContext } from "react";

export const authDataContext = createContext();
function AuthContext({ children }) {
  let serverUrl = "https://ai-powered-e-commerce-website-backend-e7kk.onrender.com";

  let value = {
    serverUrl,
  };
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
