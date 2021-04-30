import styled from 'styled-components';


export const Container = styled.div`
  margin-left: auto;
`;

export const Tracker = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 1rem;
    background-color:${(props) => props.theme.colors.ThemeButton};
    transition: all 0.5s;
    color: #333;
    
`

export const Handle= styled.div`
    width: 2.2rem;
    height: 2.2rem;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 50%;
    transform: translateX(50%);
    background-color:${(props) => props.theme.colors.white};
    transition: transform 0.5s;
    display: grid;
    place-items: center;
    font-size: 1rem;
    
    &.Dark{
        transform: translateX(-50%);
    }
`
