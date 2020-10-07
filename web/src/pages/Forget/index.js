import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
function Forget(){
    return (
        <div className="App">
            <div className='form'>
                <form action="">
                    <Input label='Email' type='email'/>
                    <div className='login'>
                        <input type="submit" value="Recuperar senha"/>
                    </div>
                    <Link to='login'>Return to sign in</Link>
                </form>
            </div>
            </div>
    )
}
export default Forget