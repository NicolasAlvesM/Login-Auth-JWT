import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Text, View,Button } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import api from '../../services/api'
import styles from '../SignIn/styles'
function CreateAccount(){
    const navigator=useNavigation()
    const refInputEmail=useRef()
    const refInputSenha=useRef()
    const refInputUser=useRef()
    async function handleCreateAccount(){
        const email=refInputEmail.current.value
        const senha=refInputSenha.current.value
        const user=refInputUser.current.value
        if(email&&senha&&user){
        api.post('/',{user,email,senha})
        navigator.goBack()
        }
    }
    return(
        <View style={styles.container}>
            <TextInput  style={styles.inputs} placeholder="User" ref={refInputUser} onChangeText={text=>refInputUser.current.value=text}/>
            <TextInput  autoCompleteType='email' keyboardType="email-address" textContentType="emailAddress" style={styles.inputs} placeholder="Email" ref={refInputEmail} onChangeText={text=>refInputEmail.current.value=text}/>
            <TextInput onChangeText={text=>refInputSenha.current.value=text} ref={refInputSenha} secureTextEntry={true} style={styles.inputs} placeholder="Senha"></TextInput>
            <Button onPress={handleCreateAccount} title="Crie sua conta"/>
        </View>
    )
}
export default CreateAccount