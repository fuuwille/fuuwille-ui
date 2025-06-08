import { extendTheme } from '@mui/joy/styles';
import mainPaletteNeutral from './dark/paletteNeutral';
import mainPaletteBackground from './dark/paletteBackground';

export const mainTheme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: mainPaletteBackground,
                text: {
                    primary: '#f5f5f5',
                    secondary: '#b0b3b8',
                },
                neutral: mainPaletteNeutral,
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