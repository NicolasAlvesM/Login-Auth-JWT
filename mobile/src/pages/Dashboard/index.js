import React from 'react'
import { useAuth } from '../../context/auth'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from '../SignIn/styles'
function Dashboard(){
    const {signOut}=useAuth()
    async function handleSignOut(){
        signOut()
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignOut} style={styles.loginButton}><Text>Logout</Text></TouchableOpacity>
        </View>
    )
}
export default Dashboard