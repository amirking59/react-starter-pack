import BaseButton from '@mui/material/ButtonBase'
import Avatar from '@mui/material/Avatar'
import SettingsIcon from '@mui/icons-material/Settings'

import { styled, useTheme } from '@mui/material/styles'

const Button = styled(BaseButton)(({ theme }) => ({
  padding: '8px',
  background: theme.palette.primary.light,
  borderRadius: '50000px',

  '&:hover': {
    '.MuiSvgIcon-root': {
      color: theme.palette.primary.dark
    }
  }
}))

function ProfileButton() {
  const theme = useTheme()

  return (
    <Button theme={theme}>
      <Avatar
        sx={{
          height: '28px',
          width: '28px',
          fontSize: '12px',
          marginRight: '14px'
        }}
      >
        H
      </Avatar>
      <SettingsIcon
        fontSize="medium"
        sx={{
          transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          color: theme.palette.background.default
        }}
      />
    </Button>
  )
}

export default ProfileButton
