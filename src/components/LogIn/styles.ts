import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 6.5rem);
  display: flex;
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  margin-block: auto;
  margin-left: auto;
  margin-right: 20rem;
  height: 35rem;
  width: 30rem;
  transform-style: preserve-3d;

  transition: transform ease-out 0.6s;

  &.rotate{
    transform: rotateY(180deg)
  }

  @media (max-width: 850px){
    margin: auto;
  }

`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5rem 3rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.colors.background_light};
  display: grid;
  place-items: center;
  backface-visibility: hidden;

  transform-style: preserve-3d;

  & h1{
    transform: translateZ(5rem);
    padding: 1rem 0;
  }

  & form{
      transform: translateZ(5rem);
      display:flex;
      flex-direction: column;
      & input{
          background-color: transparent;
          border-style: solid;
          border-width: 0 0 1px 0;
          border-color: ${(props) => props.theme.colors.border};
          outline: none;
          margin: 1rem 0;
      }
      & a{
          cursor: pointer;
      }
      & label{
          font-weight: bold;
      }
      & button{
          padding: 0.5rem 1rem;
          margin: 0.8rem 0;
          background-color: ${(props) => props.theme.colors.Player_button_light};
          color: ${(props) => props.theme.colors.white};
          font-weight: bold;
          outline: ${(props) => props.theme.colors.white} solid 1px;

          transition: outline-offset linear 0.1s;

          & :hover{
              outline-offset: -0.4rem;
          }
      }
  }

  
`;


export const SignInContent = styled(Content)`
`;

export const SignUpContent = styled(Content)`
  transform: rotateY(180deg);
`;

export const LottieDiv = styled.div`
  position: absolute;
  width: 45%;
  left: 5rem;
  bottom: -3rem;
  padding: 0 1rem;
  z-index: -1;

  @media (max-width: 700px){
    display: none;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0.5rem auto;
  font-weight: bold;
`