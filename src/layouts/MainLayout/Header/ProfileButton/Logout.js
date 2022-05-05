import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { LOGOUT } from 'src/store/actions.js'

function Logout() {
  const theme = useTheme()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '9px',
        color: theme.palette.text.primary
      }}
    >
      <Button onClick={() => logout()} color="error" variant="text">Logout</Button>
    </Box>
  )
}

export default Logout
