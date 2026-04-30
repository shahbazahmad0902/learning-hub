import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/user.types";


type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;fsdfsdfsdfsdfsfdsdfsdffd
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({ name: "Shahbaz" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;