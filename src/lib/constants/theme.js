import { store } from '../../store'

export const lightTheme = {
  palette: {
    primary: {
      main: '#fff',
      light: '#8a2b06',
      dark: '#8a2b06',
      contrstText: '#fff',
    },
    secondary: {
      main: '#383838',
      light: '#5c5957',
      dark: '#5c5957',
      contrstText: '#fff',
    },

    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      contrstText: '#fff',
    },
    success: {
      main: '#0cec32',
      light: '#0cec32',
      dark: '#0cec32',
      contrstText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  spacing: {},
}

export const darkTheme = {
  palette: {
    primary: {
      main: "rgb(0,0,241)",
      light: "rgb(0,0,241)",
      dark: "rgb(0,0,241)",
      contrstText: "rgb(0,0,241)",
    },
    secondary: {
      main: "#5c5957",
      light: "rgb(0,0,241)",
      dark: "#5c5957",
      contrstText: "#fff",
    },

    error: {
      main: "#ee1616",
      light: "#ee1616",
      dark: "#ee1616",
      contrstText: "#fff",
    },
    success: {
      main: "#0cec32",
      light: "#0cec32",
      dark: "#0cec32",
      contrstText: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
  },
  spacing: {},
};

export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode

  return currentTheme === 'light' ? lightTheme : darkTheme
}
