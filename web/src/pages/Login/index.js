import React,{useRef} from 'react'
import {Link,Redirect,useHistory} from 'react-router-dom'
import Input from '../../components/Input'
import {useAuth} from '../../context/auth'
import './styles.css'
function Login(){
  const history=useHistory()
  const {signIn,signed}=useAuth()
  const emailInputRef=useRef(null)
  const passwordInputRef=useRef(null)
  async function handleSubmit(e){  
    e.preventDefault()
    const email=emailInputRef.current?.value
    const senha=passwordInputRef.current?.value
    signIn(email,senha)
    if(signed)
    history.push('/dashboard')
  }
    return (
      <>
      {signed?<Redirect to="/dashboard"/>:<></>}
      <div className="App">
        <div className='form'>
          <form onSubmit={handleSubmit} action="">
            <Input ref={emailInputRef} label='Email' type='email'/>
            <Input ref={passwordInputRef} label='Senha' type='password'/>
            <div className='login'>
            <Link to='forget'>Forgot your password?</Link>
            <input type="submit" value="Login"/>
            </div>
            <Link to='createAccount'>Don't have any account? Sign Up</Link>
          </form>
        </div>
      </div>
    </>
    )
}
export default Login