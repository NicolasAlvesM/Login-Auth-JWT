import React,{useRef} from 'react';
import styles from './styles'
import { useAuth } from '../../context/auth'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity, Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
function SignIn(){
    const navigate=useNavigation()
    const refInputEmail=useRef()
    const refInputSenha=useRef()
    const {signIn}=useAuth()
    async function handleSignIn(){
        const email=refInputEmail.current?.value
        const senha=refInputSenha.current?.value
        if(email&&senha)
        signIn(email,senha)
    }
    function createAccount(){
        navigate.navigate('CreateAccount')
    }
    return (
        <View style={styles.container}>
            <TextInput  autoCompleteType='email' keyboardType="email-address" textContentType="emailAddress" style={styles.inputs} placeholder="Email" ref={refInputEmail} onChangeText={text=>refInputEmail.current.value=text}/>
            <TextInput onChangeText={text=>refInputSenha.current.value=text} ref={refInputSenha} secureTextEntry={true} style={styles.inputs} placeholder="Senha"></TextInput>
            <TouchableOpacity onPress={handleSignIn} style={styles.loginButton}><Text>Login</Text></TouchableOpacity>
            <Button onPress={createAccount} title="Crie sua conta"/>
        </View>
    )
}
export default SignIn