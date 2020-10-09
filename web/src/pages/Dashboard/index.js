import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import api from '../../services/api'
import './styles.css'
function Dashboard(){
    const history=useHistory()
    const {logOut,user}=useAuth()
    const [userID,setUserID]=useState('')
    function handleLogOut(){
        logOut()
        history.push('/login')
    }
    async function handleTokenTest(){
        const {data}=await api.get('/me')
        setUserID(data)
    }
    return(
        <div id="dashboard-page">
            <div id="dashboard-content">
                <p>User: {user.user}</p>
                <p>Email: {user.email}</p>
                <button onClick={handleTokenTest}>Test your token</button>
                    <p>{userID.message}</p>
                    <p>{userID.id}</p>
                    <br/>
                <button onClick={handleLogOut}>LogOut</button>
            </div>

        </div>
    )
}
export default Dashboard
