import styled from 'styled-components';
import { PropsTheme } from '../../Themes';

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: auto;

  & h2{
      margin-top: 3rem;
      margin-bottom: 1.5rem;
  }
`;

export const LatestEpisodes = styled.section`
  & ul{
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      & li{
          background: ${(props: PropsTheme) => props.theme.colors.background_light};
          border: 1px solid ${(props: PropsTheme) => props.theme.colors.border};
          padding: 1.25rem;
          border-radius: 1.5rem;
          position: relative;

          display: flex;
          align-items: center;

          & img{
              width: 6rem;
              height: 6rem;
              border-radius: 1rem;
              
          }

          
      }
  }
`;

export const Buttons = styled.div`
    position: absolute;
    right: 0.5rem;
    bottom: 1rem;

    display: flex;
    flex-direction: row-reverse;
    background: transparent;
    


    & button{
        width: 2.5rem;
        height: 2.5rem;
        background: ${(props: PropsTheme) => props.theme.colors.white};
        border: 1px solid ${(props: PropsTheme) => props.theme.colors.border};
        border-radius: 0.675rem;
        font-size: 0;
        display: grid;
        place-content: center; 
        transition: filter 0.3s;
        position: relative;
        & img{
            width: 1.5rem;
            height: 1.5rem;
        }
        & :hover{
            filter: brightness(0.95);
              }

        & :last-child{
            width: 2.5rem;
            height: 2.5rem;
            background: ${(props: PropsTheme) => props.theme.colors.white};
            border: none;
            border-radius: 0.675rem;
            font-size: 1.5rem;
            transition: filter 0.3s;
            }
        }
`

export const Details = styled.div`
  flex: 1;
  margin-left: 1rem;

  & a{
      display: block;
      color: ${(props: PropsTheme) => props.theme.colors.text_darker};
      font-family: Lexend, sans-serif;
      font-weight: 600;
      text-decoration: none;
      line-height: 1.4rem;
      
      & :hover{
          text-decoration: underline;
      }
  }
  & p{
        font-size: 0.875rem;
        margin-top: 0.5rem;
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

  & span{
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;

      & :last-child{
          margin-left: 0.5rem;
          padding-left: 0.5rem;
          position:relative;  

          & ::before{
              content: "";
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background-color: #ddd;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(-50%, -50%)
          }
      }
  }
`;

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;

  & table{
      width: 100%auto;

      & th , td{ 
        padding: 0.75rem 1rem;
        border-bottom: 1px solid ${(props: PropsTheme) => props.theme.colors.border};
      }

      & th{
          color: ${(props: PropsTheme) => props.theme.colors.text};
          text-transform: uppercase;
          font: 500 0.75rem Lexend, sans-serif;
          text-align: left;
      }

      & td{
          font-size: 0.875rem;

          & img{
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 0.5rem;  
          }

          & a{
            color: ${(props: PropsTheme) => props.theme.colors.text_darker};
            font-family: Lexend, sans-serif;
            font-weight: 600;
            text-decoration: none;
            line-height: 1.4rem;
            font-size: 1rem;
            
            & :hover{
                text-decoration: underline;
            }
          }

          & button{
            width: 2.5rem;
            height: 2.5rem;
            background: ${(props: PropsTheme) => props.theme.colors.white};
            border: 1px solid ${(props: PropsTheme) => props.theme.colors.border};
            border-radius: 0.5rem;
            font-size: 0;
            transition: filter 0.3s;

            display: grid;
            place-content: center; 
            & img{
                 width: 1.5rem;
                 height: 1.5rem;
             }
            & :hover{
                 filter: brightness(0.95)
            }
            & :last-child{               
                border: none;
                background: ${(props: PropsTheme) => props.theme.colors.white};
                font-size: 1.5rem;
                
            }
          }
      }
  }
`;
