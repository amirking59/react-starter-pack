import { Link } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import ListItemButton from '@mui/material/ListItemButton'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { SET_MENU_ITEM } from 'src/store/actions.js'

function Item({ item, index }) {
  const dispatch = useDispatch()
  const theme = useTheme()
  const leftDrawerOpened = useSelector((state) => state.customization.opened)
  const selectedItem = useSelector((state) => state.customization.selected)

  const handleSelectItem = (id) => {
    dispatch({ type: SET_MENU_ITEM, selected: id })
  }

  return (
    <Tooltip
      componentsProps={{
        tooltip: {
          sx: {
            marginLeft: '0 !important',
            marginTop: 0,
            textAlign: 'center',
            padding: '0 10px',
            lineHeight: '36px',
            borderRadius: '0 2px 2px 0',
            width: '120px',
            minHeight: '36px'
          }
        }
      }}
      placement="right-start"
      title={(
        <>
          <div>hello</div>
          <button type="button">test</button>
        </>
      )}
    >
      <ListItemButton
        component={Link}
        to={item.route}
        selected={selectedItem === index}
        key={item.title}
        onClick={() => handleSelectItem(index)}
        sx={{
          minHeight: 48,
          justifyContent: leftDrawerOpened ? 'initial' : 'center',
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
            ml: '6px',
            mr: leftDrawerOpened ? 3 : 'auto',
            color: selectedItem === index ? 'white' : 'initial',
            justifyContent: 'center'
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} sx={{ display: leftDrawerOpened ? 'initial' : 'none' }} />
      </ListItemButton>
    </Tooltip>

  )
}

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default Item
