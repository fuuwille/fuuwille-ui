import { extendTheme } from '@mui/joy/styles';

export const mainTheme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    body: '#141414',
                    surface: '#1A1C1F',
                    level1: '#202225',
                    level2: '#26282C',
                    level3: '#2C2F34',
                },
                text: {
                    primary: '#f5f5f5',
                    secondary: '#b0b3b8',
                },
                neutral: {
                    solidBg: '#2C2F34',
                    solidHoverBg: '#3A3E44',
                    plainColor: '#cfd2dc',
                },
                primary: {
                    solidBg: '#2979ff',
                    solidHoverBg: '#1565c0',
                    plainColor: '#82b1ff',
                },
                success: {
                    solidBg: '#2e7d32',
                    solidHoverBg: '#1b5e20',
                    plainColor: '#a5d6a7',
                },
                danger: {
                    solidBg: '#d32f2f',
                    solidHoverBg: '#b71c1c',
                    plainColor: '#ef9a9a',
                },
            },
        },
    }
});

export default mainTheme;