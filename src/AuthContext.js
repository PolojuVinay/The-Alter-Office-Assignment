import React, {createContext, useContext, useEffect, useState} from 'react'
import {auth} from './firebase'
import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    setUser(result.user)
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{user, loginWithGoogle, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
