import React, {FC, useMemo, useState} from 'react';
import {LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode
}

const defaultTheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme)
    }

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;