import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { LOGIN } from 'src/store/actions.js'

const LoginWrapper = styled(Box)(() => ({
  position: 'relative',
  marginTop: '20%',
  display: 'flex',
  gap: '32px',
  flexDirection: 'column',
  alignItems: 'center'
}))

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    dispatch({ type: LOGIN })
    navigate('/', { replace: true })
  }

  return (
    <form onSubmit={login}>
      <LoginWrapper>
        <div>LOGIN</div>
        <TextField
          // required
          size="small"
          label="user name"
        />
        <TextField
          // required
          size="small"
          label="password"
        />
        <Button type="submit" variant="outlined">LOGIN</Button>
      </LoginWrapper>
    </form>
  )
}

export default Login
