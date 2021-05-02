import styled from 'styled-components';

export const Container = styled.div`
  width: 25.6rem;
  height:100%;
  padding: 3rem 4rem;

  background-color: ${(props) => props.theme.colors.Player_background};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  

  & header{
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: auto;
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
  
  @media (max-width: 720px) {
        position: fixed;
        right: 0;
        bottom: 0;
        transform: translateX(100%);
        transition: transform 0.4s;

        z-index: 10;

        & ::before{
            content: "Open Player";
            position: relative;
            left: -50%;
            width: 8rem;
            text-align: center;
            margin: 0 auto;
            padding: 0.5rem 1rem;
            border-radius: 1rem 1rem 0 0;
            font-weight: bold;
            transform: translate(-60%, 50vh) rotate(-90deg);
            background-color: ${(props) => props.theme.colors.Player_background};
            color:${(props) => props.theme.colors.white};
            cursor: pointer;
        }
     

        &.visible{
            transform: translateX(0%);

            & ::before{
            content: "Close Player";
            position: relative;
            left: -50%;
            width: 8rem;
            text-align: center;
            margin: 0 auto;
            padding: 0.5rem 1rem;
            border-radius: 1rem 1rem 0 0;
            font-weight: bold;
            transform: translate(-60%, 50vh) rotate(-90deg);
            background-color: ${(props) => props.theme.colors.Player_background};
            color:${(props) => props.theme.colors.white};
            cursor: pointer;
        }
        }
    }

`;

export const EmptyPlayer = styled.div`
    width: 100%;
    height: 20rem;
    border: 2px dashed ${(props) => props.theme.colors.border_darker};
    border-radius: 1.5rem;
    background: linear-gradient(143.8deg, rgba(145,100,250,08)0%, rgba(0,0,0,0)100%);

    padding: 4rem;
    text-align: center;
    margin: auto 0;

    display: flex;
    align-items: center;
    justify-content: center;

`

export const CurrentPlaying = styled.div`
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto 0;


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
    background-color: ${(props) => props.theme.colors.Player_slider};
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
        font-size: 1.7rem;
        color: ${(props) => props.theme.colors.white};
        transition: filter 0.3s;
        display: grid;
        place-items: center;
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
            font-size: 2rem;
            background: ${(props) => props.theme.colors.Player_button_light};

            & :hover:not(:disabled){
                filter: brightness(0.95)
            }
        }

        &.isActive{
            color: ${(props) => props.theme.colors.green};
            & :hover{
                filter: brightness(0.65);
            }

        }

    }

`
