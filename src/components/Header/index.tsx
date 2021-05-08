import Link from 'next/link'

import { Container } from './styles'
import { ThemeButton } from '../ThemeButton'
import { useAuthenticationContext } from '../../contexts/authenticationContext'
import Cookie from '../../utils/cookiesHandle'
import { useRouter } from 'next/router'

export function Header() {
  const {
    userName,
    toggleAuthenticated,
    setUserName
  } = useAuthenticationContext()

  const Router = useRouter()

  function logOut() {
    Cookie.DeleteCookie('user__token')
    toggleAuthenticated()
    setUserName(null)
    Router.push('/auth')
  }

  return (
    <Container>
      <Link href="/">
        <img src="/logo.svg" alt="Podcastr" />
      </Link>
      <p>
        The WebDev podcast for {userName ? `${userName}! | ` : 'you!'}{' '}
        {userName && <a onClick={logOut}>Log Out</a>}
      </p>
      <ThemeButton />
    </Container>
  )
}
