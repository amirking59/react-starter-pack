import { createTheme } from '@mui/material/styles'

import { grey } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      secondary: {
        dark: grey[400],
        main: grey[300],
        light: grey[200]
      }

    }
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      secondary: {
        dark: grey[800],
        main: grey[700],
        light: grey[600]
      }
    }
  }
})
