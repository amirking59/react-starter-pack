import { createTheme } from '@mui/material/styles'

import { grey } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'white',
      primary: {
        main: 'white'
      },
      secondary: {
        dark: grey[400],
        main: grey[300],
        light: grey[200]
      },
      main: 'rgb(227, 242, 253)'
    }
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(17, 25, 54)',
      primary: {
        main: 'rgb(17, 25, 54)'
      },
      secondary: {
        dark: grey[800],
        main: grey[700],
        light: grey[600]
      },
      main: 'rgb(26, 34, 63)'
    }
  }
})
