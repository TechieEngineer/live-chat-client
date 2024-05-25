import React from 'react'
import logo from '/home/philomath/Desktop/Visual /React/Try Messaging app/my-app/src/images/live-chat 52.png'
import { TextField, Button } from '@mui/material'

function Login() {
    return (
        <div className='login-container'>
            <div className="image-container">
                <img src={logo} alt="Logo" className='welcome-logo' />
            </div>
            <div className="login-box">
                <p className='login-text'>Login to your Account</p>

                <TextField id="standard-basic" label="Enter User Name" variant="outlined" />

                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />

                <Button variant="outlined">Login</Button>
            </div>
        </div>
    )
}

export default Login
