import { useDispatch, useSelector } from 'react-redux'
import Switch from '@mui/material/Switch'

import { TOGGLE_DARK_MODE } from 'src/store/actions.js'

export default function Dashboard() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode)
  const dispatch = useDispatch()

  const handleThemeChange = () => {
    dispatch({ type: TOGGLE_DARK_MODE })
  }

  return (
    <Switch checked={isDarkMode} onChange={handleThemeChange} />
  )
}
