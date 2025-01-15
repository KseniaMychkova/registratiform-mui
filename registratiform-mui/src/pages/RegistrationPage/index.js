import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Registration() {
    const [inpEmail, setInpEmail] = useState('')
    const [inpPassword, setInpPassword] = useState('')
    const [inpConfPassword, setInpConfPassword] = useState('')
    const setInputEmailValue = (e) => {
        setInpEmail(e.target.value)
    }
    const setInputPasswordValue = (e) => {
        setInpPassword(e.target.value)
    }
    const setInputConfPasswordValue = (e) => {
        setInpConfPassword(e.target.value)
    }

    const isValid = () => {
        if (!/^[a-z0-9\-=+*%$#!]+@+[a-z]+\.[a-z]+$/gm.test(inpEmail)) throw new Error('Введена не корректная почта')
        if (inpPassword !== inpConfPassword) throw new Error('Пароли не совпадают')
    }

    function sign() {
        try {
            isValid() 
            alert('success');
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', marginTop: '40px' }}>
            <h2 style={{ fontSize: '30px' }}>Registration</h2>
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
            <TextField style={{ maxWidth: '300px' }}
                onChange={setInputConfPasswordValue}
                id="standard-confirmPassword-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />
            <Button onClick={sign} variant="outlined">sign up</Button>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <p >Already have an account?</p>
                <Link to={'/login'}><Button variant="text">sign in</Button></Link>
            </div>
        </div>
    )
}
export default Registration