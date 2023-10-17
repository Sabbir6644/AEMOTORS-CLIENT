/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../public/firebase.config";
import logo from "/src/images/logo.png"


export const AuthContext = createContext()
const Context = ({ children }) => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState();
     // loaded created user from database
     const [createdUser, setCreatedUser] = useState();
     useEffect(() => {
          fetch('https://user-management-server-jz7pc3f2c-servers-projects.vercel.app/users')
               .then(res => res.json())
               .then(data => setCreatedUser(data))
     }, [createdUser])
     // google login
     const googleProvider = new GoogleAuthProvider();
     const signInWithGoogle = () => {
          signInWithPopup(auth, googleProvider)
          setLoading(true)
     }
     // Login with emai and pass
     const userLogin = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }
     // sign up with email
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     // logout
     const logout = () => {
          setLoading(true)
          return signOut(auth)

     }
     // Auth state change
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false)
          });
          return () => {
               unSubscribe()
          }
     }, [])

     const authInfo = { user, logo, createdUser, signInWithGoogle, logout, loading, setLoading, createUser, userLogin }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}

          </AuthContext.Provider>
     );
};

export default Context;