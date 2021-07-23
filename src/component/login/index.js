/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';

// context
import { AuthContext } from '../../context/auth'
// style
import { inputStyle } from '../../style'
// funtion
import { GoValidate }  from '../../funtion'
const Loign = () => {
    const { setAuth } = useContext(AuthContext)
    const [Name, setName] = useState('')
    const [Pass, setPass] = useState('')
    const history = useHistory()

    const validaForm = () => {
        return GoValidate(
            {Name, Pass}, 
            {
                Name: ['String', 'Required'],
                Pass: ['String', 'Required'],
            },
            {
               Name: 'Name incorecto', 
               Pass: 'Pass incorecto', 
            }
        )
    }

    const goLogin = () => {
        const validate = validaForm()
        if(validate) {
            if(Name ==='dani' && Pass==='123') {
                setAuth(true)
                history.push('/admin')
                toast.success(`Hola ${Name}`, {position: 'bottom-right', autoClose: 5000,})
            } else {
                toast.error('usuario no valido', {position: 'bottom-right', autoClose: 5000,})
            }
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
            <button onClick={goLogin} >Login</button>
        </div>
    )
}

export default Loign