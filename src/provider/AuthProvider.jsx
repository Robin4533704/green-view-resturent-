import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,

  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // ✅ renamed
} from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";

import app from '../fierbase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
     const currentUser = auth.currentUser;
  if (!currentUser) {
    return Promise.reject(new Error("No user is logged in"));
  }
    return updateProfile (currentUser, updateData);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signin,
    logout,
    loading,
    setLoading,
  updateUser, // ✅ provide the correct function
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
