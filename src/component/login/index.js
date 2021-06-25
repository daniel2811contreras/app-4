import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
// context
import { AuthContext } from '../../context/auth'
// style
import { inputStyle } from '../../style'
const Loign = () => {
    const { setAuth } = useContext(AuthContext)
    const [Name, setName] = useState('')
    const [Pass, setPass] = useState('')
    const history = useHistory()

    const goLogin = () => {
        if(Name ==='dani' && Pass==='123') {
            setAuth(true)
            history.push('/admin')
        }
    }  

    return (
        <div>
            <div className={inputStyle} >
                <label>Nombre de usuario</label>
                <input value={Name} onChange={ e => setName(e.target.value) } />
            </div>
            <div className={inputStyle} >
                <label className='red'>Clave</label>
                <input value={Pass} onChange={ e => setPass(e.target.value) } />
            </div>
            <button onClick={goLogin}>Login</button>
        </div>
    )
}

export default Loign