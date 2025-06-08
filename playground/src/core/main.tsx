import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../styles/global.css'
import { create } from 'zustand'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

type AppMode = "light" | "dark";
type AppModeSetter = (mode: AppMode) => void;

interface AppThemeStore {
  mode: AppMode;
  setter : AppModeSetter
  bindSetter: (setter: AppModeSetter) => void;
  toggleMode: () => void;
}

export const useAppTheme = create<AppThemeStore>((set) => ({
  mode: "light",
  setter: () => {},
  bindSetter: (setter) => set(() => ({ setter })),
  toggleMode: () => set((state) => {
    const mode = state.mode === "light" ? "dark" : "light";
    state.setter(mode);
    return { mode }
  }),
}));