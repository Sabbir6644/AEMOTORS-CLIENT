/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../public/firebase.config";
import logo from "/src/images/logo.png"
import bmwImg from "/src/images/bmw.png"
import bannerImg from "/src/images/banner.png"
import fordImg from "/src/images/ford.png"
import hondaImg from "/src/images/Honda-Logo.png"
import mercedesImg from "/src/images/Mercedes-Benz.png"
import teslaImg from "/src/images/tesla.jpg"
import toyotaImg from "/src/images/toyota.png"


export const AuthContext = createContext()
const Context = ({ children }) => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState();
     // loaded created user from database
     const [loadedProduct, setLoadedProduct] = useState();
     useEffect(() => {
          fetch('https://user-management-server-n86cuk474-servers-projects.vercel.app/product/')
               .then(res => res.json())
               .then(data => setLoadedProduct(data))
     }, [loadedProduct])
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

     const authInfo = {
          user, logo, toyotaImg,
          bannerImg, bmwImg, teslaImg,
          fordImg, hondaImg, mercedesImg,
          loadedProduct, signInWithGoogle,
          logout, loading, setLoading, createUser, userLogin
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}

          </AuthContext.Provider>
     );
};

export default Context;