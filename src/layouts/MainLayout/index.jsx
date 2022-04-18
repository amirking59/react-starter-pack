import {
  AppBar, Toolbar, CssBaseline, Box
} from '@mui/material'
import { Outlet } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'

// actions
import { SET_MENU } from 'src/store/actions'

// components
import Header from './Header'
import SideBar from './SideBar'

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  marginTop: '80px',
  marginLeft: '20px',
  width: 'calc(100% - 240px)',
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px'
    }
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  })
}))

function MainLayout() {
  const theme = useTheme()
  const leftDrawerOpened = useSelector((state) => state.customization.opened)
  const dispatch = useDispatch()

  const handleDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened })
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: 'rgba(0, 0, 0, 0.12)'
        }}
      >
        <Toolbar>
          <Header handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>

      <SideBar />
      <Main theme={theme} open={leftDrawerOpened}>
        <Outlet />
      </Main>

    </Box>
  )
}

export default MainLayout
