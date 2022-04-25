import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Avatar, Box, ButtonBase, Typography
} from '@mui/material'

// assets
import { IconMenu2 } from '@tabler/icons'
import ProfileButton from './ProfileButton'

function Header({ handleDrawerToggle }) {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          marginRight: '40px',
          display: 'flex'
        }}
      >
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              '&:hover': {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light
              }
            }}
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.5rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ADMIN PANEL
      </Typography>
      <ProfileButton />
      {/* <DarkMode /> */}
    </>
  )
}

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  handleDrawerToggle: PropTypes.func
}

export default Header
