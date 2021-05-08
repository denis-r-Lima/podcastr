import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *, ::before, ::after{
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        transition:background 0.3s ,background-color 0.3s, color 0.3s;
    }

    html{
        font-size: 75%;
    }

    body{
        background-color: ${props => props.theme.colors.background};
        width: 100vw;
        height: 100vh;  
        overflow: hidden;
    }

    body, input, textarea, button{
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        color: ${props => props.theme.colors.text};
    }

    button{
        outline: none;
    }

    h1{
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    button{
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 600;
        font-family: Lexend, sans-serif;
        color: ${props => props.theme.colors.text_darker};
    }

    ::-webkit-scrollbar {
        width: 0.3rem;
    }

        /* Track */
    ::-webkit-scrollbar-track {
        background: #eee; 
    }
        
        /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

        /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media (max-width: 1080px) {
        html{
            font-size: 75%;
        }
    }

    @media (max-width: 920px) {
        html{
            font-size: 62.5%;
        }
    }
`
