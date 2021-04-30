import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { useThemeContext } from '../contexts/themeContext'

export const themeLight = {
    colors: {
      white: '#fff',
      background_light: '#fff',
      background: '#f7f8fa',
      border: '#e6e8eb',
      border_darker: '#afb2b1',
      text: '#808080',
      text_darker: '#494d4b',
      green: '#04d361',
      Player_slider: '#9f75ff',
      Player_button_light: '#9164fa',
      Player_background: '#8257e5',
      Player_button: '#6f48c9',
      ThemeButton: '#e6e8eb'
    }
  }

  export const themeDark = {
    colors: {
      white: '#dedede',
      background_light: '#3A3A41',
      background: '#2B2B32',
      border: '#6a6a6b',
      border_darker: '#3f3f3f',
      text: '#999',
      text_darker: '#aaa',
      green: '#02aa4e',
      Player_slider: '#9f75ff',
      Player_button_light: '#9164fa',
      Player_background: '#22223A',
      Player_button: '#6f48c9',
      ThemeButton: '#44475a'
    }
  }
  

  type ThemeProps = {
    children: ReactNode
  } 
  

  export default function Theme({ children }: ThemeProps){

      const { isDarkTheme } = useThemeContext()

      return(
          <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
              {children}
          </ThemeProvider>
      )
  }