// theme.js
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica'
  },
  palette: {
    primary: {
      main: '#00237B', // Change this to your desired primary color
    },
  }

});

export default theme;