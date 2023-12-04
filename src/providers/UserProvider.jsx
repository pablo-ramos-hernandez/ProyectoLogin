import { useState, createContext } from "react"
import React from "react"

export const UserContext = createContext()
/**
 * Creamos dos funciones que vamos a utilizar como hook
 */

export const UserProvider = ({children}) => {
    
  const [user, setUser] = useState("")
  const [isLogin, setIsLogin] = useState("false")

  const login = () => {
    setIsLogin("true")
  }

  const outlogin = () => {
    setUser(null)
    setIsLogin("false")
  }
  return (
      <UserContext.Provider value={{user,setUser, isLogin, login}}>
        {children}
      </UserContext.Provider>
  )
}