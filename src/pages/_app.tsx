import { useRouter } from 'next/router'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { AuthenticationContextProvider } from '../contexts/authenticationContext'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import ThemeContextProvider from '../contexts/themeContext'
import { Container } from '../styles/app'

import GlobalStyles from '../styles/GlobalStyles'
import Theme from '../Themes'

function MyApp({ Component, pageProps }) {

  const Router = useRouter()

  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  const[ userName, setUserName ] = useState<string>(null)

  function toggleAuthenticated() {
    setIsAuthenticated(current => !current)
  }

  const value = {
    isAuthenticated,
    toggleAuthenticated,
    userName, 
    setUserName
  }

  
  function AuthenticationPage(){
    return(
      <Container>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </Container>

    )
  }

  function notAuthenticationPage(){
    return(
      <Container>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        <Player />
      </Container>
    )
  }

  return (
    <AuthenticationContextProvider value={value}>
      <PlayerContextProvider>
        <ThemeContextProvider>
          <Theme>
            <GlobalStyles />
            {
            Router.pathname === "/auth" ?
              AuthenticationPage():
                !isAuthenticated ? 
                <div />
                :
                notAuthenticationPage()
            }
          </Theme>
        </ThemeContextProvider>
      </PlayerContextProvider>
    </AuthenticationContextProvider>
  )
}

export default MyApp
