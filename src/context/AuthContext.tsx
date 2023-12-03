"use client";
import { createContext, useContext, useEffect, useState } from "react";

import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";

type AuthContextType = {
  currentUser: any;
  signOut: () => void;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>(undefined);

  const path = usePathname();

  const router = useRouter();

  const getCurrentUser = async (userId: any) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        setCurrentUser(userDoc.data());
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const signOut = () => {
    sessionStorage.clear();
    auth.signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log(user)
      if (user && user.uid) {
        getCurrentUser(user.uid);
      }
      else {
        if (path === "/dashboard") {
            router.replace("/");
        }
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
