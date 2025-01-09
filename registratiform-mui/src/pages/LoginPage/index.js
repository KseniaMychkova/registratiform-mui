import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'

function Login() {
     const [inpEmail, setInpEmail] = useState('')
        const [inpPassword, setInpPassword] = useState('')
        const setInputEmailValue = (e) => {
            setInpEmail(e.target.value)
        }
        const setInputPasswordValue = (e) => {
            setInpPassword(e.target.value)
        }
    
   
        function sign() {
            try {
                if (!/^[a-z0-9\-=+*%$#!]+@+[a-z]+.[a-z]+$/gm.test(inpEmail)) throw new Error('Введена не корректная почта')
                alert('success');
            } catch (error) {
                alert(error);
            }
        }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', marginTop: '40px' }}>
            <h2 style={{ fontSize: '30px' }}>Login</h2>
            <TextField style={{ maxWidth: '300px' }}
            onChange={setInputEmailValue}
                id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="standard"
            />
            <TextField style={{ maxWidth: '300px' }}
            onChange={setInputPasswordValue}
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />
            <Button onClick={sign} variant="outlined">sign in</Button>
        </div>
    )
}

export default Login