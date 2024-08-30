import { createContext, useEffect, useState } from "react";
import { auth } from './../Firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signUpUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false)
            } else {
                setUser(null)
            }
        })

        return () => unSubscribe();
    }, []);

    const authInfo = {
      signUpUser,
      logInUser,
      logOutUser,
      user,
      loader,
      forgetPassword,
    };
    return <AuthContext.Provider value={ authInfo }>
        {children}
    </AuthContext.Provider>
};
export default AuthProvider;