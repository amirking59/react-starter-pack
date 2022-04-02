import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase } from '@mui/material'

// assets
import { IconMenu2 } from '@tabler/icons'

function Header({ handleDrawerToggle }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: 228,
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
          <IconMenu2 stroke={1.5} size="1.3rem" />
        </Avatar>
      </ButtonBase>
    </Box>
  )
}

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  handleDrawerToggle: PropTypes.func
}

export default Header
