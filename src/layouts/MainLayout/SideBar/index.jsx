import { styled, useTheme } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'

import { SET_MENU_ITEM } from 'src/store/actions.js'
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
    width: `calc(${theme.spacing(8)} + 1px)`
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
  const theme = useTheme()
  const dispatch = useDispatch()

  const leftDrawerOpened = useSelector((state) => state.customization.opened)
  const selectedItem = useSelector((state) => state.customization.selected)

  const handleSelectItem = (id) => {
    dispatch({ type: SET_MENU_ITEM, selected: id })
  }

  const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'))

  const open = matchUpLg || leftDrawerOpened

  return (
    <Drawer variant="permanent" open={open}>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            component={Link}
            to={item.route}
            selected={selectedItem === index}
            key={item.title}
            onClick={() => handleSelectItem(index)}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              '&.Mui-selected, &.Mui-selected:hover': {
                background: theme.palette.secondary.light,
                color: 'white'
              },
              px: 2.5
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                color: selectedItem === index ? 'white' : 'initial',
                justifyContent: 'center'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}
