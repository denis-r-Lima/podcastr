import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

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

    useEffect(() => {
        const storageTheme = localStorage.getItem('theme')
        try{
            const theme = JSON.parse(storageTheme)
    
            const themeType = typeof theme
            
            if(storageTheme && themeType === 'boolean') {
                setIsDarkTheme(theme)}
        }catch(err){
            return
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDarkTheme))
    }, [isDarkTheme])

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