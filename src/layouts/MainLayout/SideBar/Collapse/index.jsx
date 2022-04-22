import { useState } from 'react'

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

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Item from '../Item'
import ItemMini from '../ItemMini'

function CollapseItem({ item }) {
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
              border: `1px solid ${theme.palette.text.secondary}`,
              borderLeft: 'none',
              marginLeft: '0 !important',
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
              item.children.map((i) => (<ItemMini item={i} key={i.name} />))
            }
          </>
      )}
      >
        <ListItemButton
          key={item.name}
          onClick={toggleOpen}
          sx={{
            minHeight: 48,
            color: theme.palette.text.secondary,
            justifyContent: leftDrawerOpened ? 'initial' : 'center',
            '&.Mui-selected, &.Mui-selected:hover': {
              background: theme.palette.secondary.light,
              color: theme.palette.background.default
            },
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              color: theme.palette.text.secondary,
              ml: '6px',
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
              color: theme.palette.text.secondary,
              fontSize: '12px',
              [theme.breakpoints.down('sm')]: {
                right: 3,
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

CollapseItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired
}

export default CollapseItem