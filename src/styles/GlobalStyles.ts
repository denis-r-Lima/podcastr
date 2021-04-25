import { createGlobalStyle } from 'styled-components'

import { PropsTheme } from '../pages/_app'


export default createGlobalStyle `
    @media (max-width: 1080px) {
        html{
            font-size: 93.75%
        }
    }

    @media (max-width: 720px) {
        html{
            font-size: 87.5%
        }
    }

    *{
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
    }


    body{
        background-color: ${(props: PropsTheme) => props.theme.colors.gray_50};
        
    }

    body, input, textarea, button{
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        color: ${(props: PropsTheme) => props.theme.colors.gray_500};
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
        color: ${(props: PropsTheme) => props.theme.colors.gray_800};
    }
`