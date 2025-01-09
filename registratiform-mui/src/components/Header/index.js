import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import style from '../../components/Header/style.module.css'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <header className={style.header}>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <Link to={'/login'}><Button>Login Page</Button></Link>
                <Link to={'/registration'}><Button>Registration Page</Button></Link>
            </ButtonGroup>
        </header>
    )
}

export default Header