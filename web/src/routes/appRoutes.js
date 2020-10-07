import React from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from "../pages/Login";
function AppRoutes(){
    return(
        <BrowserRouter >
        <Route path='/login' component={Login}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        </BrowserRouter>
    )
}
export default AppRoutes