import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const CarsApi = [
    {
        marca:'Ford', categorie: [
            {semet: 'A', name: 'fiesta', modelo: 2019 },
            {semet: 'B', name: 'focus', modelo: 2019 },
            {semet: 'C', name: 'EcoSport', modelo: 2019 }
        ] 
    },
    {
        marca:'Masda', categorie: [
            {semet: 'A', name: '2', modelo: 2019 },
            {semet: 'B', name: '3', modelo: 2019 },
            {semet: 'C', name: 'CX-5', modelo: 2019 }
        ] 
    },
] 

const Admin = () => {

    const [CarList, setCarList] = useState()
    const { t } = useTranslation()

    useEffect(() => {
        setTimeout(() => {
            setCarList(CarsApi)
        }, 500);
    }, [])

    return(
    <div>
        <div>{t('admin.title')} </div>
        <div>{t('admin.greetings', {name: 'daniel'} )} </div>
        <div>
            {CarList && CarList.map((car, i)=> <div key={`car-${i}`}> 
                <label>{car.marca}</label>
                <div>
                    {car.categorie.map((dato, j)=> <div key={`dato-${j}`}>
                        <label className='name' >{dato.name} - </label>
                        <label>{dato.semet} - </label>
                        <label>{dato.modelo}</label>
                    </div> )}
                </div>
            </div>)}
        </div>
    </div>
    )
} 

export default Admin