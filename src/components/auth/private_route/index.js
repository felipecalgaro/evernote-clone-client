import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    localStorage.getItem('user') ? Component : <Navigate to='/login' />
  )
}

export default PrivateRoute