import styled, { keyframes } from 'styled-components'

export const OnlineContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
`

export const LoadingContainer = styled.div`
    height: 50vh;
    max-height: 500px;
    width: 90vw;
    max-width: 600px;
    background: #fdfdfd;
    border-radius: 4px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ddd;
`

export const LoadingText = styled.div`
    font-size: 2rem;
    text-align: center;
    font-style: italic;
    color: #2d3436;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
      transform: rotate(180deg) scale(1.3);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
`

export const LoadingImage = styled.div`
    font-size: 4rem;
    animation: ${spin} 1.2s linear infinite;
`

const grow = keyframes`
  0% {
      transform: rotate(-45deg) scale(0.3);
      opacity: 0;
  }

  80% {
      transform: rotate(10deg) scale(1.15);
      opacity: 1;
  }

  100% {
      transform: rotate(0deg) scale(1);
      opacity: 1;
  }
`

export const IconAppear = styled.div`
  animation: ${grow} 0.4s forwards;
`