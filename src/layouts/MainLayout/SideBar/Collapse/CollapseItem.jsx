import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { useTheme } from '@mui/material/styles'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'

import { SET_MENU_ITEM } from 'src/store/actions.js'

function Item({ item }) {
  const dispatch = useDispatch()
  const theme = useTheme()
  const selectedItem = useSelector((state) => state.customization.selected)

  const handleSelectItem = (id) => {
    dispatch({ type: SET_MENU_ITEM, selected: id })
  }

  return (
    <ListItemButton
      component={Link}
      to={item.route}
      selected={selectedItem === item.name}
      key={item.title}
      onClick={() => handleSelectItem(item.name)}
      sx={{
        height: 41,
        color: theme.palette.text.primary,
        '&.Mui-selected, &.Mui-selected:hover': {
          background: theme.palette.primary.light,
          color: theme.palette.background.default
        },
        px: 2.5
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          ml: '4px',
          mr: 3,
          color: selectedItem === item.name
            ? theme.palette.background.default : theme.palette.text.primary,
          justifyContent: 'center',
          [theme.breakpoints.down('sm')]: {
            ml: 0
          }
        }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItemButton>
  )
}

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired
}

export default Item
