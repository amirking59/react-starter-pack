import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { useTheme } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import ListItemButton from '@mui/material/ListItemButton'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'

import Item from '../Item'
import CollapseItem from './CollapseItem'

function CollapseMenu({ item }) {
  const theme = useTheme()
  const leftDrawerOpened = useSelector((state) => state.customization.opened)
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Tooltip
        disableHoverListener={leftDrawerOpened}
        componentsProps={{
          tooltip: {
            sx: {
              background: 'transparent',
              border: `1px solid ${theme.palette.text.primary}`,
              borderLeft: 'none',
              marginLeft: '8px !important',
              marginTop: 0,
              textAlign: 'center',
              padding: '0 10px',
              lineHeight: '36px',
              borderRadius: '0 2px 2px 0',
              width: '240px',
              minHeight: '36px'
            }
          }
        }}
        placement="right-start"
        title={(
          <>
            {
              item.children.map((i) => (<CollapseItem item={i} key={i.name} />))
            }
          </>
      )}
      >
        <ListItemButton
          key={item.name}
          onClick={toggleOpen}
          sx={{
            height: 41,
            borderRadius: '9000px',
            color: theme.palette.text.primary,
            justifyContent: leftDrawerOpened ? 'initial' : 'center',
            '&.Mui-selected, &.Mui-selected:hover': {
              background: theme.palette.primary.light,
              color: theme.palette.background.default
            },
            m: '8px'
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              color: theme.palette.text.primary,
              ml: '4px',
              mr: leftDrawerOpened ? 3 : 'auto',
              justifyContent: 'center',
              [theme.breakpoints.down('sm')]: {
                ml: 0
              }
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} sx={{ display: leftDrawerOpened ? 'initial' : 'none' }} />
          {/* eslint-disable-next-line no-nested-ternary */}
          { leftDrawerOpened ? (open ? <ExpandLess /> : <ExpandMore />) : (
            <ArrowForwardIosIcon sx={{
              position: 'absolute',
              right: 8,
              color: theme.palette.text.primary,
              fontSize: '12px',
              [theme.breakpoints.down('sm')]: {
                right: '-2px',
                fontSize: '10px'
              }
            }}
            />
          )}
        </ListItemButton>
      </Tooltip>
      <Collapse timeout="auto" unmountOnExit in={open && leftDrawerOpened}>
        <List
          sx={{
            pl: '6px'
          }}
          component="div"
          disablePadding
        >
          {
            item.children.map((i) => (<Item item={i} key={i.name} />))
          }
        </List>
      </Collapse>
    </>
  )
}

CollapseMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired
}

export default CollapseMenu
