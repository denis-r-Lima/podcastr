import { useState, createContext, ReactNode, useContext } from 'react'

type ThemeContextType = {
    isDarkTheme: boolean,
    toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

type ThemeContextProviderProps = {
    children: ReactNode
  }

export default function ThemeContextProvider({ children }: ThemeContextProviderProps){

    const [isDarkTheme , setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(current => !current)
    }

    const value: ThemeContextType = {
        isDarkTheme,
        toggleTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
} 