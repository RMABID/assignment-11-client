import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updatedUser = (updatedProfile) => {
    return updateProfile(auth.currentUser, updatedProfile);
  };

  const logInGoogle = () => {
    return signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const userLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      subscribe;
    };
  }, []);

  const value = {
    createUser,
    logInUser,
    updatedUser,
    logInGoogle,
    userLogout,
    user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
