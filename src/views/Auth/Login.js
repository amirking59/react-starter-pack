import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { LOGIN } from 'src/store/actions.js'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = () => {
    dispatch({ type: LOGIN })
    navigate('/', { replace: true })
  }

  return <button type="button" onClick={() => login()}>Login</button>
}

export default Login
