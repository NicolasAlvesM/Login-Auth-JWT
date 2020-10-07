import React from 'react'
import { useAuth } from './context/auth'
import AuthRoutes from './routes/authRoutes'
import AppRoutes from './routes/appRoutes'
function Routes(){
    const {signed}=useAuth()
    return(
        !signed ? <AuthRoutes/>:<AppRoutes/>
    )
}
export default Routes