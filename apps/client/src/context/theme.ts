import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: "dark",
    lightTheme: "light",
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}