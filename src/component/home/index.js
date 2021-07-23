/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Nav from './Nav'
import { ipapi }  from '../../api/ipapi'
import { controlError } from '../../funtion'

const Home = () => {
const [IpApi, setIpApi] = useState(null)
const [Cont, setCont] = useState(0)
const [Cont1, setCont1] = useState(0)

const dalegers = (malo) => {
    const vegadores = {
        loki: () => 'tro',
        tanos: () => 'iron-man'
    }
   return vegadores[malo] ? vegadores[malo]() : 'falcom'
} 
const goApis = () => {
    ipapi().then(res => {
        if(JSON.stringify(res) !== JSON.stringify(IpApi) ) setIpApi(res);
        console.log(IpApi);
    }).catch( err => controlError(err) )
}  

useEffect(() => {
    goApis()
},[])

useEffect(() => {
    console.log('cont --->', Cont, 'cont1----->', Cont1);
}, [Cont, Cont1])

return (<div>
    <div>
        <Nav />
        <h1>Home</h1>
        ------------
        <h3>Loki ataca</h3>
        utron Vs {dalegers('utron')}

        <pre>{Cont}</pre>    
        <pre>{Cont1}</pre>    
        <button onClick={()=> setCont(Cont+1)}>+1</button>
        <button onClick={()=> setCont1(Cont1+1)}>+1</button>
        <button onClick={goApis}>go to api</button>
    </div>
</div> )
}

export default Home