// import React from 'react';
import { toast } from 'react-toastify';

export const controlError = err => console.log(err); 

export const GoValidate = 
    (valida, criterios , mensaje = {}, posicion = 'bottom-right', tiempo = 5000) => {
    const optionToast = {
        position: posicion,
        autoClose: tiempo,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    } 
    
    const keys = Object.keys(valida)
    const results =  keys.map((valido, j) =>{ 
       return ({
        valida: () => { 
            let res = true
            criterios[valido].forEach(rule => {if(validador(rule, valida[valido]) === false) res = false})
            return res
        }, 
        key: valido, index: j}) 
        }
    ) 
    
    results.forEach(result => {
        if(result.valida() === false)  toast.error(mensaje[result.key], optionToast)  
    })
    const result = results.find(e => e.valida()===false)
    !result && (mensaje.success && toast.success(mensaje.success, optionToast)) 
    
    return result ? false : true
}

const validador = (rule, value) => {
    const rules = {
        String: () => typeof(value) === 'string',
        Required: () => value !== '' && value !== undefined && value !== null
    }
    return rules[rule]()
}