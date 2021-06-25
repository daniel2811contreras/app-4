import { useEffect, useState } from 'react'
import Nav from './Nav'
import { ipapi }  from '../../api/ipapi'
import { controlError } from '../../funtion'

const Home = () => {
const [IpApi, setIpApi] = useState(null)

const dalegers = (malo) => {
    const vegadores = {
        loki: () => 'tro',
        tanos: () => 'iron-man'
    }
   return vegadores[malo] ? vegadores[malo]() : 'falcom'
} 
 
useEffect(() => {
    ipapi().then(res => {
        if(JSON.stringify(res) !== JSON.stringify(IpApi) ) setIpApi(res);
        console.log(IpApi);
    }).catch( err => controlError(err) )
})

return (<div>
    <div>
        <Nav />
        <h1>Home</h1>
        ------------
        <h3>Loki ataca</h3>
        utron Vs {dalegers('utron')}
    </div>
</div> )
}

export default Home