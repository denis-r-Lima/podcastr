import styled from 'styled-components';

export const Container = styled.header`
    background-color: ${(props) => props.theme.colors.background_light};
    height: 6.5rem;
    display: flex;
    align-items: center;
    padding: 2rem 4rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};

    & p{
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 1px solid ${(props) => props.theme.colors.border};
    }

    & span{
        margin-left: auto;
        text-transform: capitalize;
    }

    & img{
        cursor: pointer;
        background: ${(props) => props.theme.colors.white};
        border-radius: 0.5rem;
        padding: 0.3rem 0.5rem;
    }

    @media (max-width: 400px){
        & p{
            display: none;
        }
    }
`;
