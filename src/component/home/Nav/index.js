import { useContext } from 'react'
import {
    Link
} from 'react-router-dom'
import { AuthContext } from '../../../context/auth'

const Nav = () => {
    const { Auth, setAuth } = useContext(AuthContext)
    return (
        <div>
            <Link to='/admin' >Admin</Link>
            { !Auth 
                ? <Link to='/login' >Login</Link>
                : <Link to='/' onClick={() => setAuth(false)} >Logout</Link>
            }
        </div>
    )
} 

export default Nav