import { ReactNode } from 'react'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { useThemeContext } from '../contexts/themeContext'

export const themeLight = {
    colors: {
      white: '#fff',
      gray_50: '#f7f8fa',
      gray_100: '#e6e8eb',
      gray_200: '#afb2b1',
      gray_500: '#808080',
      gray_800: '#494d4b',
      green_500: '#04d361',
      purple_300: '#9f75ff',
      purple_400: '#9164fa',
      purple_500: '#8257e5',
      purple_800: '#6f48c9'
    }
  }

  export const themeDark = {
    colors: {
      white: '#fff',
      gray_50: '#636363',
      gray_100: '#5e5e5e',
      gray_200: '#afb2b1',
      gray_500: '#808080',
      gray_800: '#494d4b',
      green_500: '#d39c04',
      purple_300: '#9f75ff',
      purple_400: '#9164fa',
      purple_500: '#8257e5',
      purple_800: '#6f48c9'
    }
  }
  
  export type PropsTheme = {
    theme: typeof themeLight
  }

  type ThemeProps = {
    children: ReactNode
  } 
  

  export default function Theme({ children }: ThemeProps){

      const { darkTheme } = useThemeContext()

      return(
          <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
              {children}
          </ThemeProvider>
      )
  }