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
  background: theme.palette.background.main,
  marginTop: '64px',
  height: 'calc(100vh - 64px)',
  paddingTop: '12px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '56px',
    height: 'calc(100vh - 56px)'
  },
  paddingLeft: '20px',
  overflow: 'scroll',
  overflowX: 'hidden',
  borderRight: 'none',
  borderTopLeftRadius: '24px',
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      duration: 300
    }),
    width: 'calc(100% - 41px)'
  }),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      duration: 300
    }),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 'calc(100% - 240px)'
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
          border: 'none',
          background: theme.palette.background.primary.main
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
