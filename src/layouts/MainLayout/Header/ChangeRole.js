import { useTheme } from '@mui/material/styles'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

import useAuth from 'src/hooks/useAuth.js'
import Box from '@mui/material/Box'

function ChangeRole() {
  const theme = useTheme()
  const { userRoles, activeRole, setActiveRole } = useAuth()

  const handleChange = (event) => {
    setActiveRole(event.target.value)
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
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        <Select onChange={(e) => handleChange(e)} value={activeRole}>
          {userRoles.map((role) => <MenuItem key={role} value={role}>{role}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}

export default ChangeRole
