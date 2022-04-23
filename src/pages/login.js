import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const [showErr, setshowErr] = useState(false);

    let userName = 'admin';
    let userPassword = 'admin'

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault()

        if(userName === name && userPassword === password){
            setshowErr(false)

            navigate('/')
        } else{
            setshowErr(true)
        }
    }   

    return ( 
        <div className='login-container'>
            <div className='log-home'>
                <h1>Your to do <br/>List</h1>
            </div>
            <div className='login-pannel'>
                <div className='lp-wrap'>
                    <h2>login</h2>
                    <form onSubmit={(e)=>handleLogin(e)}>
                        <div>
                            <label htmlFor="name">User Name </label><br></br>
                            <input  value={name} id="name" type="text" onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="name">Password </label><br></br>
                            <input value={password} id="age" type="text" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button>Login</button>
                    </form>
                    {   showErr &&
                        <div className='err-msg'>
                            <p>User name or password is incorrect</p>
                        </div>
                    }
                </div>
                
            </div>
            
            


        </div>
     );
}
 
export default Login;