import { createContext, useContext, useState, ReactNode } from "react";
import { IUserResponse } from "../types/io";

interface UserContextType {
  user: IUserResponse | null;
  setUser: (user: IUserResponse | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUserResponse | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro do UserProvider");
  }
  return context;
}
