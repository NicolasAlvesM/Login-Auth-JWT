import React,{useContext,createContext} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import api from '../services/api'
export const AuthContext=createContext({signed:false})
export function AuthProvider({children}){
    const [user,setUser]=useState('')
    useEffect(()=>{
        const storagedUser=JSON.parse(localStorage.getItem("user"))
        const storagedToken=localStorage.getItem("token")
        if(storagedUser&&storagedToken){
        api.defaults.headers['Authorization']=`Bearer ${storagedToken}`
            setUser(storagedUser)
        }
    },[])
    async function signIn(email,senha){
        api.post('/login',{
            email,senha
            }).then(res=>{
                localStorage.setItem("user",JSON.stringify(res.data.user))
                localStorage.setItem("token",res.data.token)
                api.defaults.headers['authorization']=`Bearer ${res.data.token}`
                setUser(res.data.user)
            }).catch(err=>alert("Senha ou email errados"))
    }
    function logOut(){
        localStorage.clear()
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{signed:!!user,user,signIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context=useContext(AuthContext)
    return context
}