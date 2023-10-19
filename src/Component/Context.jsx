/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../public/firebase.config";
import logo from "/src/images/logo.png"
import bannerImg from "/src/images/banner.png"
import corollaImg from "/src/images/corolla.jpg"
import cruiserImg from "/src/images/cruiser.webp"
import glanzaImg from "/src/images/glanza.jpg"
import car1 from "/src/images/car1 (1).png"
import car2 from "/src/images/car1 (2).png"
import car3 from "/src/images/car1 (3).png"
import car4 from "/src/images/car1 (4).png"
import car5 from "/src/images/car1 (5).png"
import car6 from "/src/images/car1 (6).png"


export const AuthContext = createContext()
const Context = ({ children }) => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState();
     // loaded created user from database
     const [loadedProduct, setLoadedProduct] = useState();
     useEffect(() => {
          fetch('https://user-management-server-koayagszg-servers-projects.vercel.app/product/')
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
          user, logo,corollaImg,cruiserImg,
          bannerImg,glanzaImg,
          loadedProduct, signInWithGoogle,
          logout, loading, setLoading, createUser, userLogin,
          car1, car2, car3, car4, car5, car6
     }
     // { toyotaImg, bmwImg, teslaImg, fordImg, hondaImg, mercedesImg }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
             
          </AuthContext.Provider>
     );
};

export default Context;