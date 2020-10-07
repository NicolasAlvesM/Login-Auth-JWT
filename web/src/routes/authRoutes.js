import React from 'react'
import Login from '../pages/Login'
import Forget from '../pages/Forget'
import CreateAccount from '../pages/CreateAccount'
import {BrowserRouter,Route} from 'react-router-dom'
function AuthRoutes(){
    return(
        <BrowserRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/forget' component={Forget}></Route>
        <Route path='/createAccount' component={CreateAccount}></Route>
        </BrowserRouter>
    )
}
export default AuthRoutes