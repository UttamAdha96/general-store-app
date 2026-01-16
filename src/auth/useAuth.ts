import { useEffect, useState } from "react";
import { User } from "./auth.types";

/**
 * MOCK USER (acts like DB for now)
 * Later you replace this with API / Firebase
 */
const MOCK_USER = {
  id: "1",
  name: "Uttam Adha",
  email: "uttam@gmail.com",
  password: "123456",
};

let currentUser: User | null = null;
const listeners: Array<(user: User | null) => void> = [];

/**
 * Single source of truth for user state
 */
function setUser(user: User | null) {
  currentUser = user;
  listeners.forEach((listener) => listener(user));
}

export const useAuth = () => {
  const [user, setLocalUser] = useState<User | null>(currentUser);

  /**
   * Subscribe / unsubscribe correctly
   * This FIXES your infinite loop + stale state issues
   */
  useEffect(() => {
    listeners.push(setLocalUser);

    return () => {
      const index = listeners.indexOf(setLocalUser);
      if (index !== -1) listeners.splice(index, 1);
    };
  }, []);

  /**
   * REAL login logic
   * RETURNS boolean → UI decides what to do
   */
  const login = (email: string, password: string): boolean => {
    console.log("LOGIN CALLED");

    if (
      email === MOCK_USER.email &&
      password === MOCK_USER.password
    ) {
      setUser({
        id: MOCK_USER.id,
        name: MOCK_USER.name,
        email: MOCK_USER.email,
      });
      return true;
    }

    return false;
  };

  /**
   * Signup (still mock, but logical)
   */
  const signup = (
    name: string,
    email: string,
    password: string
  ): boolean => {
    if (!name || !email || !password) return false;

    setUser({
      id: "2",
      name,
      email,
    });

    return true;
  };

  /**
   * Logout must CLEAR state globally
   */
  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    signup,
    logout,
  };
};
