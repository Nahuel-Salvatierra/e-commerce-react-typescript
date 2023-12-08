import { useContext } from "react";
import AuthContext from './../context/AuthProvider'

export default function useAuth(){
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth hook must be used inside authContext')
  }
  return context
}