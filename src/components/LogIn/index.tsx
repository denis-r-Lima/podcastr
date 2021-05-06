import { FormEvent, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import { useRouter } from 'next/router'

import { OuterContainer, SignInContent, SignUpContent, Container, LottieDiv, ErrorMessage} from './styles'
import programmingAnimation from '../../../public/8306-programming-animation.json'
import api from '../../services/api'
import Cookie from '../../utils/cookiesHandle'
import { useAuthenticationContext } from '../../contexts/authenticationContext'

export function LogIn(){

    const { toggleAuthenticated, setUserName } = useAuthenticationContext()

    const Router = useRouter()

    const div = useRef<HTMLDivElement>(null)

    const [ name, setName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ message, setMessage ] = useState<string>('')




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
        
        setName('')
        setPassword('')
        setEmail('')
        setMessage('')
    }

    async function handleSignUp(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const body = {
            name,
            email,
            password
        }
        try{
            await api.post('/register', body)

            flipCard()
        }catch(err){
            setMessage('Email already registered!')
        }
    }

    async function handleSignIn(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const body = {
            email,
            password
        }

        try{
            const response = await api.post('/authenticate', body)
            
            const userToken = response.data.token
            const userName = response.data.name

            Cookie.CreateCookie('user__token', userToken, 7)
            toggleAuthenticated()
            setUserName(userName)

            Router.push('/')

        }catch(err){
            setMessage(err.response.data.error)
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
                        <input type="email" value={email} onChange={ e => setEmail(e.currentTarget.value)} />
                        <label>Password</label>
                        <input type="password" value={password} onChange={ e => setPassword(e.currentTarget.value)}/>
                        {message !== '' && (<ErrorMessage>{message}</ErrorMessage>)}
                        <button>Sign In</button>
                        <p>Don't have an account? <a onClick={flipCard}>Click Here</a></p>
                    </form>
                </SignInContent>
                <SignUpContent>
                    <h1>Sign Up</h1>
                    <form onSubmit={ e => handleSignUp(e)}>
                        <label >Name</label>
                        <input type="text" value={name} onChange={ e => setName(e.currentTarget.value)}/>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={ e => setEmail(e.currentTarget.value)} />
                        <label>Password</label>
                        <input type="password" value={password} onChange={ e => setPassword(e.currentTarget.value)}/>
                        {message !== '' && (<ErrorMessage>{message}</ErrorMessage>)}
                        <button>Sign Up</button>
                        <p>Already have an account? <a onClick={flipCard}>Click Here</a></p>
                    </form>
                </SignUpContent>
            </Container>
        </OuterContainer>
    )
}