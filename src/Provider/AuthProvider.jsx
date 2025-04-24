import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'
import UseAxiosPublic from '../hooks/UseAxiosPublic'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const axiosPublic = UseAxiosPublic();
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('CurrentUser-->', currentUser);
  
      if (currentUser) {
        const userInfo = {
          email: currentUser?.email
        };
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            console.log('JWT response:', res.data);
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
            }
          })
          .catch(error => {
            console.error('JWT fetch error:', error);
          });
      } else {
        localStorage.removeItem('access-token');
      }
  
      setUser(currentUser);
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider