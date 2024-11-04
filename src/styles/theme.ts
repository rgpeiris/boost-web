import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#EA0029',
      light: '#F8A6B4',
      dark: '#EA0029',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#469DD800',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
  },
});

export default theme;
