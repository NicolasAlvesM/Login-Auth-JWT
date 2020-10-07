import React from 'react'
import { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import api from '../../services/api'
function CreateAccount(){
    const emailInputRef=useRef()
    const passwordInputRef=useRef()
    const userInputRef=useRef()
    const history=useHistory()
    function handleSubmit(e){
        e.preventDefault()
        api.post('/',{
            user:userInputRef.current?.value,
            email:emailInputRef.current?.value,
            senha:passwordInputRef.current?.value,
        })
        history.push('/login')
    }
    return (
        <div className="App">
            <div className='form'>
                <form onSubmit={handleSubmit} action="">
                <Input ref={userInputRef} label='Username' type='text'/>
                <Input ref={emailInputRef} label='Email' type='email'/>
                <Input ref={passwordInputRef} label='Senha' type='password'/>
                <div className='create-account'>
                <input type="submit" value="Create Account"/>
                </div>
                <Link to='login'>Already have an account? Sign in</Link>
                </form>
            </div>
        </div>
    )
}
export default CreateAccount