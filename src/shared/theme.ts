import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  cssVariables: true,
  palette: {
    secondary: {
      main: '#9C27B0',
    },
    text: {
      primary: '000000',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
