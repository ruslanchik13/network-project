import {LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface useThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        if (setTheme) {
            setTheme(newTheme)
        }
        localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme)
    }

    return <useThemeResult> {
        theme, toggleTheme
    }

}
