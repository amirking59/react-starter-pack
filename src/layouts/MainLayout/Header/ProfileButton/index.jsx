import { useState } from 'react'

import BaseButton from '@mui/material/ButtonBase'
import Avatar from '@mui/material/Avatar'
import SettingsIcon from '@mui/icons-material/Settings'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import ClickAwayListener from '@mui/base/ClickAwayListener'

import { styled, useTheme } from '@mui/material/styles'

import useAuth from 'src/hooks/useAuth.js'
import DarkMode from './DarkMode'
import Logout from './Logout.js'

const Button = styled(BaseButton)(({ theme }) => ({
  padding: '8px',
  background: theme.palette.primary.light,
  borderRadius: '50000px',
  marginRight: '8px',

  '&:hover': {
    '.MuiSvgIcon-root': {
      color: theme.palette.primary.dark
    }
  }
}))

function ProfileButton() {
  const theme = useTheme()
  const { activeRole } = useAuth()
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
            boxShadow: 1,
            minWidth: '260px',
            marginTop: '8px !important',
            marginRight: '-12px',
            borderRadius: '16px',
            padding: '16px',
            background: theme.palette.modal.background.main
          }
        }
      }}
      title={(
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Stack divider={<Divider variant="middle" />} spacing={1.5}>
            <Typography color={theme.palette.text.primary}>
              HELLO amir, you are
              {` ${activeRole}`}
            </Typography>
            <Box
              sx={{
                borderRadius: '12px',
                paddingX: '12px',
                paddingY: '12px',
                background: theme.palette.modal.background.dark
              }}
            >
              <DarkMode />
            </Box>
            <Logout />
          </Stack>
        </ClickAwayListener>
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
