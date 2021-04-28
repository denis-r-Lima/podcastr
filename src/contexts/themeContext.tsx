import { useState, createContext, ReactNode, useContext } from 'react'

type ThemeContextType = {
    darkTheme: boolean,
    toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

type ThemeContextProviderProps = {
    children: ReactNode
  }

export default function ThemeContextProvider({ children }: ThemeContextProviderProps){

    const [darkTheme , setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(current => !current)
    }

    const value: ThemeContextType = {
        darkTheme,
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