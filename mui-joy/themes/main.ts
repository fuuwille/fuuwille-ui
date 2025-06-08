import { extendTheme } from '@mui/joy/styles';

export const mainTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#1e1f24',
          surface: '#2a2b30',
          popup: '#2e2f34',
          level1: '#32343a',
          level2: '#3a3c42',
          level3: '#44464d',
        },
        text: {
          primary: '#ffffff',
          secondary: '#cfd2dc',
        },
        neutral: {
          solidBg: '#3a3c42',
          solidHoverBg: '#50525a',
          plainColor: '#cfd2dc',
        },
        primary: {
          solidBg: '#1976d2',
          solidHoverBg: '#1565c0',
          plainColor: '#90caf9',
        },
        success: {
          solidBg: '#2e7d32',
          solidHoverBg: '#1b5e20',
          plainColor: '#a5d6a7',
        },
      },
    },
  },
});

export default mainTheme;