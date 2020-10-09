import React, { useState } from 'react'
import { useAuth } from '../../context/auth'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from '../SignIn/styles'
import api from '../../services/api'
function Dashboard(){
    const [userID,setUserID]=useState('')
    const {signOut}=useAuth()
    async function handleSignOut(){
        signOut()
    }
    async function tokenTest(){
        const {data}=await api.get('/me')
        setUserID(data)
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={tokenTest} style={styles.loginButton}><Text>Test Token</Text></TouchableOpacity>
            <Text>{userID.message}{userID.id}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.loginButton}><Text>Logout</Text></TouchableOpacity>
        </View>
    )
}
export default Dashboard