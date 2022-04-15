import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { useSelector } from 'react-redux'
import Item from './Item'

import menuItems from './menuItems.js'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    top: '56px'
  },
  top: '64px'
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`
  },
  [theme.breakpoints.down('sm')]: {
    top: '56px'
  },
  top: '64px'
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    top: '60px',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
)

export default function MiniDrawer() {
  const leftDrawerOpened = useSelector((state) => state.customization.opened)

  return (
    <Drawer variant="permanent" open={leftDrawerOpened}>
      <List>
        {menuItems.map((item, index) => (
          <Item item={item} key={item.name} index={index} />
        ))}
      </List>
    </Drawer>
  )
}
