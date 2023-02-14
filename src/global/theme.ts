import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { COLORS } from './appConstants'

let theme = createTheme({
  palette: {
    primary: {
      main: COLORS.MAIN,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme