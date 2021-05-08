import { useRouter } from 'next/router'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect
} from 'react'

import api from '../services/api'
import Cookie from '../utils/cookiesHandle'

type AuthenticationContextType = {
  isAuthenticated: boolean
  userName: string
  toggleAuthenticated: () => void
  setUserName: Dispatch<SetStateAction<string>>
}

const AuthenticationContext = createContext({} as AuthenticationContextType)

type AuthenticationContextProviderProps = {
  children: ReactNode
  value: AuthenticationContextType
}

export function AuthenticationContextProvider({
  children,
  value
}: AuthenticationContextProviderProps) {
  const Router = useRouter()

  useEffect(() => {
    const userToken = Cookie.GetCookie('user__token')

    if (!userToken) {
      if (Router.pathname !== '/auth') Router.push('/auth')

      return
    }

    const checkUserToken = async () => {
      try {
        const response = await api.get('/userCheck')
        value.toggleAuthenticated()
        value.setUserName(response.data.name)
        if (Router.pathname === '/auth') Router.push('/')
      } catch (err) {
        Cookie.DeleteCookie('user__token')
        if (Router.pathname !== '/auth') Router.push('/auth')
      }
    }

    checkUserToken()
  }, [])

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext)
}
