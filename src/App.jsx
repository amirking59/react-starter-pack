import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'

import Routes from 'src/routes/index.js'
import { darkTheme, lightTheme } from 'src/theme.js'

function App() {
  const isDarkMode = useSelector((state) => state.customization.isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
