import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import './styles.css'
function Dashboard(){
    const history=useHistory()
    const {logOut,user}=useAuth()
    function handleLogOut(){
        logOut()
        history.push('/login')
    }
    return(
        <div id="dashboard-page">
            <div id="dashboard-content">
                <p>User: {user.user}</p>
                <p>Email: {user.email}</p>
                <button onClick={handleLogOut}>LogOut</button>
            </div>

        </div>
    )
}
export default Dashboard