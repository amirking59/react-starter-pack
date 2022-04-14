import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Avatar, Box, ButtonBase, useMediaQuery, Typography
} from '@mui/material'

// assets
import { IconMenu2 } from '@tabler/icons'

function Header({ handleDrawerToggle }) {
  const theme = useTheme()

  const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      {!matchUpLg && (
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
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.5rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      )}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ADMIN PANEL
      </Typography>
    </>

  )
}

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  handleDrawerToggle: PropTypes.func
}

export default Header
