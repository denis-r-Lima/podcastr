import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { ThemeButton } from '../components/ThemeButton'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import ThemeContextProvider from '../contexts/themeContext'
import { Container } from '../styles/app'

import GlobalStyles from '../styles/GlobalStyles'
import Theme from '../Themes'

function MyApp({ Component, pageProps }) {

  return (
    <PlayerContextProvider>
      <ThemeContextProvider>
        <Theme>
          <Container>
            <GlobalStyles />
            <main>
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
            <ThemeButton />
          </Container>
        </Theme>
      </ThemeContextProvider>
    </PlayerContextProvider>
  )
}

export default MyApp
