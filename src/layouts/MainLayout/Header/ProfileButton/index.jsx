import { useState } from 'react'

import BaseButton from '@mui/material/ButtonBase'
import Avatar from '@mui/material/Avatar'
import SettingsIcon from '@mui/icons-material/Settings'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import { styled, useTheme } from '@mui/material/styles'
import DarkMode from '../DarkMode'

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
  const [open, setOpen] = useState(false)

  return (
    <Tooltip
      placement="bottom-end"
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      componentsProps={{
        tooltip: {
          sx: {
            boxShadow: 2,
            minWidth: '360px',
            mr: '6px',
            mt: '16px !important',
            borderRadius: '12px',
            padding: '8px 16px',
            background: theme.palette.background.secondary.light
          }
        }
      }}
      title={(
        <Stack divider={<Divider variant="middle" />} spacing={2}>
          <Typography color={theme.palette.text.primary}>HELLO amir</Typography>
          <Box
            sx={{
              borderRadius: '12px',
              px: '12px',
              py: '12px',
              background: theme.palette.background.secondary.main
            }}
          >
            <DarkMode />
          </Box>

        </Stack>
      )}
    >
      <Button onClick={() => setOpen(!open)} theme={theme}>
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
    </Tooltip>
  )
}

export default ProfileButton
