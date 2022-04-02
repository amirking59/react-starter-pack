import { AppBar, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header/index.jsx'
import SideBar from './SideBar'

import { SET_MENU } from '../../store/actions'

function MainLayout() {
  const leftDrawerOpened = useSelector((state) => state.customization.opened)
  const dispatch = useDispatch()

  const handleDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened })
  }

  return (
    <>
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
          <Header handleLeftDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>

      <SideBar />
    </>
  )
}

export default MainLayout
