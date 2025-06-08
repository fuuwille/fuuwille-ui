import { Switch } from '@mui/joy';
import style from '../styles/Header.module.css';
import { useAppTheme } from '../core/main';

export const Header = () => {
    const { mode, toggleMode } = useAppTheme((state) => state);

    return (
        <header className={style.header}>
            <Switch
                checked={mode === "dark"}
                onChange={toggleMode ?? undefined}
                slotProps={{
                    input: { 'aria-label': 'Toggle dark mode' },
                }}
                sx={{ marginLeft: 'auto' }}
            />
        </header>
    ); 
}

export default Header;