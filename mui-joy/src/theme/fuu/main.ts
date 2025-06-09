import { extendTheme } from '@mui/joy/styles';
import fuuPaletteNeutral from './paletteNeutral';
import fuuDarkPaletteBackground from './dark/paletteBackground';
import fuuPaletteSuccess from './paletteSuccess';

export const fuuTheme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: fuuDarkPaletteBackground,
                text: {
                    primary: '#f5f5f5',
                    secondary: '#b0b3b8',
                },
                neutral: fuuPaletteNeutral,
                primary: {
                    solidBg: '#2979ff',
                    solidHoverBg: '#1565c0',
                    plainColor: '#82b1ff',
                },
                success: fuuPaletteSuccess,
                danger: {
                    solidBg: '#d32f2f',
                    solidHoverBg: '#b71c1c',
                    plainColor: '#ef9a9a',
                },
            },
        },
        light: {
            palette: {
                neutral: fuuPaletteNeutral,
                primary: {
                    solidBg: '#1976d2',
                    solidHoverBg: '#115293',
                    plainColor: '#90caf9',
                },
                success: fuuPaletteSuccess,
                danger: {
                    solidBg: '#d32f2f',
                    solidHoverBg: '#b71c1c',
                    plainColor: '#ef9a9a',
                },
            },
        },
    }
});

export default fuuTheme;