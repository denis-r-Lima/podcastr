import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import { Container } from '../styles/app'

import GlobalStyles from '../styles/GlobalStyles'

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

export type PropsTheme = {
  theme: typeof themeLight
}

function MyApp({ Component, pageProps }) {

  return (
  <ThemeProvider theme={themeLight}>
    <PlayerContextProvider>
      <Container>
        <GlobalStyles />
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Container>
    </PlayerContextProvider>
  </ThemeProvider>
  )
}

export default MyApp
