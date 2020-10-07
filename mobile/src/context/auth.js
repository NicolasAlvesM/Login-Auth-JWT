import React,{createContext,useContext,useEffect,useState} from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage';
const AuthContext=createContext({})
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect( () => {
        async function loadStorageData(){
            const storegedUser=await AsyncStorage.getItem('@RNAuth:user')
            const storegedToken=await AsyncStorage.getItem('@RNAuth:token')
            if (storegedUser&&storegedToken){
                api.defaults.headers['Authorization']=`Bearer ${storegedToken}`
                setUser(JSON.parse(storegedUser))
            }
            setLoading(false)
        }
        loadStorageData()
    },[])
    async function signIn(email,senha){
        const res=await api.post('/login',{email,senha}).catch(err=>console.log(err))
        if(!res)
            return console.log('erro')
        const {token,user}=res.data
        api.defaults.headers['Authorization']=`Bearer ${token}`
        setUser(user)
        await AsyncStorage.setItem('@RNAuth:user',JSON.stringify(user))
        await AsyncStorage.setItem('@RNAuth:token',token)
    }
    function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null)
        })  
    }
    return(
        <AuthContext.Provider value={{signed:!!user,user,signIn,signOut,loading}}>
            {children}
        </AuthContext.Provider>
    )
}   
export function useAuth(){
    const context=useContext(AuthContext)
    return context
}