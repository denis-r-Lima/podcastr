import { FormEvent, useRef } from 'react'
import Lottie from 'react-lottie'
import { useRouter } from 'next/router'

import { OuterContainer, SignInContent, SignUpContent, Container, LottieDiv} from './styles'
import programmingAnimation from '../../../public/8306-programming-animation.json'
import api from '../../services/api'
import Cookie from '../../utils/cookiesHandle'
import { useAuthenticationContext } from '../../contexts/authenticationContext'

export function LogIn(){

    const { toggleAuthenticated } = useAuthenticationContext()

    const Router = useRouter()

    const div = useRef<HTMLDivElement>(null)

    const name = useRef<string>('')
    const email = useRef<string>('')
    const password = useRef<string>('')


    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: programmingAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    function flipCard(){
        div.current.classList.contains('rotate') ?
        div.current.classList.remove('rotate') :
        div.current.classList.add('rotate')

        name.current = ''
        email.current = ''
        password.current = ''


    }

    async function handleSignUp(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const body = {
            name: name.current,
            email: email.current,
            password: password.current
        }

        const user = await api.post('/register', body)
        console.log(user)
    }

    async function handleSignIn(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const body = {
            email: email.current,
            password: password.current
        }

        try{
            const response = await api.post('/authenticate', body)
            
            const userToken = response.data.token

            Cookie.CreateCookie('user__token', userToken, 7)
            toggleAuthenticated()

            Router.push('/')

        }catch(err){
            console.log(err.response.data)
        }

        
    }


    return(
        <OuterContainer>
            <LottieDiv>
                <Lottie options={defaultOptions}/>
            </LottieDiv>
            <Container ref={div}>
                <SignInContent>
                    <h1>Sign In</h1>
                    <form onSubmit={ e => handleSignIn(e)}>
                        <label>Email:</label>
                        <input type="email" name="email" onChange={ e => email.current = e.currentTarget.value} />
                        <label>Password</label>
                        <input type="password" name="password" onChange={ e => password.current = e.currentTarget.value}/>
                        <button>Sign In</button>
                        <p>Don't have an account? <a onClick={flipCard}>Click Here</a></p>
                    </form>
                </SignInContent>
                <SignUpContent>
                    <h1>Sign Up</h1>
                    <form onSubmit={ e => handleSignUp(e)}>
                        <label >Name</label>
                        <input type="text" onChange={ e => name.current = e.currentTarget.value}/>
                        <label>Email:</label>
                        <input type="email" name="email" onChange={ e => email.current = e.currentTarget.value} />
                        <label>Password</label>
                        <input type="password" name="password" onChange={ e => password.current = e.currentTarget.value}/>
                        <button>Sign Up</button>
                        <p>Already have an account? <a onClick={flipCard}>Click Here</a></p>
                    </form>
                </SignUpContent>
            </Container>
        </OuterContainer>
    )
}