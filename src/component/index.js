import { 
    BrowserRouter as Router,
    Switch,
    Route
 } from 'react-router-dom'
// component
 import PrivateRoute from './utils/privateRuoter'
 import Home from './home'
 import Admin from './admin'
 import Login from './login'
 import Register from './register'
 import Error403 from './error/403'
 import Error404 from './error/404'

const Navigation = () => {
     return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <PrivateRoute path='/admin' component={Admin} />
                <Route path='/403' component={Error403} />
                <Route path='*' component={Error404} />
            </Switch>
        </Router>
     )
} 

export default Navigation