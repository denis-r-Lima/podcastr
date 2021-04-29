import styled from 'styled-components';
import { PropsTheme } from '../../Themes';

export const Container = styled.div`
  width: 25.6rem;
  height: 100vh;
  padding: 3rem 4rem;

  background-color: ${(props: PropsTheme) => props.theme.colors.Player_background};
  color: ${(props: PropsTheme) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & header{
      display: flex;
      align-items: center;
      gap: 1rem;
  }

  & strong{
      font-family: Lexend, sans-serif;
      font-weight: 600;
  }

  & footer{
      align-self: stretch;
      &.empty .progressBar{
          opacity: 0.6;
      }
  }
  
`;

export const EmptyPlayer = styled.div`
    width: 100%;
    height: 20rem;
    border: 2px dashed ${(props: PropsTheme) => props.theme.colors.border_darker};
    border-radius: 1.5rem;
    background: linear-gradient(143.8deg, rgba(145,100,250,08)0%, rgba(0,0,0,0)100%);

    padding: 4rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

`

export const CurrentPlaying = styled.div`
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    & strong{
        display: block;
        font:600 1.25rem Lexend, sans-serif;
        margin-top: 2rem;
        line-height: 1.75rem;
    }

    & span{
        display: block;
        margin-top: 1rem;
        opacity: 0.6;
        line-height: 1.5rem;
    }

    & img{
        border-radius: 1.5rem;
    }
`


export const Progress = styled.div`
    display:flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.875rem;

    & span{
        display: inline-block;
        width: 4rem;
        text-align: center;
    }
`

export const EmptySlider = styled.div`
    width: 100%;
    height: 4px;
    background-color: ${(props: PropsTheme) => props.theme.colors.Player_slider};
    border-radius: 2px;
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;
    & button{
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 0;
        color: ${(props: PropsTheme) => props.theme.colors.Player_button};
        transition: filter 0.3s;

        & :disabled{
            cursor: default;
            opacity: 0.6;
        }

        & :hover:not(:disabled){
                filter: brightness(0.7)
            }

        &.play{
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background: ${(props: PropsTheme) => props.theme.colors.Player_button_light};

            & :hover:not(:disabled){
                filter: brightness(0.95)
            }
        }

        &.isActive{
            filter: invert(0.35) sepia(1) saturate(3) hue-rotate(80deg);

            & :hover{
                filter: brightness(0.65) invert(0.35) sepia(1) saturate(3) hue-rotate(80deg);
            }

        }

    }

`
