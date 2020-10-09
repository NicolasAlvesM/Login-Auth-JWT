import React from 'react';
import SignIn from '../pages/SignIn'
import {createStackNavigator} from '@react-navigation/stack'
import CreateAccount from '../pages/CreateAccount';
const AuthStack = createStackNavigator();
function AuthRoutes(){
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name="CreateAccount" component={CreateAccount}/>
    </AuthStack.Navigator>
)}
export default AuthRoutes