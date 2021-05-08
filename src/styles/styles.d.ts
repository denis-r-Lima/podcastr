import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      background_light: string
      background: string
      border: string
      border_darker: string
      text: string
      text_darker: string
      green: string
      Player_slider: string
      Player_button_light: string
      Player_background: string
      Player_button: string
      ThemeButton: string
    }
  }
}
