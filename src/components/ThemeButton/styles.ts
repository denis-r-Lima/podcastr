import styled from 'styled-components';
import { PropsTheme } from '../../Themes';


export const Container = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  & ::before{
      content: "Lights";
      position: absolute;
      top:0;
      left: 50%;
      transform:translate(-50%, -110%);
      color: ${(props: PropsTheme) => props.theme.colors.white};
      font-size: 0.675rem;
  }
`;

export const Tracker = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 1.5rem;
    border: 1px solid ${(props: PropsTheme) => props.theme.colors.text};
    border-radius: 1rem;
    background-color:${(props: PropsTheme) => props.theme.colors.ThemeButton};
    transition: all 0.5s;
    & ::before{
        content: "OFF";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0.3rem, -50%);
        font-size: 0.525rem;
    }
    & ::after{
            content: "ON";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(-0.3rem, -50%);
            font-size: 0.525rem;
            color: ${(props: PropsTheme) => props.theme.colors.white};
        }
`

export const Handle= styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid ${(props: PropsTheme) => props.theme.colors.text};
    border-radius: 50%;
    transform: translateX(50%);
    background-color:${(props: PropsTheme) => props.theme.colors.white};
    transition: transform 0.5s;
    
    &.Dark{
        transform: translateX(-50%);
    }
`
