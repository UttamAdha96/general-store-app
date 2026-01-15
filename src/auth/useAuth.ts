import { useEffect, useState } from "react";
import { User } from "./auth.types";

let currentUser: User | null = null;
const listeners: Array<(user: User | null) => void> = [];

function setUser(user: User | null) {
  currentUser = user;
  listeners.forEach((l) => l(user));
}

export const useAuth = () => {
  const [user, setLocalUser] = useState<User | null>(currentUser);

  useEffect(() => {
    listeners.push(setLocalUser);
    return () => {
      const index = listeners.indexOf(setLocalUser);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

 const login = (email: string, _password: string) => {
  console.log("LOGIN CALLED");
  setUser({
    id: "1",
    name: "Demo User",
    email,
  });
};

  const signup = (name: string, email: string, _password: string) => {
    setUser({
      id: "1",
      name,
      email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,     // ← THIS is what you were missing
    login,
    signup,
    logout,
  };
};
