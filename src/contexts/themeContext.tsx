import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Cookie from '../utils/cookiesHandle'

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
        const themeCookie = Cookie.GetCookie('user__dark__theme')

        const cookieType = typeof themeCookie

        if(themeCookie && cookieType === 'boolean') setIsDarkTheme(themeCookie)

    }, [])

    useEffect(() => {
        Cookie.CreateCookie('user__dark__theme', isDarkTheme, 300)
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