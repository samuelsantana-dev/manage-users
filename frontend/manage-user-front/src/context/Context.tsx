import { useContext, createContext, type ReactNode } from "react";
import type { AuthContextType } from "../types/User";

interface AuthProviderProps {
  children: ReactNode;
  value: AuthContextType;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children, value }: AuthProviderProps) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthValue(){
    const context = useContext(AuthContext);
    if(context == null){
        throw new Error("useAuthValue deve ser usado dentro de um AuthProvider.");
    }
    return context;
}