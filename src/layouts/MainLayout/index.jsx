import { AppBar, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { SET_MENU } from 'src/store/actions'
import Header from './Header'
import SideBar from './SideBar'

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
