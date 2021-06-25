import { useContext } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

import { AuthContext } from '../../../context/auth'

const PrivateRoute = ({ children, ...rest }) => {
    const { Auth } = useContext(AuthContext)
    const location = useLocation()
    // console.log(Auth)
    return (
      Auth ? <Route {...rest}>{children}</Route>
           : <Redirect  to={{
            pathname: "/Login",
            state: { from: location.pathname }
          }} />
    );
  }

export default PrivateRoute