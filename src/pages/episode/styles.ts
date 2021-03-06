import styled from 'styled-components'

export const OuterContainer = styled.div`
  height: calc(100vh - 6.5rem);
  width: 100%;
  overflow-y: auto;
`

export const Container = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;

  & header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};

    & h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    & span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
        position: relative;

        & ::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%50%;
          background-color: #ddd;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`

export const ThumbnailContainer = styled.div`
  position: relative;

  & img {
    border-radius: 1rem;
  }

  & button {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    border: 0;
    position: absolute;
    z-index: 5;
    font-size: 1.8rem;
    display: grid;
    place-items: center;
    color: ${props => props.theme.colors.white};

    transition: filter 0.3s;

    & :first-child {
      top: 50%;
      left: 0;
      background: ${props => props.theme.colors.Player_button};
      transform: translate(-50%, -50%);
    }

    & :last-child {
      top: 50%;
      right: 0;
      background: ${props => props.theme.colors.green};
      transform: translate(50%, -50%);
    }

    & :hover {
      filter: brightness(0.85);
    }
  }
`

export const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: ${props => props.theme.colors.text_darker};

  & p {
    margin: 1.5rem 0;
  }
`
