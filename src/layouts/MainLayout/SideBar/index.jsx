import Drawer from '@mui/material/Drawer'

import { useDispatch, useSelector } from 'react-redux'

// material-ui
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

// actions
import { SET_MENU } from 'src/store/actions.js'

// components
import MenuList from './MenuList'

export default function TemporaryDrawer() {
  const theme = useTheme()
  const open = useSelector((state) => state.customization.opened)

  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
  const dispatch = useDispatch()

  const handleDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !open })
  }

  return (
    <div>
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            [theme.breakpoints.up('md')]: {
              top: '64px'
            }
          }
        }}
      >
        <MenuList />
      </Drawer>
    </div>
  )
}
