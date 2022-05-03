import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { TOGGLE_DARK_MODE } from 'src/store/actions.js'

export default function Dashboard() {
  const theme = useTheme()
  const dispatch = useDispatch()

  const isDarkMode = useSelector((state) => state.customization.isDarkMode)

  const handleToggleDarkMode = () => {
    dispatch({ type: TOGGLE_DARK_MODE })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '9px',
        color: theme.palette.text.primary
      }}
    >
      <Typography variant="caption">Dark mode</Typography>
      <Switch checked={isDarkMode} onChange={handleToggleDarkMode} />
    </Box>

  )
}
