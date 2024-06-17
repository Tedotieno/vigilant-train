import { createTheme } from '@mui/material/styles';

const customColors = {
  primary: {
    turquoise: '#5ACCCC',
    white: '#FFFFFF',
    steelBlue: '#335C6E',
    yellow: '#FABD33',
  },
  secondary: {
    turquoiseLight: '#CFFAFA',
    turquoiseDarkOne: '#53C2C2',
    turquoiseDarkTwo: '#28B8B8',
    orangeRed: '#F76434',
    teal: '#4AA088',
    yellowDark: '#FAADOO',
  },
};

const customTheme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
  palette: {
    primary: {
      main: customColors.primary.turquoise,
    },
    secondary: {
      main: customColors.primary.steelBlue,
    },
  },
});

export default customTheme;
